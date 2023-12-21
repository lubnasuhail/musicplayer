import React from 'react'
import { Row ,  Col , Card} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function Landing() {
  const navigatebyUrl=useNavigate()
  const clickNavigate=()=>{
    navigatebyUrl('./home')
  }
  return (
    <div>
      <Row className='mt-5 mb-3 align-item-center'>
        <Col></Col>
<Col md="4">
  <h2>Welcome to<span className='text-danger'>Music Player.com</span></h2>
  <p className='text-dark' style={{textAlign:'center', }}>
  Music is a vital part of different moments of human life. 
  It spreads happiness and joy in a persons life. Music is the soul of life and gives immense peace to us.
   In the words of William Shakespeare, “If music is the food of love, play on, Give me excess of it; that surfeiting
   , The appetite may sicken, and so die.”
    Thus, Music helps us in connecting with our souls or real self.
  </p>
  <button className='btn btn-success' onClick={clickNavigate}> Get Started</button>
</Col>
<Col></Col>
<Col md='6'>
  <img className='img-fluid mt-5 pt-4' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeuC3tnWws_uriba62sa76xkcvaylB1u9G7A&usqp=CAU'></img>
</Col>
      </Row>
      <div className='mt-5 mb-5 ms-2'>
        <h4 className='text-center'>Features</h4>
        <div className='d-flex justify-content-around mt-5'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://icon-library.com/images/icon-gif/icon-gif-3.jpg" />
      <Card.Body>
        <Card.Title>Manage Videos </Card.Title>

        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn.dribbble.com/users/4625326/screenshots/19602645/media/a38d52a0a465a2265aee186316cfa590.gif" />
      <Card.Body>
        <Card.Title>Upload Videos </Card.Title>

        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://usagif.com/wp-content/uploads/loading-7.gif" />
      <Card.Body>
        <Card.Title>Watch-History </Card.Title>

        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       </Card.Body>
    </Card>
     </div>
      </div>

<div className='border p-5 border-success rounded shadow mt-5 mb-5 mx-5'>
  <Row>
    <Col>
    <h2> simple, Fact, Powerful</h2>
    <p style={{textAlign:'justify'}}>
  Music is a vital part of different moments of human life. 
  It spreads happiness and joy in a persons life. Music is the soul of life and gives immense peace to us.
   In the words of William Shakespeare, “If music is the food of love, play on, Give me excess of it; that surfeiting
   , The appetite may sicken, and so die.”
    Thus, Music helps us in connecting with our souls or real self.
  </p>
    </Col>
    <Col>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/JtrFzoL1joI?si=l4DS5kFhjzWGOdsl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </Col>
  </Row>
</div>
    </div>
  )
}

export default Landing