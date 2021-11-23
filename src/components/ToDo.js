import { useState } from "react";
import BackDrop from "./backdrop";
import Modal from "./Modal";

function ToDo(props) {
  const [showModal, setShowModal] = useState(false);


  function showModalHandler() {
    setShowModal(true);
  }
  
  function closeModalHandler() {
    setShowModal(false);
  }

  return (
    <div className="card">
      <h2>{props.myTitle}</h2>
      <div className='actions'>
        <button className="btn" onClick={showModalHandler}> 
        {/* onClick here is an event */}
          Delete
        </button>
        {showModal && <Modal text='Are you Sure ?' onClose={closeModalHandler} />}
        {showModal && <BackDrop onClick={closeModalHandler}/>}
        {/* onClick here is a prop */}
      </div>
    </div>
  );
}
export default ToDo;
