import "./index.css";
import { Link, Route, Routes } from "react-router-dom";
import GesturePage from "./pages/Gesture";
import LayoutPage from "./pages/Layout";
import MotionBasicsPage from "./pages/MotionBasics";
import Test1Page from "./pages/Test1Page";

const Home: React.FC = () => <h1>홈 페이지</h1>;
const About: React.FC = () => <h1>소개 페이지</h1>;

const App: React.FC = () => {
  return (
    <div>
      <nav>
        <ul className="flex flex-row gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/test1">test1</Link>
          </li>
          <li>
            <Link to="/gesture">gesture</Link>
          </li>
          <li>
            <Link to="/layout">layout</Link>
          </li>
          <li>
            <Link to="/motion-basics">모션 기초</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/test1" element={<Test1Page />} />
        <Route path="/gesture" element={<GesturePage />} />
        <Route path="/layout" element={<LayoutPage />} />
        <Route path="/motion-basics" element={<MotionBasicsPage />} />
      </Routes>
    </div>
  );
};

export default App;
