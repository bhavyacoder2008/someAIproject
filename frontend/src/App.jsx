import Otp from "./pages/Otp"
import RetroSignupUI from "./pages/Signup"
import {Route, Routes} from "react-router-dom"

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<RetroSignupUI />} />
      <Route path="/otp" element={<Otp />} />
    </Routes>
    </>
  )
}

export default App
