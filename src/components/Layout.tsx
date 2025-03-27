import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Header from './Header';

const Layout = () => {
  const location = useLocation(); 
  const isHomePage = location.pathname.includes('dashboard') || location.pathname.includes('node');
  return (
    <div className="min-h-screen bg-white">
      {/* {isHomePage ? <Header /> : <Navbar />}  */}
      <Navbar/>
      <Outlet />
      <Footer />
    </div>
  );
};


export default Layout;