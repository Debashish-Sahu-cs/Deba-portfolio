import "./statusmessage.css";
function OperationMessage({alertMessage, style}) {
  return (
    <>
        {
            alertMessage === "" ? 
            "" :
            <div className="alert-message-container" >
                <div className="tech-insert-message" style={style}>
                    {alertMessage}
                </div>
            </div>
        }
    </>
  )
}

export default OperationMessage
