import Detail from "./Detail/Detail";
import Footer from "./Footer/Footer";
import Items from "./Items/Items";
import LandingPage from "./LandingPage/LandingPage";
import NavBar from "./NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (

    <div className="App">
      <NavBar />
      <div style={{ minHeight: '100vh' }}>
        {/* 요청된 경로로 페이지 이동: 특정 컴포넌트 실행 */}

        <Router basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/detail/:movieId" element={<Detail />} />
            {/* "/movie/:movieId"의 movieId를 변수로 설정하여 만들 수 있다. */}
            <Route path="/items" element={<Items />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
