import React from 'react'
import { Container,Button,Card, } from 'react-bootstrap'; 
import './Project.css'
const Project = () => {
  return (
    <body className='index-150'>
     <Container>
        <br /><br /><br /><br />
        <h1 className='index-160'>Project</h1>
     <br /><br /><br /><br /><br />
     <div className='index-210'>
     <Card style={{ width: '18rem', backgroundColor: 'black' }}>
      <Card.Img variant="top" src="./mmmmm.png" />
      <Card.Body>
        <Card.Title ><h5 className='index-300' >kerala tourist places</h5></Card.Title>
        <Card.Text>
          <h6 className='index-300' >Kerala, "God's Own Country," is famed for its backwaters, lush greenery, and rich culture, offering houseboat cruises, Ayurveda, and traditional art forms.</h6>
        </Card.Text>
        <a href="https://nikhil-full-stack-github.github.io/nikhil-index-5/"><Button variant="outline-primary">Go</Button></a>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', backgroundColor: 'black'}}>
      <Card.Img variant="top" src="./images.png" />
      <Card.Body>
        <Card.Title><h5 className='index-350'>Random image.</h5></Card.Title>
        <Card.Text>
            <h6 className='index-400'>Click the button to view a random person.
            Discover someone from around the world!</h6>
        </Card.Text>
        <a href="https://nikhil-full-stack-github.github.io/api-fetch/"><Button variant="outline-primary">Go</Button></a>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem',backgroundColor: 'black'}}>
      <Card.Img variant="top" src="./nnnnnn.webp" />
      <Card.Body>
        <Card.Title><h5 className='index-500'> Entri elevate.</h5></Card.Title>
        <Card.Text>
         <h6 className='index-600'>Entrielevate is a coding course program designed to equip learners with essential programming and development skills. It offers hands-on training to prepare individuals for careers in the tech industry.</h6>
        </Card.Text>
       <a href="https://nikhil-full-stack-github.github.io/Nikhil_boostrap_1/"><Button variant="outline-primary">Go</Button></a>
      </Card.Body>
    </Card>
     </div>
     </Container>
    </body>
  )
}

export default Project