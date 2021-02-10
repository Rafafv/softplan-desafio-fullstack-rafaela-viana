import React from 'react';
import api from './Api';
import {Card, Button,Row,Col,Container,Table,Form,Nav} from 'react-bootstrap';
import { Link} from 'react-router-dom';

class Finalizador extends React.Component {
    
    constructor(props){
     //   console.log(props.location)
        super(props)
        this.state ={
            processos: [],
            idprocesso_usuario:0,
            parecer: '',
            processo:0,
            usuario:""
         
        }
    }

    componenDidMount(){
     //   console.log(this.props.location.state )
        api.post("/processoUsuario/GetProcessoPendente",{
           usuario:this.props.location.state 
         }).then((res)=>{
             console.log(res)
             this.setState({
                 processos:res.data,
                
             })
         })
     }
       
    submitProcessoUsuario(event){
        event.preventDefault();
//console.log(this.props.location.name)
        api.put("/processoUsuario/PutProcessoUsuario/",{
            usuario:this.props.location.state,
            processo:this.state.processo,
            idprocesso_usuario:this.state.idprocesso_usuario,
            description:this.state.parecer
        })
        .then(()=>{
            this.componenDidMount();
            
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
                                Área Finalizar Processo
                            </h2>
                            <Col md={12}>
                                <Card>
                                    <Card.Header style={{ backgroundColor: '#5c5cff' }}>
                                        <Card.Title style={{ color: '#ffff' }}>Lista de Processos</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                    <Row>
                                                <Col style={{ paddingTop: '20px' }}>
                                                    <Button variant="primary" onClick={(e)=>this.componenDidMount()} type="button">Atualizar Tabela</Button>
                                                </Col>
                                            </Row>
                                            <Row style={{ paddingTop: '2em' }}>
                                                <Col md={12}>
                                                <Table striped bordered hover>
                                                    <thead style={{ backgroundColor: '#457b9d',color:'white'}}>
                                                        <tr>
                                                           
                                                            <th>Processo</th>
                                                            <th>Atribuir</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                   
                                                   {
                                                       this.state.processos.map(processo=>
                                                        <tr key={processo.idprocesso_usuario}>
                                                          
                                                            <td>{processo.description}</td>
                                                            <td><Form onSubmit={(e)=>this.submitProcessoUsuario(e,this.state.idprocesso_usuario)}>
                                                                    <Form.Group >
                                                                        <Form.Label>Adicione o parecer </Form.Label>
                                                                        <Form.Control onChange={(e)=>this.setState({parecer:e.target.value})} value={this.state.parecer} as="textarea" rows={3} id="parecer" name="parecer"/>
                                                                        <Form.Control onChange={(e)=>this.setState({processo:e.target.value})} value={this.state.processo} type="text" id="processo" name="processo" hidden/>
                                                                        <Form.Control onChange={(e)=>this.setState({usuario:e.target.value})} value={this.state.usuario} type="text" id="usuario" name="usuario" hidden/>
                                                                    </Form.Group>
                                                                
                                                                    <Row>
                                                                        <Col style={{ paddingTop: '20px' }}>
                                                                            <Button variant="primary" type="submit" name="action">Salvar</Button>
                                                                        </Col>
                                                                    
                                                                    </Row>
                                                                </Form>
                                                            </td>
                                                          </tr>
                                                        )
                                                   }

                                                           
                                                      
                                                    </tbody>
                                                </Table>
                                                </Col>
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


export default Finalizador;