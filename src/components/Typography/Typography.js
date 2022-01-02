import './Typography.css'
import DOMComponent from '../DOMComponent'
import clsx from 'clsx'

const variantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
}

class Typography extends DOMComponent {
  constructor({className, variant = 'body1', ...data}) {
    super({
      ...data,
      tagName: variantMapping[variant],
      className: clsx('typography', `typography-${variant}`, className),
    })
  }
}

export default Typography
