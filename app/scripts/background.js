import { TRACK_ID_DEV, TRACK_ID_PROD } from './shared/constants'

// Setup GA
chrome.management.getSelf((result) => {
  let trackID

  if (result.installType === 'development') {
    trackID = TRACK_ID_DEV
  } else {
    trackID = TRACK_ID_PROD
  }
  setupGA(trackID)
})

function setupGA(trackID) {
  let _gaq = []
  _gaq.push(['_setAccount', trackID])
  _gaq.push(['_trackPageview']);

  (function() {
    let ga = document.createElement('script')
    ga.type = 'text/javascript'
    ga.async = true
    ga.src = 'https://ssl.google-analytics.com/ga.js'
    let s = document.getElementsByTagName('script')[0]
    s.parentNode.insertBefore(ga, s)
  })()
}
