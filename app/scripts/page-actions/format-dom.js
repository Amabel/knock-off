export function formatTimeTravelDiv(inputId) {
  const iconUrl = chrome.runtime.getURL('images/question.svg')
  return `
    <span class="time-travel-wrapper">
      <input id=${inputId} class="timeTravelInput" type="checkbox">
      <label for="${inputId}">Time travel を有効にする</label>
      <span class="timeTravelTip">
        <img src="${iconUrl}" alt="tips">
      </span>
    </span>
  `
}
