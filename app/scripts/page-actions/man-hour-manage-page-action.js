import $ from 'jquery'
import { hourMinute, minutes } from '../shared/time-util'

export function launchManHourManagePageAction() {
  const tableRows = $('div#search-result tbody tr').slice(1)
  checkTable(tableRows)
}

function checkTable(tableRows) {
  tableRows.each(function() {
    restyleTableRow($(this))
    addEditActionListener($(this))
  })
}

function addEditActionListener(tableRow) {
  tableRow.find('td:nth-child(4) div.btn-info').click(function() {
    const monthDate = tableRow.find('td:nth-child(1) a').text()
    const matches = monthDate.match(/\d+/g)
    const [month, date] = matches

    getEditForm(month, date).then(editForm => {
      const unMatchTime = editForm.find('div#un-match-time')

      let difference = unMatchTime.text().match(/\d+:\d+/)[0]
      unMatchTime.on('DOMSubtreeModified', () => {
        if (unMatchTime.text()) {
          difference = unMatchTime.text().match(/\d+:\d+/)[0]
        }
      })

      // add action listener to select
      editForm.find('select.man-hour-input[name="template"]').on('change.knockoff', [editForm, difference], addSelectActionListener)
    })
  })
}

function addSelectActionListener(eventInput) {
  const [editForm, totalDifference] = eventInput.data

  editForm.find('table tr.daily').each(function() {
    $(this).remove()
  })

  getNewlyAddedRow(editForm).then((newlyAddedRow) => {
    const rows = editForm.find($('table tr.daily td:nth-child(4) input[type="hidden"]')).slice(0, -1)
    let registeredManHour = 0

    rows.each(function() {
      registeredManHour += $(this).val() * 1
    })

    const difference = hourMinute(minutes(totalDifference) - registeredManHour)

    newlyAddedRow.find('td input[type="text"]').val(difference)[0].dispatchEvent(new Event('change'))

    editForm.find('button#save').click(function() {
      chrome.runtime.sendMessage({
        hitType: 'event',
        eventCategory: 'man-hour-manage',
        eventAction: 'save',
        eventLabel: totalDifference,
        eventValue: minutes(totalDifference)
      })
    })
  })
}

function getNewlyAddedRow(editForm) {
  return new Promise(resolve => {
    let getNewlyAddedRowInterval = setInterval(() => {
      const newlyAddedRow = editForm.find('table tr.daily:last-child')

      if (newlyAddedRow.length !== 0) {
        clearInterval(getNewlyAddedRowInterval)
        resolve(newlyAddedRow)
      }
    }, 1)
  })
}

function getEditForm(month, date) {
  return new Promise(resolve => {
    let getEditFormInterval = setInterval(() => {
      const editForm = $('form#save-form')

      if (editForm.length !== 0) {
        const [, selectedMonth, selectedDate] = editForm.find('div#edit-menu-title').text().match(/\d+/g)
        if (selectedMonth === month && selectedDate === date) {
          clearInterval(getEditFormInterval)
          resolve(editForm)
        }
      }
    }, 500)
  })
}

function restyleTableRow(tableRow) {
  const workingHours = minutes(tableRow.find('td:nth-child(2)').text().trim())
  const manHours = minutes(tableRow.find('td:nth-child(3)').text().trim())
  if (workingHours !== 0 && workingHours !== manHours) {
    tableRow.css({ backgroundColor: 'pink' })
  }
}
