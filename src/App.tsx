import { 
  createBrowserRouter,
  Outlet,
  Route,
  RouterProvider,
  Routes,
  useLocation,
} from 'react-router-dom';

import { Home } from './pages/Home';
import { Search } from './pages/Search';
import { Profile } from './pages/Profile';

import './index.css';
import { MenuBar } from './components/MenuBar';
import { Header } from './components/Header';
import { ComingSoon } from './pages/ComingSoon';
import { SignIn } from './pages/AuthPages/SignIn';
import { SignUp } from './pages/AuthPages/SignUp';

const router = createBrowserRouter([
  { path: "*", Component: Root },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

function Root() {
  
  return (
    <>
      <Routes>
        <Route path='/'>
          <Route path='' element={<SignIn />}/>
          <Route path='signup' element={<SignUp />}/>
        </Route>

        <Route path='/home' element={<FluxoNormal />}>
          <Route path="" element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="profile" element={<Profile />} />

          <Route path='*' element={<ComingSoon />} />
        </Route>
      </Routes>
    </>
  );
}

function FluxoNormal() {
  const { pathname } = useLocation();

  return (
    <>
      <Header middle={pathname === '/home/search' ? 'search' : 'nexus'} />
      <Outlet />
      <MenuBar />
    </>
  )
}