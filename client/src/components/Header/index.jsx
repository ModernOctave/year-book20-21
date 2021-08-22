import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Navbar, Container, Nav, Button, NavLink } from 'react-bootstrap';

import DownloadButton from '../DownloadAsPDF';
import Sidebar from '../Sidebar';
import Logo from '../Logo';
import './styles.css';

const Header = ({ active }) => {

    const isTabletorMobile = useMediaQuery({
        query: '(max-width: 700px)'
    });

    const [show, setShow] = useState(false);

    const toggleShow = () => {
        setShow(!show);
    }

    return (
        <Navbar fixed="top" expand="lg" className="header">
            <Container className="container">
                <Navbar.Brand className="elements">
                    <div className="children">
                        {isTabletorMobile && (
                            <Button className="gradient-text no-border elements" onClick={toggleShow}>
                                Open
                            </Button>
                        )}
                        <Logo/>
                    </div>
                </Navbar.Brand>
                {!isTabletorMobile && (
                    <div className="children">
                        <Nav>
                            <NavLink href="/" className={`elements text a ${(active===1)?'violet':'white'}`}>Home</NavLink>
                            <NavLink href="/events" className={`elements text a ${(active===2)?'yellow':'white'}`}>Events</NavLink>
                            <NavLink href="/students" className={`elements text a ${(active===3)?'green':'white'}`}>Students</NavLink>
                        </Nav>
                        <DownloadButton/>
                    </div>
                )}
            </Container>
            <Sidebar show={show} handleClose={toggleShow} active={active}/>
        </Navbar>
    )
}

export default Header;
