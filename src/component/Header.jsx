import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <Navbar className="bg-info">
        <Container>
            <Link to={'/'}style={{textDecoration:'none'}}>
        <Navbar.Brand  style={{color:'white'}}>
        <i className="fa-solid fa-music fa-beat-fade fa-xl" style={{color:'#e10ea9'}}></i>{' '}
          Music Player
          </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header