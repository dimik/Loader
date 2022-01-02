import clsx from 'clsx'

class DOMComponent {
  constructor({tagName = 'div', ...props} = {}) {
    this.tagName = tagName
    this.props = props
  }

  init() {
    this.element = document.createElement(this.tagName)
    const {className: classNameProp, classes, listeners, ...props} = this.props
    const className = clsx(classes, classNameProp)
    if (className) {
      this.element.className = className
    }
    this.setupListeners(listeners)
    for (const prop in props) {
      this.element.setAttribute(prop, props[prop])
    }

    return this
  }

  destroy() {
    this.removeListeners()
    this.element.remove()
    this.element = null

    return this
  }

  setupListeners(listeners) {
    listeners = Object.entries(listeners || {})
    this.listeners = [...this.listeners || [], ...listeners]
    listeners.forEach(([eventName, handlerOrArgs]) => {
      this.element.addEventListener(eventName, ...[].concat(handlerOrArgs))
    })
  }

  removeListeners() {
    this.listeners.forEach(([eventName, handlerOrArgs]) => {
      this.element.removeEventListener(eventName, ...[].concat(handlerOrArgs))
    })
  }

  html(innerHtml) {
    if (innerHtml) {
      this.container().innerHTML = innerHtml

      return this
    }

    return this.container().outerHTML
  }

  container(container) {
    if (container) {
      this.containerElement = (this.containerElement || this.element).appendChild(container)

      return this
    }

    return this.containerElement || this.element
  }

  render(parentElement, ...children) {
    this.init()

    if (children.length > 0) {
      children = Array.from(children).filter(Boolean)
      this.container().append(...children)
    }

    if (parentElement) {
      parentElement.appendChild(this.element)
    }

    return this.element
  }
}

export default DOMComponent
