import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Profile from "./Pages/Profile"
import BookDetails from "./Pages/BookDetails"
import ActiveBook from "./Pages/Admin/ActiveBook"
import UserAccount from "./Pages/Admin/UserAccount"
import InsertBook from "./Pages/Admin/InsertBook"
import Notfound from "./Pages/Notfound"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/bookDetails/:id" element={<BookDetails/>}/>
          <Route path="/admin/activebook" element={<ActiveBook/>}/>
          <Route path="/admin/useraccount" element={<UserAccount/>}/>
          <Route path="/admin/insertbook" element={<InsertBook/>}/>
          <Route path="*" element={<Notfound/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
