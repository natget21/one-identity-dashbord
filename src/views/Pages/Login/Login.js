import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { message } from 'antd';
import UserService from '../../../services/users.service';

class Login extends Component {

  constructor() {
    super();
    this.handleValidSubmit = this.handleValidSubmit.bind(this);
    this.state = {
      username:"",
      password:"",
      visible:false
    };

  }

  handleValidSubmit(event, values) {
    
    const username = this.state.username.trim();
    const password = this.state.password.trim();
    if(username=="" || password==""){
      
    }else{
    UserService.login(username, password)
      .then(response => {
        if (response.success) {
            this.setState({ visible: false })
            this.props.history.push('dashboard');
            //window.location.reload()
            
        } else {
          this.setState({ visible:true})
        }
      })
      .catch(error => {
        this.setState({ visible: true })
      });
    }
  }

  handleUsernameChange = event => {
    this.setState({ username: event.target.value });
  };
  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      
      <div className="app flex-row align-items-center">
      
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" value={this.state.username} onChange={this.handleUsernameChange} placeholder="Username" autoComplete="username" />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" value={this.state.password} onChange={this.handlePasswordChange} placeholder="Password" autoComplete="current-password" />
                      </InputGroup>
                      {this.state.visible ? <Col md={{ size: 6, offset: 3 }}>
                        <InputGroupText >
                          <center style={{color:"red"}}>Invalid Username / Password !</center>
                        </InputGroupText><br />
                      </Col>:""}
                      
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4" onClick={this.handleValidSubmit}>Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
               
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
