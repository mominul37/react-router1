import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Pages/Home.jsx'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import Contact from './Pages/Contact.jsx'
import About from './Pages/About.jsx'
import Footer from './Components/Footer.jsx'
import Navbar from './Components/Navbar.jsx'
import RootLayOut from './Layout/RootLayOut.jsx'
import PlantCard from './Components/PlantCard.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayOut,
  },
  {
    path: '/Home',
    element: <Home />
  },
  {
    path: "/Contact",
    element: <Contact />
  },
  {
    path: "/About",
    element: <About />
  },
  {
    path: "/Footer",
    element: <Footer />
  },
  {
    path: "/Navbar",
    element: <Navbar />
  },
  {
    path:"/plantcard",
    Component:PlantCard,
  }
  
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
