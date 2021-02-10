import  React from 'react';
import api from './Api';
import {Card, Button,Row,Col,Container,Table,Form,Nav} from 'react-bootstrap';
import { Link} from 'react-router-dom';

class Triador extends React.Component{
   
    constructor(props){
        super(props)
        this.state ={
            processos: [],
            id:0,
            description: '',
            processo:0,
            usuario:""
         
        }
    }
    
     componenDidMount(){
            api.get("/processoUsuario/GetProcessosUsuario")
             .then((res)=>{
               //  console.log(res)
                 this.setState({
                     processos:res.data,
                    
                 })
             })
         }
                
         submitProcesso(event){
            event.preventDefault();
          
                api.post("/processo/PostProcesso/",{
                    description:this.state.description,
               
                })
                .then((res)=>{
                    this.setState({
                        processo:res.data.id,
                       
                    })
                    this.componenDidMount();
                    this.reset();
                })
            
        }
        submitProcessoUsuario(event){
            event.preventDefault();
            api.post("/processoUsuario/PostProcessoUsuario/",{
                usuario:this.state.usuario,
                processo:this.state.processo
            })
            .then(()=>{
                this.componenDidMount();
                this.resetUsuario();
            })
        
        }

        reset(){
            this.setState({
                description: '',
                
            })
        }
        resetUsuario(){
            this.setState({
                usuario: '',
                
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
                                Área de Triagem
                            </h2>
                            <Col sm={12}>
                                <Card>
                                    <Card.Header style={{ backgroundColor: '#5c5cff' }}>
                                        <Card.Title style={{ color: '#ffff' }}>Cadastrar Processo e Atribuição</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
    
                                        <Row>
                                            <Col md={10}>
                                                <Form onSubmit={(e)=>this.submitProcesso(e,this.state.id)}>
                                                    <Form.Group >
                                                        <Form.Label>Descrição</Form.Label>
                                                        <Form.Control onChange={(e)=>this.setState({description:e.target.value})} value={this.state.description} type="text" id="description" name="description"/>
                                                    </Form.Group>
                                                   
                                                    <Row>
                                                        <Col style={{ paddingTop: '20px' }}>
                                                            <Button variant="primary" type="submit" name="action">Adicionar</Button>
                                                        </Col>
                                                       
                                                    </Row>
                                                </Form>
                                            </Col>
                                        </Row>
    
                                        <Row style={{ paddingTop: '1em' }} >
                                            <Col md={10}>
                                                <Form onSubmit={(e)=>this.submitProcessoUsuario(e,this.state.id)}>
                                                    <Form.Group >
                                                      <Form.Label>Nome Usuário</Form.Label>
                                                           <Form.Control onChange={(e)=>this.setState({usuario:e.target.value})} value={this.state.usuario} type="text" id="usuario" name="usuario"/>
                                                   </Form.Group>
                                                   
                                                    <Row>
                                                        <Col style={{ paddingTop: '20px' }}>
                                                            <Button variant="primary" type="submit" name="action">Salvar</Button>
                                                        </Col>
                                                       
                                                    </Row>
                                                </Form>
                                            </Col>
                                        </Row>
                                        <Row>
                                             <Col style={{ paddingTop: '20px' }}>
                                                  <Button variant="primary" onClick={(e)=>this.componenDidMount()} type="button">Atualizar Tabela</Button>
                                              </Col>
                                        </Row>
                                        <Row style={{ paddingTop: '2em' }}>
                                            
                                            <Table striped bordered hover>
                                                <thead style={{ backgroundColor: '#5c5cff',color:'white'}}>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Processo</th>
                                                        <th>Atribuido à</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        
                                                        this.state.processos.map(processo=>
                                                            
                                                        <tr key={processo.idprocesso_usuario}>
                                                            <td>{processo.idprocesso_usuario}</td>
                                                            <td>{processo.description}</td>
                                                            <td>{processo.usuario}</td>
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


export default Triador;