import React, { Component } from 'react';
import {
  Badge,
  Button,
  ButtonDropdown,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row,
} from 'reactstrap';
import profile from '../../../assets/img/brand/profile.png';
import fprint from '../../../assets/img/brand/fingerprint.jpeg';
import axios from 'axios';



class Forms extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.addPerson = this.addPerson.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      fname : '',
      mname : '',
      lname : '',
      dob : '',
      gender : 'Female',
      citizenship : 'ET',
      residence : 'AA',
      hometown : 'HA',
      marital_status : 'Married',
      photo_url : '',
      finger_print : 'dfghjdsfghjk',
      phone_number : '',
      region : '',
      city : '',
      sub_city : '',
      woreda : '',
      house_no : ''

    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }
  addPerson(event){
    event.preventDefault();
   // alert(this.state.fname);
    /*const data = {
      fname : this.state.fname,
      mname : this.state.mname,
      lname : this.state.lname,
      dob : this.state.dob,
      gender : this.state.gender,
      citizenship : this.state.citizenship,
      residence : this.state.residence,
      hometown : this.state.dob,
      marital_status : this.state.marital_status,
      photo_url : this.state.photo_url,
      finger_print : this.state.finger_print,
      phone_number : this.state.phone_number,
      region : this.state.region,
      city : this.state.city,
      sub_city : this.state.sub_city,
      woreda : this.state.woreda,
      house_no : this.state.house_no

     
    }*/
    const newData = new FormData();
    newData.append('fname',this.state.fname);
    newData.append('mname',this.state.mname);
    newData.append('lname',this.state.lname);
    newData.append('dob',this.state.dob);
    newData.append('gender',this.state.gender);
    newData.append('citizenship',this.state.citizenship);
    newData.append('residence',this.state.residence);
    newData.append('hometown',this.state.hometown);
    newData.append('marital_status',this.state.marital_status);
    newData.append('photo_url',this.state.photo_url);
    newData.append('finger_print',this.state.finger_print);
    newData.append('phone_number',this.state.phone_number);
    newData.append('region',this.state.region);
    newData.append('city',this.state.city);
    newData.append('sub_city',this.state.sub_city);
    newData.append('woreda',this.state.woreda);
    newData.append('house_no',this.state.house_no);
  // alert(data);
    let context = this;
    axios({
      url:'https://one-identity-api.herokuapp.com/persons',
      method: 'POST',
      data: newData})
      .then(response => {
        alert("Person Identification is Succesfully saved  " )
        context.setState({
          fname: '',
          mname: '',
          lname: '',
          dob : '',
          gender : '',
          citizenship : '',
          residence : '',
          hometown : '',
          marital_status : '',
          photo_url : '',
          finger_print : '',
          phone_number : '',
          region : '',
          city : '',
          sub_city : '',
          woreda : '',
          house_no : ''
        });
  }
      )
      .catch(error => {
        alert(error.response.data.message);
      });
}
  
  
  

  render() {
    return (
      <div className="animated fadeIn">
       
         
        <Row>
          <Col xs="12" md = "6" >
            <Card>
              <CardHeader>
                <strong>Personal Information </strong> 
              </CardHeader>
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input"  >First Name</Label>
                    </Col>
                    <Col md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="Enter First Name" value={this.state.fname} onChange={(e) => this.setState({fname: e.target.value})}/>
                     
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Middle Name</Label>
                    </Col>
                    <Col md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="Enter Middle Name" onChange={(e) => this.setState({mname: e.target.value})} />
                     
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Last Name</Label>
                    </Col>
                    <Col md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="Enter Last Name" onChange={(e) => this.setState({lname: e.target.value})} />
                     
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="date-input">Date of Birth </Label>
                    </Col>
                    <Col md="9">
                      <Input type="date" id="date-input" name="date-input" placeholder="date" onChange={(e) => this.setState({dob: e.target.value})} />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label>Gender</Label>
                    </Col>
                    <Col md="9">
                      <FormGroup check inline>
                        <Input className="form-check-input" type="radio" id="inline-radio1" name="inline-radios" value="option1" />
                        <Label className="form-check-label" check htmlFor="inline-radio1">Female</Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input className="form-check-input" type="radio" id="inline-radio2" name="inline-radios" value="option2" />
                        <Label className="form-check-label" check htmlFor="inline-radio2">Male</Label>
                      </FormGroup>
                      
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Citizenship</Label>
                    </Col>
                    <Col md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="Enter Citizenship" onChange={(e) => this.setState({citizenship: e.target.value})}/>
                  
                    </Col>
                  </FormGroup>
                    
                    <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">House #</Label>
                    </Col>
                    <Col md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="Enter House Number"  onChange={(e) => this.setState({house_no: e.target.value})}/>
                  
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                  <Col md="3">
                      <Label>Marital Status</Label>
                    </Col>
                    <Col md="9">
                      <FormGroup check inline>
                        <Input className="form-check-input" type="radio" id="inline-radio1" name="inline-radios" value="option1" />
                        <Label className="form-check-label" check htmlFor="inline-radio1">Married</Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input className="form-check-input" type="radio" id="inline-radio2" name="inline-radios" value="option2" />
                        <Label className="form-check-label" check htmlFor="inline-radio2">Not Married</Label>
                      </FormGroup>
                      
                    </Col>

                    </FormGroup>
                  
                </Form>
                <Card>
              <CardHeader>
                <strong>Information with Local Language</strong> 
              </CardHeader>
              <CardBody>
              <Form action="" method="post" encType="multipart/form-data" className="form-horizontal" >
               
                 <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">First Name</Label>
                    </Col>
                    <Col md="9">
                      <Input type="text" id="text-input" name="text-input"  />                  
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Middle Name</Label>
                    </Col>
                    <Col md="9">
                      <Input type="text" id="text-input" name="text-input"  />
                     
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Last Name</Label>
                    </Col>
                    <Col md="9">
                      <Input type="text" id="text-input" name="text-input"  />
                     
                    </Col>
                  </FormGroup>
                  
                </Form>
              </CardBody>
              
            </Card>
          
              </CardBody>
             
            </Card>
            <Card>
              <CardHeader>
                <strong>Residence Info</strong> 
              </CardHeader>
              <CardBody>
              <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
               
                 <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Region</Label>
                    </Col>
                    <Col md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="Enter Region" onChange={(e) => this.setState({region: e.target.value})}/>
                     
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">City</Label>
                    </Col>
                    <Col md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="Enter City" onChange={(e) => this.setState({city: e.target.value})}/>
                     
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Woreda</Label>
                    </Col>
                    <Col md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="Enter Wereda" onChange={(e) => this.setState({woreda: e.target.value})}/>
                     
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">House # </Label>
                    </Col>
                    <Col md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="Enter House Number" onChange={(e) => this.setState({house_no: e.target.value})}/>
                     
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Phone # </Label>
                    </Col>
                    <Col md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="Enter House Number" onChange={(e) => this.setState({phone_number: e.target.value})}/>
                     
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
              
            </Card>
          </Col>
          <Col xs="12" md = "6" >
            
            
            <Card style = {{ "height" : "32.25%"}}>
              <CardHeader>
                <strong> Add Picture</strong> 
              </CardHeader>
              <CardBody >
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  
                <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="file-input">Select Picture</Label>

                    </Col>
                    <Col xs="12" md="9">
                    <Input type="file" id="file-input" name="file-input"  onChange={(e) => this.setState({photo_url: e.target.files[0]})}>Browse</Input>
                    </Col>
                    <row>
                   <img src = {profile} alt = "persons picture" style = {{"paddingLeft" : "50%", "paddingTop" : "5%"}} />
        
                    </row>
                  </FormGroup>
                  
                </Form>
              </CardBody>              
            </Card>
        
        <Card style = {{ "height" : "31.25%"}}>
              <CardHeader>
                <strong> Scan Finger Print</strong> 
              </CardHeader>
              <CardBody >
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  
                <FormGroup row>
                    
                    <Col xs="12" md="9">
                      <Button type="submit" size="80px" width = "20px" color="primary" onChange={(e) => this.setState({finger_print: e.target.value})}>Scan Finger Print</Button>
                    </Col>
                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    <row>
                    <img src = {fprint} alt = "persons picture" style = {{"paddingLeft" : "30%", "marginTop" : "-15%"}} />
        
                    </row>
                  </FormGroup>
                  
                </Form>
              </CardBody>              
            </Card>







            <Card style = {{ "height" : "30.2%"}}>
              <CardHeader>
                <strong>Consent Manager</strong> 
                  
              </CardHeader>
              <CardBody>
              
                Do You want to have the access to your Personal Identification account so that you can give grant to companies that want your ID??
              
                  <div style = {{"paddingTop" : "10%"}}>
                <Button color="info" disabled style = {{"width": "24%", }}>Set</Button>
                <div style = {{ "float" : "right", "margin" : "-13px", "paddingTop" : "2.5%"}}>
                      <FormGroup check inline>
                          <Input className="form-check-input" type="Checkbox" id="inline-Checkbox" name="inline-radios" defaultChecked  />
                          <Label className="form-check-label" check htmlFor="inline-Checkbox">Disabled</Label>
                        </FormGroup>
                  </div>
                </div>
                  
              
              </CardBody>
             
            </Card>
          </Col>
          
          
        </Row>
            <div  style = {{ "margin-right" : "13px"}}>
            &emsp;&emsp;&emsp;&emsp;&emsp;
                <Button type="reset" size="30px" style = {{"width": "18%" }} color="danger"><i className="fa fa-ban"></i> Reset</Button>
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;

                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                
               
                &emsp;&emsp;&emsp;&emsp;&emsp;
                
                <Button type="submit" size="80px" style = {{"width": "18%" }} color="primary" onClick = {this.addPerson}><i className="fa fa-dot-circle-o"></i> Submit</Button>
            </div>
        
        
      </div>
    );
  }
}

export default Forms;
