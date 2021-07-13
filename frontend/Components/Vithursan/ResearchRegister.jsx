

import React, { Component } from"react";
import axios from"axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
class ResearchRegister extends Component {
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

    this.state = {
    // Initially, no file is selected
        email:"",
        name:"",
        phoneno:"",
        city:"",
        state:"",
        country:"",
        qualification:"",
        rtitle: "",
        selectedFile: null,
     }
     }

    

     onChangeEmail(e) {
        this.setState({
          email: e.target.value,
        })
      };

      onChangeName(e) {
        this.setState({
          name: e.target.value,
        })
      }

      onChangePhoneno(e) {
        this.setState({
          phoneno: e.target.value,
        })
      }

      onChangeCity(e) {
        this.setState({
          city: e.target.value,
        })
      }

      onChangeState(e) {
        this.setState({
          state: e.target.value,
        })
      }

      onChangeCountry(e) {
        this.setState({
          country: e.target.value,
        })
      }

      onChangeQualification(e) {
        this.setState({
          qualification: e.target.value,
        })
      }


      onTitleChange(e) {
        this.setState({
            rtitle:e.target.value,
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

       
       
        formdata.append("file", this.state.selectedFile);
        formdata.append("rtitle", this.state.rtitle);
        formdata.append("email", this.state.email);
        formdata.append("name", this.state.name);
        formdata.append("phone", this.state.phoneno);
        formdata.append("city", this.state.city);
        formdata.append("state", this.state.state);
        formdata.append("country", this.state.country);
        formdata.append("qualification", this.state.qualification);
      
        console.log(this.state.selectedFile);
        axios
            .post("http://localhost:5000/api/singleFile", formdata)
            .then((res) => console.log(res));
           // window.location = '/get/'+ this.props.match.params.id;


            alert("Researcher details added successfully");
            };
     

     render() {
    return (
    <div>
    <h1 style={{ textAlign: "center", color: "#3e3e3e"}}>Research Submission</h1>

    <div style={{  border: "10px", padding: "30px 30px",margin: "0 auto",display: "flexbox",width:"1100px"}}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" required placeholder="Enter email"  onChange={this.onChangeEmail} value={this.state.email}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" required placeholder="Enter name" onChange={this.onChangeName} value={this.state.name}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="text" required placeholder="Enter  phone No" onChange={this.onChangePhoneno} value={this.state.phoneno}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>City</Form.Label>
        <Form.Control type="text"  placeholder="City" onChange={this.onChangeCity} value={this.state.city}/>
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
        <Form.Control type="text" placeholder="Enter title"  onChange={this.onTitleChange} value={this.state.rtitle}/>
    </Form.Group>
    
    
   
    <Form.Group controlId="formFileMultiple" className="mb-3">
      <Form.Label>Workshop Detail</Form.Label>
      <Form.Control type="file" multiple onChange={this.onFileChange}/>
    </Form.Group>


  <Button   variant="success" size="lg" onClick={this.onFileUpload}>Upload Research paper</Button> 
    </div>
    

  



    </div>
     );
     }
    }
    export default ResearchRegister;
// class DashBoard extends Component {
//   state = {
// // Initially, no file is selected
//     rtitle: null,
//     file: null,
//   };
// // On file select (from the pop up)
//   onFileChange = (event) => {
// // Update the state
// this.setState({ rtitle: event.target.value });
// this.setState({ file: event.target.files[0] });
//   };
// // On file upload (click the upload button)
//   onFileUpload = () => {
// // Create an object of formData
// const formData = new FormData();
// // Update the formData object
//     formData.append(
// "file",
// this.state.file,
// this.state.file.name
//     );
// // Details of the uploaded file
//     console.log(this.state.file);
// // Request made to the backend api
// // Send formData object
//     axios.post("http:localhost:5000/api/singleFile", formData);
//   };
// // File content to be displayed after
// // file upload is complete
//   fileData = () => {
// if (this.state.file) {
// return (
// <div>
// <h2>File Details:</h2>
// <p>File Name: {this.state.selectedFile.name}</p>
// <p>File Type: {this.state.selectedFile.type}</p>
// <p>
//             Last Modified:{" "}
// {this.state.selectedFile.lastModifiedDate.toDateString()}
// </p>
// </div>
//       );
//     } else {
// return (
// <div>
// <br/>
// <h4>Choose before Pressing the Upload button</h4>
// </div>
//       );
//     }
//   };


//   render() {
//     return (
//     <div>
//     <h1>GeeksforGeeks</h1>
//     <h3>File Upload using React!</h3>
//     <div>
//     <input type="file"onChange={this.onFileChange}/>
//     <Button onClick={this.onFileUpload}>Upload!</Button>
//     </div>
//     {this.fileData()}
//     </div>
//         );
//       }
//     }

//     export default DashBoard