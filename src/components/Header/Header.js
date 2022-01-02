import './Header.css'
import DOMComponent from '../DOMComponent'
import clsx from 'clsx'
import Typography from '../Typography'
import i18n from '../../utils/i18n'

class Header extends DOMComponent {
  constructor({className, ...data} = {}) {
    super({
      className: clsx('header', className),
    })
  }

  init() {
    super.init()
    const headerLink = new DOMComponent({
      tagName: 'a',
      href: 'javascript:void(0);',
      className: 'header__link',
    })
    const headerText = new Typography({variant: 'h1'})

    headerText.render(
        this.element,
        i18n.t('ui.titles.study'),
        headerLink.render(null, i18n.t('ui.titles.current_topics')),
      )
  }
}

export default Header
