
import './App.css';
import LoginPage from './components/Pages/LoginPage';
import HomePage from './components/Pages/HomePage';
import { auth } from './components/Firebase/Firebase';
import {useAuthState} from 'react-firebase-hooks/auth'

function App() {
  const [user] = useAuthState(auth)
  return (
    <div >
    {!user ? <LoginPage/> : <HomePage/>}
    </div>
  );
}

export default App;
