import './App.css';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import ChatRoom from './components/ChatRoom';

import {auth} from "./firebase/config";
import {useAuthState} from 'react-firebase-hooks/auth';

export default function App() {
  const [user] =  useAuthState(auth);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Guess Who?</h1>
        <SignOut/>
      </header>

      <section>
        {user ? <ChatRoom/> : <SignIn/>}
      </section>
    </div>
  );
}

