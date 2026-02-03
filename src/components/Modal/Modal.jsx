import { Component } from 'react'
import { createPortal } from 'react-dom' //метод для создания портала для модального окна
import './Modal.scss'

const modalRoot = document.querySelector('#modal-root')

export default class Modal extends Component {
  componentDidMount() {
    // console.log('Mount Modal')
    window.addEventListener('keydown', this.handleKeyDown)
  }
  componentDidUpdate() {
    // console.log('Update Modal')
  }
  componentWillUnmount() {
    // console.log('Unmount Modal')
    window.removeEventListener('keydown', this.handleKeyDown)
  }

  handleKeyDown = (e) => {
    if (e.code === 'Escape') this.props.onClose()
  }

  handleBackdropClick = (evt) => {
    if (evt.currentTarget === evt.target) this.props.onClose()
  }

  render() {
    return createPortal(
      <div className="modal-backdrop" onClick={this.handleBackdropClick}>
        <div className="modal-content">{this.props.children}</div>
      </div>,
      modalRoot
    ) // рендеринг модального окна в портале
  }
}
