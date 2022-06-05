import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
// import Write from "./pages/write/Write";
import MyPost from "./pages/write/MyPost";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const currentUser = true;
  return (
    <Router>
      <Topbar/>
      <Routes>
        <Route exact path="/" element={<Homepage/>} >
        </Route>
        <Route exact  path="/posts" element={<Homepage/>} >
        </Route>
        <Route exact  path="/about" element={<About/>} >
        </Route>
        <Route exact  path="/contact" element={<Contact/>} >
        </Route>
        <Route  exact path="/register" element= {currentUser ? <Homepage /> : <Register />}/>
        <Route  exact path="/login" element =  {currentUser ? <Homepage /> : <Login />}>
          {/* {currentUser ? <Homepage /> : <Login />} */}
        </Route>
        <Route path="/post/:id" element={<Single/>}>
        </Route>
        {/* <Route  exact path="/write" element= {currentUser ? <Write /> : <Login />}>
          </Route> */}
          <Route  exact path="/write" element= {currentUser ? <MyPost/> : <Login />}>
          </Route>
        <Route  exact path="/settings" element={currentUser ? <Settings /> : <Login />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;