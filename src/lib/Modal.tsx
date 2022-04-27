import * as React from "react"
import * as ReactDOM from "react-dom"
import "./Modal.sass"

interface IModal {
  open: boolean
  onClose: () => void
  children?: any
  variant?: "centered" | "right"
  size?: "sm" | "md" | "lg"
}

const Modal: React.FC<IModal> = ({
  children,
  onClose,
  open,
  size = "md",
  variant = "centered",
}) => {
  const escFunction = React.useCallback((event: { key: string }) => {
    if (event.key === "Escape") {
      return onClose()
    }
  }, [])

  React.useEffect(() => {
    document.addEventListener("keydown", escFunction, false)
    return () => {
      document.removeEventListener("keydown", escFunction, false)
    }
  }, [])

  return open
    ? ReactDOM.createPortal(
        <div className='modal-container'>
          <div className='backdrop' onClick={onClose} />
          <div className={`modal modal-${variant}-${size}`}>
            <button className='btn-close' onClick={onClose}>
              &times;
            </button>
            {children}
          </div>
        </div>,
        document.body
      )
    : null
}
export default Modal
