import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {


    return (
        <div>

            {/* <nav className={`fw-bold my-3 d-block d-md-flex justify-content-center `}>
                <CustomLink className='p-3 custom-link' to='/'>HOME</CustomLink>
                <CustomLink className='p-3 custom-link' to='/reviews'>REVIEWS</CustomLink>
                <CustomLink className='p-3 custom-link' to='/dashboard'>DASHBOARD</CustomLink>
                <CustomLink className='p-3 custom-link' to='/blogs'>BLOGS</CustomLink>
                <CustomLink className='p-3 custom-link' to='/about'>ABOUT</CustomLink>
            </nav> */}


            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto fw-bold mx-auto">
                            <CustomLink className='p-3 custom-link' to='/'>HOME</CustomLink>
                            <CustomLink className='p-3 custom-link' to='/reviews'>REVIEWS</CustomLink>
                            <CustomLink className='p-3 custom-link' to='/dashboard'>DASHBOARD</CustomLink>
                            <CustomLink className='p-3 custom-link' to='/blogs'>BLOGS</CustomLink>
                            <CustomLink className='p-3 custom-link' to='/about'>ABOUT</CustomLink>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;