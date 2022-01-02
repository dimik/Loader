import './List.css'
import DOMComponent from '../DOMComponent'
import clsx from 'clsx'

class List extends DOMComponent {
  constructor({className, ...data} = {}) {
    super({
      ...data,
      tagName: 'ul',
      className: clsx('list', className),
    })
  }
}

export default List
