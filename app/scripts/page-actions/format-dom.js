export function formatTimeTravelDiv(inputId) {
  const iconUrl = chrome.runtime.getURL('images/question.svg')
  return `
    <div class="time-travel-wrapper">
      <input id=${inputId} type="checkbox">
      <label for="${inputId}">Time travel を有効にする</label>
      <span class="time-travel-tip">
        <img src="${iconUrl}" alt="tips">
      </span>
    </div>
  `
}
