export function formatTimeTravelDiv() {
  const iconUrl = chrome.runtime.getURL('images/question.svg')
  return `
    <span id="timeTravel" class="time-travel-wrapper">
      <input id="timeTravelInput" type="checkbox">
      <label for="timeTravelInput">Time travel を有効にする</label>
      <span id="timeTravelTip">
        <img src="${iconUrl}" alt="tips">
      </span>
    </span>
  `
}
