import Login from './components/login'
import Dashboard from './components/dashboard';
import { useState } from 'react';


function App() {

  const [userInfo, setUserInfo] = useState("")
  function changeUserInfo(newValue) {
    setUserInfo(newValue)
  }
  return (
    <div className="App">
      {userInfo == null?      
      <Login
        setUserInfo = {changeUserInfo}
      ></Login>:
      <Dashboard>
      </Dashboard>}

    </div>
  );
}

export default App;
