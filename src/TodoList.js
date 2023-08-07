import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import './TodoList.css'


const TodoList = (props) => {

    const [show, setShow] = useState(false);
    const [activiy,setActivity] = useState("");
    const [listData,setlistData] = useState([]);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const addActivity = () =>{
        setlistData(()=>{
            const updatedList = [...listData,activiy]
            console.log(updatedList)
            setActivity('');
            return updatedList
        })
        handleClose();
    }

    const removeActivity = (i) => {
        const updatedListData = listData.filter((elem,id) => {
            return i!=id;
        })
        setlistData(updatedListData);
    }

    const removeAll = () => {
        setlistData([])
    }

  return (
    <>  
     <div className='container'>
     <div className='reset_container'>
        <h2 className='contained-modal-title-vcenter2'>Todo List</h2>
        <div className='icon'>
        <svg onClick={removeAll} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_19_209)">
        <path d="M14 3.48809C16.7848 3.49746 19.4525 4.60903 21.42 6.57976L18.6504 9.34942H25.452C25.8066 9.34942 26.1467 9.20856 26.3974 8.95782C26.6482 8.70709 26.789 8.36702 26.789 8.01242V1.21076L23.8829 4.11692C21.9294 2.15429 19.437 0.81614 16.7219 0.272255C14.0067 -0.27163 11.1912 0.00326074 8.63253 1.06205C6.07386 2.12084 3.88736 3.91581 2.35044 6.21922C0.813516 8.52264 -0.00455399 11.2307 1.90684e-05 13.9998H3.48835C3.49144 11.2128 4.59991 8.54095 6.57056 6.5703C8.54121 4.59964 11.2131 3.49118 14 3.48809Z" fill="#949691"/>
        <path d="M24.5116 14C24.5154 16.0793 23.9015 18.1128 22.7476 19.8425C21.5937 21.5722 19.9519 22.9201 18.0306 23.7151C16.1094 24.5101 13.9952 24.7164 11.9565 24.3078C9.91778 23.8991 8.04642 22.894 6.57994 21.42L9.3496 18.6503H2.3251C2.0297 18.6506 1.74649 18.7681 1.53761 18.977C1.32873 19.1859 1.21125 19.4691 1.21094 19.7645V26.789L4.1171 23.8828C6.07054 25.8455 8.56294 27.1836 11.2781 27.7275C13.9932 28.2714 16.8088 27.9965 19.3674 26.9377C21.9261 25.8789 24.1126 24.0839 25.6495 21.7805C27.1864 19.4771 28.0045 16.7691 27.9999 14H24.5116Z" fill="#949691"/>
        </g>
        <defs>
        <clipPath id="clip0_19_209">
        <rect width="28" height="28" fill="white"/>
        </clipPath>
        </defs>
        </svg>

        </div>
     </div>
     
     <div className="list-container">
     {listData!=[] && listData.map((data,i) => {
        return(
            <>
            <Form>
            {['checkbox'].map((type) => (
            <div key={`inline-${type}`} className="mb-3 space_betwwn">
            
                <Form.Check
                inline
                label={data}
                name="group1"
                type={type}
                id={`inline-${type}-1`}
                />

                <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={()=>removeActivity(i)}>Remove</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
            </div>
            ))}
            </Form>
             </>
        )
     })}
     </div>

     <div class="vertical-center">
      <button className='btn_area' variant="primary" onClick={handleShow}>Add</button>
     </div>
    </div>

    <Modal {...props}
    
      aria-labelledby="contained-modal-title-vcenter"
      centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         Add Todo 📑
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container className='container_model'>
        <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Your thoughts 🤔</Form.Label>
        <Form.Control as="textarea" value={activiy}  onChange={(e)=>setActivity(e.target.value)} rows={3} />
      </Form.Group>
      </Form>
         
        </Container>
      </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addActivity}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default TodoList