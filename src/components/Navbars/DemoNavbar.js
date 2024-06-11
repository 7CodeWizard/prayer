import React from "react"
import { Link } from "react-router-dom"
import Headroom from "headroom.js"
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap"
import { logo } from "assets"
import { signOut } from "api/api_user"
import '../style.css'
import auth from "components/auth/authHelper"

class DemoNavbar extends React.Component {


  state = {
    'flag': '',
    'collapseClasses': "",
  }
  constructor(props) {
    super(props);
    this.state = {
      sessionStorageValue: sessionStorage.getItem('jwt') || '',
    };
  }
  componentDidMount() {
    window.addEventListener('sessionStorageChange', this.handleCustomStorageChange);
    let headroom = new Headroom(document.getElementById("navbar-main"))
    headroom.init()
  }

  componentWillUnmount() {
    window.removeEventListener('sessionStorageChange', this.handleCustomStorageChange);
  }

  handleCustomStorageChange = (event) => {
    if (event.detail.key === 'jwt') {
      this.setState({ sessionStorageValue: event.detail.value });
    }
  };

  handleClick = () => {
    signOut().then((data) => {
      if (data) {
        // alert(data.message)
        auth.authenticate('jwt', '')
        sessionStorage.removeItem('jwt')
        window.location.assign('/')
      }
    })
  }
  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out",
    })
  }

  onExited = () => {
    this.setState({
      collapseClasses: "",
    })
  }

  render() {
    return (
      <>
        <Navbar
          className="navbar-main navbar-transparent navbar-light headroom" style={{ marginTop: '37px', height: '60px' }}
          expand="lg"
          id="navbar-main"
        >
          <Container className="bg-success mainHeader" >
            <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
              <img
                alt="..."
                style={{ height: '40px' }}
                src={logo}
              />
            </NavbarBrand>
            <UncontrolledCollapse
              toggler="#navbar_global"
              navbar
              className={this.state.collapseClasses}
              onExiting={this.onExiting}
              onExited={this.onExited}
              style={{ justifyContent: 'end' }}
            >

              <Row className="navbar-collapse-header">
                <Col className="collapse-brand" xs="6">
                  <Link to="/">
                    <img alt="..." src={logo} />
                  </Link>
                </Col>
                <Col className="collapse-close" xs="6">
                  <button className="navbar-toggler" id="navbar_global">
                    <span />
                    <span />
                  </button>
                </Col>
              </Row>

              <>
                <Button active color="link" className="text-white ml-1" to="/landing-page" tag={Link}>
                  Consciousness Project
                </Button>
                <Button active color="link" className="text-white ml-1" to="/about-us" tag={Link}>
                  About Us
                </Button>
                <Button color="link" className="text-white ml-1" to="/contact-us" tag={Link}>
                  Contact Us
                </Button>
                {!this.state.sessionStorageValue && <>
                  <Button color="link" className="text-white ml-1" to="/login-page" tag={Link}>
                    Login
                  </Button>
                  <Button color="link" className="text-white ml-1" to="/register-page" tag={Link}>
                    Register
                  </Button>
                </>}
              </>

              {this.state.sessionStorageValue && <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                <UncontrolledDropdown nav>
                  <DropdownToggle nav className="p-0">
                    <i className="ni ni-collection d-lg-none mr-1" />
                    <div className="avatar" style={{ backgroundImage: `url(http://localhost:5000/api/userInfo/photo/${auth.isAuthenticated().user._id})` }}></div>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem to="/profile-page" tag={Link}>
                      Profile
                    </DropdownItem>
                    <DropdownItem onClick={this.handleClick}>
                      Log Out
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>}

            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </>
    )
  }
}

export default DemoNavbar
