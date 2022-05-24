import { Container, Navbar, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Header(props) {
  let navigate = useNavigate();

  // For not Logged
  let open = props.open;
  let status = props.status;

  // For after Logged and check Logged or not
  let profile = props.profile;
  let logOut = props.logOut;
  let textIntro = "Welcome, " + profile.name;

  return (
    <Navbar className='bg-white' sticky='top'>
      <Container>
        <Navbar.Brand>
          <h1 className='mb-0'>Cinta Coding</h1>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          {Object.keys(profile).length !== 0 ? (
            <NavDropdown title={textIntro} id='basic-nav-dropdown'>
              <NavDropdown.Item
                onClick={() => {
                  navigate("/profile");
                }}>
                Detail Profile
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                onClick={() => {
                  navigate("/");
                  logOut({});
                }}>
                Log Out
              </NavDropdown.Item>
            </NavDropdown>
          ) : (
            <button
              className='btn btn-primary'
              onClick={() => {
                open(!status);
              }}>
              Login
            </button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
