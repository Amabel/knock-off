import $ from 'jquery'
import { timeDiff, addUpTime, getSimpleDate } from '../../shared/time-util'

export function launchModifyPageAction() {
  if (currentDate()) {
    setInterval(() => {
      updateEstimateRestTime()
    }, 1000)
  }
}

function updateEstimateRestTime() {
  const lastAction = getLastAction()
  if (lastAction === '退室') {
    const lastLeaveTime = getLastLeaveTime()

    if (lastLeaveTime) {
      const now = new Date()
      const currentTime = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
      const diff = timeDiff(lastLeaveTime, currentTime)
      const currentRestTime = getCurrentRestTime()
      const totalRestTime = addUpTime(diff, currentRestTime)

      addRestTimeToHtml(totalRestTime)
    }
  }
}

function getCurrentRestTime() {
  return $('#time-table tr')
    .eq(1)
    .find('td')
    .get(0)
    .innerText.slice(0, -1)
    .replace('時間', ':')
}

function getLastLeaveTime() {
  const leaveTimeCell = $('#logs-table tr:contains(\'退室\')')
    .find('td')
    .eq(1)
    .get(0)

  if (leaveTimeCell) {
    return leaveTimeCell.innerText
  }

  return null
}

function getLastAction() {
  return $('#logs-table tr:last')
    .find('td')
    .eq(0)
    .get(0).innerText
}

function addRestTimeToHtml(totalRestTime) {
  $('#time-table tr:eq(1) th').html(`休憩時間 <span style="float: right">(仮: ${totalRestTime})<span>`)
}

function currentDate() {
  const queryDate = $('#search-box select option:selected').text()
  const today = getSimpleDate()

  return today === queryDate
}
