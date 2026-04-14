import Main from "./pages/Main"
import Details1 from "./pages/Details1"
import {Route, Routes} from "react-router-dom"

function App() {

  return (
    <>
    <Routes>
      <Route path="/details1" element={<Details1 />} />
      <Route path="/" element={<Main />} />
    </Routes>
    </>
  )
}

export default App
