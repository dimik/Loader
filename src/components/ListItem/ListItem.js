import './ListItem.css'
import DOMComponent from '../DOMComponent'
import clsx from 'clsx'

class ListItem extends DOMComponent {
  constructor({avatar, className, classes, divider, ...data} = {}) {
    super({
      ...data,
      tagName: 'li',
      className: clsx('list-item', className),
      classes: {...classes, 'list-item--avatar': avatar, 'list-item--divider': divider},
    })
  }
}

export default ListItem
