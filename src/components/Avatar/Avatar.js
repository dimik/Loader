import './Avatar.css'
import DOMComponent from '../DOMComponent'
import clsx from 'clsx'

class Avatar extends DOMComponent {
  constructor({className, ...data} = {}) {
    super({
      ...data,
      className: clsx('avatar', className),
    })
  }
}

export default Avatar
