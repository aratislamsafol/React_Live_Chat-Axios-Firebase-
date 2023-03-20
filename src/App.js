import './components/assets/css/global.css';
import Wrapper from './components/layout/Wrapper';
import Login from './components/pages/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './components/pages/Profile';
function App() {
//   useEffect(() => {
//     const script=document.createElement('script');

//     script.src="./components/assets/script/LoginScript.js";

//     // return ()=>{
//     //     document.body.removeChild(script);
//     // }
// }, [])
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={
              <Wrapper> 
                <Login />
              </Wrapper>
            }>
          </Route>
          <Route exact path="/profile" element={<Profile />}></Route>
        </Routes>  
      </Router>
    </div>
  );
}

export default App;
