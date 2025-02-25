export default function Modal({showModal, mediaType, source, alt, toggleModal}) {
  return (
    <>
      {showModal && (
        <div id="modal" className="modal" onClick={toggleModal}>
          <div className="modal__content">
            <img src={source} alt={alt} />
          </div>
        </div>
      )}
    </>
  )
}