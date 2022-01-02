import './ListItemText.css'
import DOMComponent from '../DOMComponent'
import Typography from '../Typography'
import clsx from 'clsx'

class ListItemText extends DOMComponent {
  constructor({className, classes, primary, secondary, ...data} = {}) {
    super({
      ...data,
      className: clsx('list-item__text', className),
      classes: {...classes, 'list-item__text--multiline': data.primary && data.secondary},
    })

    this.primary = primary
    this.secondary = secondary
  }

  init() {
    super.init()

    if (this.primary) {
      (new Typography({variant: 'subtitle1', className: 'list-item__text-primary'}))
        .render(this.element, this.primary)
    }
    if (this.secondary) {
      (new Typography({variant: 'body1', className: 'list-item__text-secondary'}))
        .render(this.element, this.secondary)
    }
  }
}

export default ListItemText
