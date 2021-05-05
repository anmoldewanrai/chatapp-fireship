import {auth} from "../firebase/config";

export default function ChatMessage(props) {
  const {text, uid, photoURL} = props.message;
  const messageClass =  uid === auth.currentUser.uid ? 'sent' : 'recieved';
  return(
    <div className={`message ${messageClass}`}>
      <img src={photoURL} />
      <p>{text}</p>
    </div>
  )
}