import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import Container from "./Components/Container/Container.jsx";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from "./Components/Pages/Page1/Page1.jsx";
import Page2 from "./Components/Pages/Page2/Page2.jsx";
import Page3 from "./Components/Pages/Page3/Page3.jsx";
import Home from "./Components/Pages/Home/Home.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="appContainer">
          <Sidebar />
          <Container />

          <Routes>
            <Route path="/" element={<Container />}>
              <Route path="page1" element={<Page1 />} />
              <Route path="page2" element={<Page2 />} />
              <Route path="page3" element={<Page3 />} />
              <Route index element={<Home />} />
            </Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
