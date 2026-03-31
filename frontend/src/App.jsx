import Main from "./pages/Main"
import Otp from "./pages/Otp"
import RetroSignupUI from "./pages/Signup"
import {Route, Routes} from "react-router-dom"

function App() {

  return (
    <>
    <Routes>
      <Route path="/heheh" element={<RetroSignupUI />} />
      <Route path="/otp" element={<Otp />} />
    </Routes>
    <Main />
    </>
  )
}

export default App
