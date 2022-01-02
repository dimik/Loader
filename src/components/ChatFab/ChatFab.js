import './ChatFab.css'
import Fab from '../Fab'
import chatIcon from './chat.svg'
import clsx from 'clsx'

class ChatFab extends Fab {
  constructor({className, ...data}) {
    super({
      ...data,
      className: clsx('chat-fab', className),
    })
  }

  init() {
    super.init()
    this.html(chatIcon)
  }
}

export default ChatFab
