
import { useEffect ,useState } from 'react';
import './App.css';
import './components/Desktop';
import Desktop from './components/Desktop';
import './components/Mobile'
import Mobile from './components/Mobile';

function App() {
  const[userIsMobile,setUserIsMobile]= useState(true);
  useEffect(()=>{
    window.innerWidth < 768 ? setUserIsMobile(true) : setUserIsMobile(false);
  },[userIsMobile]);
  return (
    <div className="App">
      {userIsMobile ? <Mobile/> : <Desktop/>}
    </div>
  );
}

export default App;
