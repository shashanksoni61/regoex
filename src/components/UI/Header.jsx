import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/rego-logo-white.png";
import dashboardIcon from "../../assets/images/svg-icons/dashboard_active.svg";
import walletIcon from "../../assets/images/svg-icons/wallet_active.svg";
import investIcon from "../../assets/images/svg-icons/pro_active.svg";
import exchangeIcon from "../../assets/images/svg-icons/exchange_active.svg";
import historyIcon from "../../assets/images/svg-icons/history_active.svg";
import refIcon from "../../assets/images/svg-icons/ref-icon-active.svg";
import svgImages from "../../assets/images/svg-icons/svgImages";
import "./Header.css";

const Header = () => {
  const navDropdownTitle = (
    <span className="flex-item-center">
      <img src={investIcon} height={23} width={23} className="nav-link-icon" />
      <span className="nav-link-label label">Invest</span>
    </span>
  );

  const exchangeDropdown = (
    <span className="flex-item-center">
      <img
        src={exchangeIcon}
        height={23}
        width={23}
        className="nav-link-icon"
      />
      <span className="nav-link-label label">Exchange</span>
    </span>
  );

  return (
    <>
      <Container>
        <Navbar bg="light">
          <Navbar.Brand href="#home">
            <img
              alt=""
              width={173}
              height={60}
              src={logo}
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink
                to="/dashboard"
                title="Dashboard"
                className="nav-link flex-item-center"
              >
                <img
                  src={dashboardIcon}
                  height={23}
                  width={23}
                  className="nav-link-icon"
                />
                <span className="nav-link-label label">Dashboard</span>
              </NavLink>
              <NavLink
                to="/wallet"
                title="Wallet"
                className="nav-link  flex-item-center"
              >
                <img
                  src={walletIcon}
                  height={23}
                  width={23}
                  className="nav-link-icon"
                />
                <span className="nav-link-label label">Wallet</span>
              </NavLink>
              <NavDropdown
                title={navDropdownTitle}
                id="basic-nav-dropdown"
                className="nav-dropdown-custom"
              >
                <NavDropdown.Item to="/fixed-deposit">
                  <NavLink
                    to="/fixed-deposit"
                    title="Wallet"
                    className="nav-link  flex-item-center"
                  >
                    <img
                      src={svgImages.fd_active}
                      height={23}
                      width={23}
                      className="nav-link-icon"
                    />
                    <span className="nav-link-label label">Fixed Deposit</span>
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink
                    to="/aip"
                    title="AIP"
                    className="nav-link  flex-item-center"
                  >
                    <img
                      src={svgImages.aip_active}
                      height={23}
                      width={23}
                      className="nav-link-icon"
                    />
                    <span className="nav-link-label label">AIP</span>
                  </NavLink>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title={exchangeDropdown}
                id="basic-nav-dropdown"
                className="nav-dropdown-custom"
              >
                <NavDropdown.Item to="/fixed-deposit">
                  <NavLink
                    to="/buyCrypto"
                    title="Wallet"
                    className="nav-link  flex-item-center"
                  >
                    <img
                      src={svgImages.instantBuy}
                      height={23}
                      width={23}
                      className="nav-link-icon"
                    />
                    <span className="nav-link-label label">
                      Instant Buy & Sell
                    </span>
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink
                    to="/aip"
                    title="AIP"
                    className="nav-link  flex-item-center"
                  >
                    <img
                      src={svgImages.instantSwap}
                      height={23}
                      width={23}
                      className="nav-link-icon"
                    />
                    <span className="nav-link-label label">Instant Swap</span>
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink
                    to="/aip"
                    title="AIP"
                    className="nav-link  flex-item-center"
                  >
                    <img
                      src={svgImages.proTrading}
                      height={23}
                      width={23}
                      className="nav-link-icon"
                    />
                    <span className="nav-link-label label">Pro Trading</span>
                  </NavLink>
                </NavDropdown.Item>
              </NavDropdown>
              <NavLink
                to="/history"
                title="History"
                className="nav-link  flex-item-center"
              >
                <img
                  src={historyIcon}
                  height={23}
                  width={23}
                  className="nav-link-icon"
                />
                <span className="nav-link-label label">History</span>
              </NavLink>
              <NavLink
                to="/referral"
                title="Referral"
                className="nav-link  flex-item-center"
              >
                <img
                  src={refIcon}
                  height={23}
                  width={23}
                  className="nav-link-icon"
                />
                <span className="nav-link-label label">Referral</span>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </>
  );
};

export default Header;
