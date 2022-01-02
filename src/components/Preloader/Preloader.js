import DOMComponent from '../DOMComponent'
import clsx from 'clsx'
import preloader from './preloader.svg'
import './Preloader.css'

class Preloader extends DOMComponent {
  constructor({className, ...data} = {}) {
    super({
      ...data,
      className: clsx('preloader', className),
    })
  }

  init() {
    super.init()
    this.html(preloader)
  }
}

export default Preloader
