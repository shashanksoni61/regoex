import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/UI/Header";
import "./App.css";
import Dashboard from "./pages/Dashboard";

const Home = () => {
  return <div>Home</div>;
};
function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
