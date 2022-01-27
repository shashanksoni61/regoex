import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/UI/Header";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Wallet from "./pages/Wallet";
import FixedDeposit from "./pages/FixedDeposit";
import History from "./pages/History";
import Referral from "./pages/Referral";
import AIP from "./pages/AIP";
import BuyCrypto from "./pages/BuyCrypto";

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
          <Route path="/history" element={<History />} />
          <Route path="/referral" element={<Referral />} />
          <Route path="/fixed-deposit" element={<FixedDeposit />} />
          <Route path="/buyCrypto" element={<BuyCrypto />} />
          <Route path="/aip" element={<AIP />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
