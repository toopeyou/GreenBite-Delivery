import { Outlet } from "react-router-dom"
import Banner from "../components/Banner"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import CartSidebar from "../components/CartSidebar"
function AppLayout() {
  return (
    <>
      <Banner/>
      <Navbar></Navbar>
      <main className="min-h-screan">
          <Outlet/>
      </main>
      <Footer></Footer>
      <CartSidebar></CartSidebar>
    </>
  )
}

export default AppLayout