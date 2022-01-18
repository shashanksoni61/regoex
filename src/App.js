import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/UI/Header";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Wallet from "./pages/Wallet";

const Home = () => {
  return <div>Home</div>;
};
function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/wallet" element={<Wallet />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
