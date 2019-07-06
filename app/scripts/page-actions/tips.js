import tippy from 'tippy.js'

export function setupTippy() {
  tippy.setDefaults({
    arrow: true,
    arrowType: 'round',
    duration: 300,
    theme: 'dark',
    delay: 0,
    animation: 'fade'
  })
}

export function addTimeTravelTips(divClass) {
  tippy(`.${divClass}`, {
    content: '常に先月の工数管理を表示する（ページをリロードする必要があります）',
    maxWidth: '380px',
  })
}
