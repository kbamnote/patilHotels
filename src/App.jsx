import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/common/Navbar'
import Hero from './components/pages/landing page/Hero'
import About from './components/pages/landing page/About'
import Facilities from './components/pages/landing page/Facilities'
import Offers from './components/pages/landing page/Offers'
import RoomsCarousel from './components/pages/landing page/carousel'
import Rooms from './components/pages/Rooms/Rooms'
import AboutPage from './components/pages/About/About'
import FacilitiesPage from './components/pages/Facilities/Facilities'
import Contact from './components/pages/Contact/Contact'
import OffersPage from './components/pages/Offers/Offers'
import Footer from './components/common/Footer'
import Login from './components/pages/Login/Login'
import Signup from './components/pages/Login/Signup'
import ForgotPassword from './components/pages/Login/ForgotPassword'
import Dashboard from './components/pages/Dashboard/Dashboard'
import RoomDetails from './components/pages/Rooms/RoomDetails'

// Admin Components
import AdminLogin from './components/pages/Admin/AdminLogin'
import AdminLayout from './components/pages/Admin/AdminLayout'
import AdminDashboard from './components/pages/Admin/Dashboard'
import ManageRooms from './components/pages/Admin/ManageRooms'
import ManageBookings from './components/pages/Admin/ManageBookings'
import ManageUsers from './components/pages/Admin/ManageUsers'
import ManagePayments from './components/pages/Admin/ManagePayments'

function App() {
  const location = useLocation()
  const hideLayout = ['/login', '/signup', '/forgot-password'].includes(location.pathname) || location.pathname.startsWith('/admin')

  return (
    <div className="min-h-screen bg-white">
      {!hideLayout && <Navbar />}
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Facilities />
            <RoomsCarousel />
            <Offers />
          </>
        } />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/:id" element={<RoomDetails />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/facilities" element={<FacilitiesPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/offers" element={<OffersPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        
        {/* Admin Routes */}
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
           <Route path="dashboard" element={<AdminDashboard />} />
           <Route path="rooms" element={<ManageRooms />} />
           <Route path="bookings" element={<ManageBookings />} />
           <Route path="users" element={<ManageUsers />} />
           <Route path="payments" element={<ManagePayments />} />
        </Route>
        <Route path="/admin/login" element={<AdminLogin />} />
        
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      {!hideLayout && <Footer />}
    </div>
  )
}

export default App
