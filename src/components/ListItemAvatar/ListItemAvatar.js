import './ListItemAvatar.css'
import DOMComponent from '../DOMComponent'
import clsx from 'clsx'

class ListItemAvatar extends DOMComponent {
  constructor({className, ...data} = {}) {
    super({
      ...data,
      className: clsx('list-item__avatar', className),
    })
  }
}

export default ListItemAvatar
