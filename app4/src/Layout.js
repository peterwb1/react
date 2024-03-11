import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = ({ search,setSearch}) => {
    return (
        <div className="App">
      <Header />
      <Nav />
      <Outlet />
      <Footer />
    </div>
    );
};

export default Layout;