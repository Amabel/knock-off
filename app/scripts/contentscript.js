import { ATTENDANCE_PATH, MAN_HOUR_MANAGE_PATH } from './shared/constants'
import { launchManHourManagePageAction } from './page-actions/man-hour-manage'

const currentPath = window.location.pathname

chrome.runtime.sendMessage({ hitType: 'pageview', page: currentPath })

if (currentPath === ATTENDANCE_PATH) {
  // attendance path actrion
} else if (currentPath === MAN_HOUR_MANAGE_PATH) {
  // man hour manage path action
  launchManHourManagePageAction()
}
