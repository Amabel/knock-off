import $ from 'jquery'
import { addTimeTravelTips } from '../../tips'
import { formatTimeTravelDiv } from './format-dom'
import { TIME_TRAVEL_FLAG_KEY } from '../../../shared/constants'

export function setupTimeTravel() {
  chrome.storage.sync.get([TIME_TRAVEL_FLAG_KEY], function(result) {
    const timeTravelChecked = result[TIME_TRAVEL_FLAG_KEY]
    addActivateTimeTravelCheckbox(timeTravelChecked)

    if (timeTravelChecked) {
      travelToLastMonthOnPageReload()
    }
  })
}

export function addTimeTravelCheckboxToEditForm(editForm) {
  const timeTravelDiv = `
    <div class="time-travel-container">
      ${formatTimeTravelDiv('editFormTimeTravel')}
    </div>
  `
  editForm.find('#edit-menu-contents').append(timeTravelDiv)
  addTimeTravelTips('time-travel-tip')

  chrome.storage.sync.get([TIME_TRAVEL_FLAG_KEY], function(result) {
    const timeTravelChecked = result[TIME_TRAVEL_FLAG_KEY]
    addChangeListenerToTimeTravelCheckbox(timeTravelChecked)
  })
}

function addChangeListenerToTimeTravelCheckbox(timeTravelChecked) {
  const timeTravelCheckbox = $('.time-travel-wrapper input[type="checkbox"]')
  timeTravelCheckbox.prop('checked', timeTravelChecked)
  timeTravelCheckbox.change(function() {
    const checked = this.checked
    chrome.storage.sync.set({[TIME_TRAVEL_FLAG_KEY]: checked}, function() {
      // TODO: inform user that the settings have been changed
      $('#manHourPageTimeTravel').prop('checked', checked)
    })
  })
}

function addActivateTimeTravelCheckbox(timeTravelChecked) {
  $('div.contents-wrap-middle>table').css('display', 'inline-block').after(formatTimeTravelDiv('manHourPageTimeTravel'))
  addTimeTravelTips('time-travel-tip')
  addChangeListenerToTimeTravelCheckbox(timeTravelChecked)
}

function travelToLastMonthOnPageReload() {
  const dateSelectTable = $('div.contents-wrap-middle table td#search-term form#search')
  const yearSelect = dateSelectTable.find('select[name="year"]')
  const monthSelect = dateSelectTable.find('select[name="month"]')

  const lastDayOfTheLastMonth = new Date(new Date().setDate(0))
  const targetYear = lastDayOfTheLastMonth.getFullYear()
  const targetMonth = lastDayOfTheLastMonth.getMonth() + 1

  if (yearSelect.val() !== targetYear.toString()) {
    yearSelect.val(targetYear)[0].dispatchEvent(new Event('change'))
  }

  if (monthSelect.val() !== targetMonth.toString()) {
    monthSelect.val(targetMonth)[0].dispatchEvent(new Event('change'))
  }
}
