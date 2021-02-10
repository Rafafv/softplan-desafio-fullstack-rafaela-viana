import  React from 'react';
import api from './Api';
import {Card, Button,Row,Col,Container,Table,Form,Nav} from 'react-bootstrap';
import { Link} from 'react-router-dom';

class Admin extends React.Component{
   
    constructor(props){
        super(props)
        this.state ={
            usuarios: [],
            id:0,
            name: '',
            password: '',
            type: 0
        }
    }
    

     componenDidMount(){
            api.get("/usuario/")
             .then((res)=>{
            //    console.log(res)
               if(res){
                this.setState({
                    usuarios:res.data,
                   
                })
               }
               
             })
         }

                
         submit(event,id){
            event.preventDefault();
            if(id === 0){
                api.post("/usuario/PostUsuario/",{
                    name:this.state.name,
                    password:this.state.password,
                    type:this.state.type
                })
                .then(()=>{
                  this.componenDidMount();
                  this.reset();   
                })
            }
            else{
              //  console.log(this.state.type)
                api.put("/usuario/PutUsuario/",{
                    id:this.state.id,
                    name:this.state.name,
                    password:this.state.password,
                    type:this.state.type
                })
                .then(()=>{
                  //  console.log('ok')
                   this.componenDidMount();   
                   this.reset();             
                 }
    
               )
            }
           
        }

       excluir(id){
            api.delete(`/usuario/${id}`)
            .then(()=>{
                this.componenDidMount();
            })
        }
        reset(){
            this.setState({
                name:"",
                password:"",
                type:0
               
            })
        }

        editar(id){
            api.get(`/usuario/GetById/${id}`)
            .then((res)=>{
            //    console.log(res);
                this.setState({
                    id:res.data.id,
                    name:res.data.name,
                    password:res.data.password,
                    type:res.data.type
                })
            })
        }
        
        render(){
            return (
                <>
    
                    <Container>
                    <Nav>
                       <Link to="/login" style={{textDecoration: 'none'}}>Trocar de Usuário</Link>
                   </Nav>
                        <Row style={{ paddingTop: '2em' }}>
                           <h2 style={{color:'#457b9d'}}>
                                Área Administrativa
                            </h2>
                            <Col sm={12}>
                                <Card >
                                    <Card.Header style={{ backgroundColor: '#5c5cff' }}>
                                        <Card.Title style={{ color: '#ffff' }}>Cadastro de Usuários</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
    
                                        <Row>
                                            <Col md={10}>
                                                <Form onSubmit={(e)=>this.submit(e,this.state.id)}>
                                                    <Form.Group >
                                                        <Form.Label>Nome Usuário</Form.Label>
                                                        <Form.Control onChange={(e)=>this.setState({name:e.target.value})} value={this.state.name} type="text" id="name" name="name"/>
                                                    </Form.Group>
                                                    <Form.Group >
                                                        <Form.Label>Senha</Form.Label>
                                                        <Form.Control onChange={(e)=>this.setState({password:e.target.value})} value={this.state.password} type="text" id="password" name="password"/>
                                                    </Form.Group>
                                                    <Form.Group >
                                                        <Form.Label>Tipo Usuário</Form.Label>
                                                        <Form.Control as="select" onChange={(e)=>this.setState({type:e.target.value})} value={this.state.type} id="type" name="type">
                                                            <option value="0">Selecione</option>
                                                            <option value="1">Administrador</option>
                                                            <option value="2">Triador</option>
                                                            <option value="3">Finalizador</option>
    
                                                        </Form.Control>
                                                    </Form.Group>
                                                    <Row>
                                                        <Col style={{ paddingTop: '20px' }}>
                                                            <Button variant="primary" type="submit" name="action">Salvar</Button>
                                                        </Col>
                                                                                               
                                                    </Row>
                                                    <Row>
                                                        <Col style={{ paddingTop: '20px' }}>
                                                            <Button variant="primary" onClick={(e)=>this.componenDidMount()} type="button">Atualizar Tabela</Button>
                                                        </Col>
                                                    </Row>
                                                </Form>
                                            </Col>
                                        </Row>
                                        <Row style={{ paddingTop: '3em' }}>
                                            
                                            <Table striped bordered hover >
                                                <thead style={{ backgroundColor: '#5c5cff',color:'#fff' }}>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Nome</th>
                                                        <th>Tipo de Usuário</th>
                                                        <th>Editar</th>
                                                        <th>Excluir</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                   
                                                        this.state.usuarios.map(usuario=>
                                                           
                                                        <tr key={usuario.id}>
                                                            <td>{usuario.id}</td>
                                                            <td>{usuario.name}</td>
                                                            <td>{usuario.type}</td>
                                                            <td><Button onClick={(e)=>this.editar(usuario.id)} variant="outline-info" type="submit" name="action">Editar</Button></td>
                                                            <td><Button onClick={(e)=>this.excluir(usuario.id)} variant="outline-danger" type="submit" name="action">Excluir</Button></td>
                    
                                                        </tr>
                                                            
                                                        )
                                                        
                                                    }
                                                         
                                                </tbody>
                                            </Table>
                                        </Row>
    
                                    </Card.Body>
                                </Card>
                            </Col>
                          
                        </Row>
                    </Container>
                </>
    
    
    
            );
        }
      
    
}


export default Admin;