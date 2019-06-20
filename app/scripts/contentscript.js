
import { ATTENDANCE_PATH, MAN_HOUR_MANAGE_PATH  } from './shared/constants'
import { initManHourManagePageAction } from './page-actions/man-hour-manage-page-action'

const currentPath = window.location.pathname

if (currentPath === ATTENDANCE_PATH) {
  // attendance path actrion
} else if (currentPath === MAN_HOUR_MANAGE_PATH) {
  // man hour manage path action
  initManHourManagePageAction()
}
