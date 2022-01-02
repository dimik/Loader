import './App.css'
import DOMComponent from '../DOMComponent'
import netology from '../../services/netology'
import List from '../List'
import ListItem from '../ListItem'
import ListItemText from '../ListItemText'
import ListItemAvatar from '../ListItemAvatar'
import Avatar from '../Avatar'
import Preloader from '../Preloader'
import i18n from '../../utils/i18n'
import Layout from '../Layout'
import Header from '../Header'

class App extends DOMComponent {
  getNetologyPrograms = async () => {
    const preloader = new Preloader()
    preloader.render(this.container())

    const json = await netology.getPrograms()

    preloader.destroy()

    const header = new Header()
    header.render(this.container())
    const list = new List()
    list.render(this.container(), ...this.createListItems(json))
  }

  createListItems(json) {
    return json.map(({direction: {title}, groups}) => {
      const listItem = new ListItem({avatar: true, divider: true})
      const listItemAvatar = new ListItemAvatar()
      const avatar = new Avatar()
      const listItemText = new ListItemText({
        primary: title,
        secondary: i18n.t('ui.titles.num_courses', {smart_count: groups.length})
      })
      return listItem.render(
        null,
        listItemText.render(),
        listItemAvatar.render(null, avatar.render()),
      )
    })
  }

  render(parentElement) {
    const element = super.render(parentElement)
    const layout = new Layout()
    this.container(layout.render())
    this.getNetologyPrograms()
    return element
  }
}

export default App
