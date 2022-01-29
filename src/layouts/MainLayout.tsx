import { Outlet } from "react-router-dom"
import Footer from "../components/partials/Footer"
import Header from "../components/partials/Header"

export default function MainLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}