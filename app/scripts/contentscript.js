import { MAN_HOUR_MANAGE_PATH, MODIFY_PAGE_PATH } from './shared/constants'
import { launchManHourManagePageAction } from './page-actions/man-hour-manage'
import { launchModifyPageAction } from './page-actions/modify-page'

const currentPath = window.location.pathname

chrome.runtime.sendMessage({ hitType: 'pageview', page: currentPath })

switch (currentPath) {
  case MAN_HOUR_MANAGE_PATH:
    launchManHourManagePageAction()
    break
  case MODIFY_PAGE_PATH:
    launchModifyPageAction()
    break
  default:
    break
}
