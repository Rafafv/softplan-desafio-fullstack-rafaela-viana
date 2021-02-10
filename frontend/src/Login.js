import {React, useState} from 'react';
import {Button,Container,Form,Row,Col,Card} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

import api from './Api';


function Login(){
    const [values, setValues] = useState({name:'',password:''});
    let history = useHistory();
    function onChange(event) {
        const {name,value} = event.target;
        setValues({...values,[name]:value})
    }

    function subForm(e){
    e.preventDefault();
   
    //console.log(values)
        api.post("/usuario/Login/",{ name:values.name,password:values.password }).then((res)=>{
      //    console.log(res)
       if(res.data.name === values.name && res.data.password === values.password){
           
           if(res.data.type === 1){
              history.push('/admin');
           }
           if(res.data.type === 2){
            history.push('/triador');
             
           }
           if(res.data.type === 3){
           //    console.log(res.data.name)
             history.push({pathname: '/finalizador',
                            state:  res.data.name})
        }
       }
       else{
        alert("Usuario não encontrado");
        
       }

           
        })
    }

    

       
    

    return(
            
            <Container >
               <Row style={{ paddingTop: '5em' }} className="justify-content-md-center" >
               <Col sm={5} >
                   <Card style={{ width: '300px'}}>
                       <Card.Header style={{ backgroundColor: '#5c5cff' }}> 
                          <Card.Title style={{ color: '#ffff' }}>Faça seu Login</Card.Title>
                       </Card.Header>
                       <Card.Body> 
                      
                           <Form onSubmit={subForm}>
                                <Form.Group >
                                    <Form.Label>Usuário</Form.Label>
                                    <Form.Control type="text" id="name" name="name" onChange={onChange} value={values.name}/>
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label>Senha</Form.Label>
                                    <Form.Control type="password" id="password" name="password" onChange={onChange}  value={values.password}/>
                                </Form.Group>
                                <Row >
                                   <Col style={{ paddingTop: '20px' }}>
                                        <Button variant="primary" type="submit">
                                            Entrar
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Card.Body>
                   </Card>
                  </Col>
                </Row>
            </Container>

    );

}

export default Login;