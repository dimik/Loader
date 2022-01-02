import './Fab.css'
import DOMComponent from '../DOMComponent'
import clsx from 'clsx'

class Fab extends DOMComponent {
  constructor({className, ...data} = {}) {
    super({
      ...data,
      tagName: 'button',
      className: clsx('fab', className),
    })
  }

  init() {
    super.init()

    const fabLabel = new DOMComponent({tagName: 'span', className: 'fab__label'})
    this.container(fabLabel.render())
  }
}

export default Fab
