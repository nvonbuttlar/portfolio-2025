import { useState } from 'react'

export default function Modal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="modal">
      <div className="modal__content">
        <h2>Modal Content</h2>
      </div>
    </div>
  )
}