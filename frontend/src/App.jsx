import Main from "./pages/Main"
import Otp from "./pages/Otp"
import RetroSignupUI from "./pages/Signup"
import Details1 from "./pages/Details1"
import {Route, Routes} from "react-router-dom"

function App() {

  return (
    <>
    <Routes>
      <Route path="/heheh" element={<RetroSignupUI />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/details1" element={<Details1 />} />
      <Route path="/a" element={<Main />} />


    </Routes>
    </>
  )
}

export default App
