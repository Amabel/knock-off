import tippy from 'tippy.js'

export function setupTippy() {
  tippy.setDefaults({
    arrow: true,
    arrowType: 'round',
    duration: 300,
    theme: 'light-border',
    delay: 0,
    animation: 'fade'
  })
}

export function addTimeTravelTips(divClass) {
  tippy(`.${divClass}`, {
    content: '工数を入力した後、自動的に先月の工数管理に戻ります',
    maxWidth: '380px',
  })
}
