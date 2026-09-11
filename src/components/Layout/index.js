import './index.scss';
import Navigation from '../Navigation';
import AnimatedBackground from '../AnimatedBackground';
import FloatingShapes from '../FloatingShapes';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="App">
            <AnimatedBackground />
            <FloatingShapes />
            <Navigation />
            <main className="page">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
