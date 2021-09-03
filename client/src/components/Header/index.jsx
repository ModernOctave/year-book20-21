import React, { useState } from 'react';
import Slide from 'react-reveal/Slide';
import { useMediaQuery } from 'react-responsive';
import { Navbar, Container, Nav, Button, NavLink } from 'react-bootstrap';

import DownloadButton from '../DownloadAsPDF';
import Sidebar from '../Sidebar';
import Logo from '../Logo';
import './styles.css';

const Header = ({ active }) => {

    const isTabletorMobile = useMediaQuery({
        query: '(max-width: 1000px)'
    });

    const [show, setShow] = useState(false);

    const toggleShow = () => {
        setShow(!show);
    }

    const [hover, setHover] = useState(false);

    const toggleHover = () => {
        setHover(!hover);
    };

    const [hover1, setHover1] = useState(false);

    const toggleHover1 = () => {
        setHover1(!hover1);
    };
    
    const [hover2, setHover2] = useState(false);

    const toggleHover2 = () => {
        setHover2(!hover2);
    };

    return (
        <Slide top delay={100} when={true}>
            <Navbar fixed="top" className="header">
                <Container className="fullWidth">
                    <Slide top delay={100} when={true}>
                        <Navbar.Brand className="elements">
                            <div className="children">
                                {isTabletorMobile && (
                                    <Button className="gradient-text no-border link" onClick={toggleShow}>
                                        <i className="fas fa-bars fa-2x"/>
                                    </Button>
                                )}
                                <Logo/>
                            </div>
                        </Navbar.Brand>
                    </Slide>
                    <Slide top delay={100} when={true}>
                        {!isTabletorMobile && (
                            <>
                                <Nav className="justify-content-end">
                                    <NavLink id="1" href="/" className={`elements circle-border ${((active!==1) && hover)?'selected-gradient':'unselected-gradient'}`} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
                                        <div className={`title a ${(active===1)?'underline-violet violet':'white'}`}>
                                            Home
                                        </div>
                                    </NavLink>
                                    <NavLink id="2" href="events" className={`elements circle-border ${((active!==2) && hover2)?'selected-gradient':'unselected-gradient'}`} onMouseEnter={toggleHover2} onMouseLeave={toggleHover2}>
                                        <div className={`title a ${(active===2)?'underline-green green':'white'}`}>
                                            Events
                                        </div>
                                    </NavLink>
                                    <NavLink id="3" href="students" className={`elements circle-border ${((active!==3) && hover1)?'selected-gradient':'unselected-gradient'}`} onMouseEnter={toggleHover1} onMouseLeave={toggleHover1}>
                                        <div className={`title a ${(active===3)?'underline-green green':'white'}`}>
                                            Students
                                        </div>
                                    </NavLink>
                                    <DownloadButton/>
                                </Nav>
                            </>
                        )}
                    </Slide>
                </Container>
                <Sidebar show={show} handleClose={toggleShow} active={active}/>
            </Navbar>
        </Slide>
    )
}

export default Header;
