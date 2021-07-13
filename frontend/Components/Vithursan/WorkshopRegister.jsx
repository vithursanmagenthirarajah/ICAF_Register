

import React, { Component } from"react";
import axios from"axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
class WorkshopRegister extends Component {
    constructor(props) {
    super(props);

    this.onChangeEmail =this.onChangeEmail.bind(this);
    this.onChangeName =this.onChangeName.bind(this);
    this.onChangePhoneno =this.onChangePhoneno.bind(this);
    this.onChangeCity =this.onChangeCity.bind(this);
    this.onChangeState =this.onChangeState.bind(this);
    this.onChangeCountry =this.onChangeCountry.bind(this);
    this.onChangeQualification =this.onChangeQualification.bind(this);
    this.onFileChange = this.onFileChange.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onFileUpload = this.onFileUpload.bind(this);
     }

     state = {
      email:"",
      name:"",
      phoneno:"",
      city:"",
      state:"",
      country:"",
      qualification:"",
      wtitle: "",
      selectedFile: null,

     };

     onChangeEmail(e) {
      this.setState({
        email: e.target.value,
      });
    }

    onChangeName(e) {
      this.setState({
        name: e.target.value,
      });
    }

    onChangePhoneno(e) {
      this.setState({
        phoneno: e.target.value,
      });
    }

    onChangeCity(e) {
      this.setState({
        city: e.target.value,
      });
    }

    onChangeState(e) {
      this.setState({
        state: e.target.value,
      });
    }

    onChangeCountry(e) {
      this.setState({
        country: e.target.value,
      });
    }

    onChangeQualification(e) {
      this.setState({
        qualification: e.target.value,
      });
    }

    onTitleChange(e) {
      this.setState({
      wtitle:e.target.value,
      })
     };


    // On file select (from the pop up)
     onFileChange = (event) => {
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
     };


    // On file upload (click the upload button)
     onFileUpload = () => {
        const formdata = new FormData();
          formdata.append("email", this.state.email);
          formdata.append("name", this.state.name);
          formdata.append("phone", this.state.phoneno);
          formdata.append("city", this.state.city);
          formdata.append("state", this.state.state);
          formdata.append("country", this.state.country);
          formdata.append("qualification", this.state.qualification);
          formdata.append("file", this.state.selectedFile);
          formdata.append("wtitle", this.state.wtitle);
          console.log(this.state.selectedFile);
     axios
     .post("http://localhost:5000/api/workshop", formdata)
     .then((res) => console.log(res));

     alert("Workshop details added successfully");
     };
     
     render() {
    return (
    <div>
    <h1  style={{ textAlign: "center", color: "#3e3e3e"}}>Workshop Submission</h1>
     <div  style={{  border: "10px", padding: "30px 30px",margin: "0 auto",display: "flexbox",width:"1100px"}}> 
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  onChange={this.onChangeEmail} value={this.state.email}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" onChange={this.onChangeName} value={this.state.name}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="number" placeholder="Enter  phone No" onChange={this.onChangePhoneno} value={this.state.phoneno}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="City" onChange={this.onChangeCity} value={this.state.city}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>State</Form.Label>
        <Form.Control type="text" placeholder="State" onChange={this.onChangeState} value={this.state.state}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Country</Form.Label>
        <Form.Control type="text" placeholder="Country" onChange={this.onChangeCountry} value={this.state.country}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Qualification</Form.Label>
        <Form.Control type="text" placeholder="Qualification" onChange={this.onChangeQualification} value={this.state.qualification}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter title"  onChange={this.onTitleChange} value={this.state.wtitle}/>
    </Form.Group>

    <Form.Group controlId="formFileMultiple" className="mb-3">
      <Form.Label>Workshop Detail</Form.Label>
      <Form.Control type="file" multiple onChange={this.onFileChange}/>
    </Form.Group>

    <Button  variant="success" size="lg" onClick={this.onFileUpload}>Upload workshop Details</Button>
    </div>
    </div>
     );
     }
    }
    export default WorkshopRegister;