import './index.css';
import { Routes, Route, Link } from 'react-router-dom';
import Test1Page from './pages/Test1Page';
import GesturePage from './pages/Gesture';
import LayoutPage from './pages/Layout';
const Home: React.FC = () => <h1>Home page</h1>
const About : React.FC = () => <h1>About page</h1>
const Test1 : React.FC = () => <Test1Page></Test1Page>;
const Gesture : React.FC = () => <GesturePage></GesturePage>
const Layout : React.FC = () => <LayoutPage></LayoutPage>

const App: React.FC = () => {
  return (
    <div>
      <nav>
        <ul className="flex flex-row gap-4">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/test1">test1</Link></li>
          <li><Link to="/gesture">gesture</Link></li>
          <li><Link to="/layout">layout</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/test1" element={<Test1 />} />
        <Route path="/gesture" element={<Gesture/>} />
        <Route path="/layout" element={<Layout/>} />
      </Routes>

    </div>
  )
}

export default App
