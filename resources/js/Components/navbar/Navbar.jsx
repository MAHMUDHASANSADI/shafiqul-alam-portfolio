import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css';
import { Link } from '@inertiajs/react';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navsec() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href={route('home')}><img src="assets/images/logo.png" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href={route('home')} className='nav-link'>Home</Link>
            <Link href={route('biography')} className='nav-link'>Biography</Link>
            <NavDropdown title="Business Activity" >

                    <Link href={route('cafirm')} className='nav-link'>CA firm</Link>
                    <Link href={route('bizz')} className='nav-link'>Bizz Solution Plc</Link>
                  
                               </NavDropdown>
            <NavDropdown title="Award & Honor" >
                    <Link href={route('award')} className='nav-link'>Award</Link>
                    <Link href={route('achivement')} className='nav-link'>Achivement</Link>
                    <Link href={route('degree')} className='nav-link'>Honorary Degree</Link>
                    <Link href={route('recognition')} className='nav-link'>Experiences</Link>
                    {/* <Link href={route('miscellaneous')} className='nav-link'>Miscellaneous</Link> */}
            </NavDropdown>
            <NavDropdown title="My Video" >
            <a href="https://www.youtube.com/@Bizz.Solutions" className='nav-link' target='blank'> Youtube</a>
            <a href="https://www.facebook.com/profile.php?id=100013249898180" className='nav-link' target='blank'> Facebook</a>
            
            </NavDropdown>
            <NavDropdown title="News Coverage" >
                    <NavDropdown title="Print Media">
                    <Link href={route('news')} className='nav-link'>News</Link>
                    <Link href={route('interview')} className='nav-link'>Interview</Link>
                    </NavDropdown>
                    <Link className='nav-link' href={route('online')}>Online News</Link>
            </NavDropdown>
            <Link href={route('blog')} className='nav-link'>Blog</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navsec;


