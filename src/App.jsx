
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/NavBar"
import Home from "./Pages/Home"
import CartPage from "./Pages/CartPage"
import ItemPage from "./Pages/ItemPage"

function App() {

  return (
    <div className="w-screen h-screen overflow-x-hidden bg-white">
    <div className="bg-slate-900">
    <Navbar/>
    </div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<CartPage/>}/>
      <Route path="/item/:itemId" element={<ItemPage/>}/>
    </Routes>  
    </div>
  )
}

export default App
