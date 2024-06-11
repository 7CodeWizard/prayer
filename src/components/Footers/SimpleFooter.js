import { navLinkInfo } from "constant";
import React from "react";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

class SimpleFooter extends React.Component {
  render() {
    return (
      <>
        <footer className=" footer">
          <Container>
            <Row className=" row-grid align-items-center mb-5">
              <Col lg="6">
                <h3 className=" text-primary font-weight-light mb-2">
                  Thank you for supporting us!
                </h3>
                <h4 className=" mb-0 font-weight-light">
                  Share The Love
                </h4>
              </Col>
              <Col className="btn-wrapper d-flex" style={{ justifyContent: 'flex-end' }} lg="6">
                {
                  navLinkInfo.map((item, index) => (
                    <Button key={index}
                      className="btn-icon-only rounded-circle ml-3"
                      color={item.color}
                      href={item.link}
                      id="tooltip475038074"
                    >
                      <span className="btn-inner--icon">
                        <i className={item.icon} />
                      </span>
                    </Button>
                  ))
                }
                <UncontrolledTooltip delay={0} target="tooltip475038074">
                  Follow us
                </UncontrolledTooltip>
              </Col>
            </Row>
            <hr />
            <Row className=" align-items-center justify-content-md-between">
              <Col md="6">
                <div className=" copyright">
                  © {new Date().getFullYear()}{" "}
                  <a href="/">
                    GHCP
                  </a>.
                </div>
              </Col>
              <Col md="6">
                <Nav className=" nav-footer justify-content-end">
                  Developer:
                  <NavItem>
                    <a
                      href="/"
                    >
                      Jaron Gaston
                    </a>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default SimpleFooter;
