function createButton(button) {
  const meta = `data-type="button" data-value='${JSON.stringify(button.value)}'`
  return `
      <div class="button ${button.active ? 'active' : ''}" ${meta}>
        <span class="material-icons" ${meta}>${button.icon}</span>
      </div>    
  `
}

export function createToolbar(state) {
  const buttons = [
    {
      icon: 'format_align_left',
      active: state['textAligh'] === 'left',
      value: {textAligh: 'left'}
      // value: {textAligh: state['textAligh'] === 'left' ? 'none' : 'left'}
    },
    {
      icon: 'format_align_center',
      active: state['textAligh'] === 'center',
      value: {textAligh: 'center'}
      // value: {textAligh: state['textAligh'] === 'center' ? 'none' : 'center'}
    },
    {
      icon: 'format_align_right',
      active: state['textAligh'] === 'right',
      value: {textAligh: 'right'}
      // value: {textAligh: state['textAligh'] === 'right' ? 'none' : 'right'}
    },
    {
      icon: 'format_bold',
      active: state['fontWeight'] === 'bold',
      value: {fontWeight: state['fontWeight'] === 'bold' ? 'normal' : 'bold'}
    },
    {
      icon: 'format_italic',
      active: state['fontStyle'] === 'italic',
      value: {fontStyle: state['fontStyle'] === 'italic' ? 'normal' : 'italic'}
    },
    {
      icon: 'format_underlined',
      active: state['textDecoration'] === 'underline',
      value: {textDecoration: state['textDecoration'] === 'underline' ? 'none' : 'underline'}
    }
  ]
  return buttons.map(createButton).join('\n')
}