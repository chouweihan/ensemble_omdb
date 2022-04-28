import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from "react-bootstrap/Container"

const Nav = () => {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand>
                Wei-Han Chou
            </Navbar.Brand>
        </Container>
    </Navbar>
  )
}

export default Nav