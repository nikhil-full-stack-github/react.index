import React from 'react';
import { Container } from 'react-bootstrap';
import './Contact.css';




const Contact = () => {
  return (
    <div className="index-1000">
      <br /><br /><br />
      <h1 className='index-12'>Contact me</h1>
      <Container className='index-11'>
        <form>
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                aria-label="First name"
                style={{
                  border: '3px solid blue', 
                  backgroundColor: 'yellow', 
                  color: 'black',
                  padding: '10px', 
                  borderRadius: '5px', 
                }}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                aria-label="Last name"
                style={{
                  border: '3px solid blue', 
                  backgroundColor: 'yellow', 
                  color: 'black',
                  padding: '10px', 
                  borderRadius: '5px', 
                }}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Phone"
                aria-label="First name"
                style={{
                  border: '3px solid blue', 
                  backgroundColor: 'yellow', 
                  color: 'black',
                  padding: '10px', 
                  borderRadius: '5px', 
                }}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                aria-label="First name"
                style={{
                  border: '3px solid blue', 
                  backgroundColor: 'yellow', 
                  color: 'black',
                  padding: '10px', 
                  borderRadius: '5px', 
                }}
              />
            </div> 
          </div>
            
          <input type="submit" className='index-800' />
        </form>
      </Container>
    </div>
  );
};

export default Contact;
