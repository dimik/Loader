import './Layout.css'
import DOMComponent from '../DOMComponent'
import ChatFab from '../ChatFab'
import clsx from 'clsx'

class Layout extends DOMComponent {
  constructor({className, ...data} = {}) {
    super({
      ...data,
      className: clsx('layout', className),
    })
  }

  render(parentElement, ...children) {
    const fab = new ChatFab({className: 'layout__fab'})
    return super.render(parentElement, ...children, fab.render())
  }
}

export default Layout
