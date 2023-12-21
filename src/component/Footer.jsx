import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
        <div className='bg-info' style={{width:'100%', height: '400px'}}>
            <Row className='p-5'>
                <Col md='4'>
<h4><i className="fa-solid fa-music  fa-lg" style={{color:'#540846'}}></i>{' '}Music Player</h4><br/>
<p style={{textAlign:'justify',color:'black'}}>
Music is a vital part of different moments of human life. It spreads happiness and joy in a person’s life. Music is the soul of life and gives immense peace to us. In the words of William Shakespeare, “If music is the food of love, play on, Give me excess of it; that surfeiting, The appetite may sicken, and so die.” Thus, Music helps us in connecting with our souls or real self.
</p>
                </Col>
                <Col md='4' className='d-flex flex-column'>
                <h4>Links</h4><br/>
                <Link to={'/'}style={{textDecoration:'none',color:'black'}}>Landind page</Link>
                <Link to={'/home'}style={{textDecoration:'none',color:'black'}}>Home</Link>
                <Link to={'/watch-history'}style={{textDecoration:'none',color:'black'}}>Watch-History</Link>
                </Col>
                <Col>
                <h4>Guides</h4><br/>
                <Link to={'https://react.dev/'} style={{textDecoration:'none',color:'black'}}>React</Link><br/>
                <Link to={'https://react-bootstrap.github.io/'} style={{textDecoration:'none',color:'black'}}>React-Bootstrap</Link><br/>
                <Link to={'https://fontawesome.com/'} style={{textDecoration:'none',color:'black'}}>Font Awesome</Link>
                </Col>
            </Row>
            <p className='text-center mt-3'>Copyright @ 2023 Music player. Built with React.</p>
        </div>
    </div>
  )
}

export default Footer