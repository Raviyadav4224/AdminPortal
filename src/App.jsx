import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import Container from "./Components/Container/Container.jsx";
import "./App.css";
function App() {
  return (
    <>
      <Navbar />

      <div className="appContainer">
        <Sidebar />
        <Container />
      </div>

      <Footer />
    </>
  );
}

export default App;
