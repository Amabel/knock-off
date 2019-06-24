/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { UA_TRACKING_ID_PROD, UA_TRACKING_ID_TEST } from './config/env'

// Receive events from content script and push to ga
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  ga('send', request)
})

chrome.management.getSelf((result) => {
  const trackID = result.installType === 'development'
    ? UA_TRACKING_ID_TEST
    : UA_TRACKING_ID_PROD
  setupGA(trackID)
})

function setupGA(trackID) {
  (function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r
    // noinspection CommaExpressionJS
    i[r] = i[r] || function() {
      (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date()
    // noinspection CommaExpressionJS
    a = s.createElement(o), m = s.getElementsByTagName(o)[0]
    a.async = 1
    a.src = g
    m.parentNode.insertBefore(a, m)
  })(window, document, 'script',
    'https://www.google-analytics.com/analytics.js', 'ga')

  ga('create', trackID, 'auto')
  ga('set', 'checkProtocolTask', function() { })
  ga('set', 'appName', 'Photo Screensaver')
  ga('send', 'pageview', '/options.html')
}
