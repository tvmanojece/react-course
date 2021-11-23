function Modal(props){

    function confirmHandler() {
        props.onClose();

    }

    function cancelHandler(){
        props.onClose();
    }

    return(
        <div className='modal'>
        <p>{props.text}</p>
        <button className='btn' onClick={confirmHandler}>Confirm</button>
        <button className='btn btn-alt' onClick={cancelHandler}>Cancel</button>
        </div>
    );

}

export default Modal;