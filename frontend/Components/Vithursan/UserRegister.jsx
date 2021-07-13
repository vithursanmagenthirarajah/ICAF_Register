// import React, { Component } from 'react'
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import axios from 'axios'; 
// export default class UserRegister extends Component {

//     constructor (props){
//         super(props);

//         this.onChangeEmail =this.onChangeEmail.bind(this);
//         this.onChangeName =this.onChangeName.bind(this);
//         this.onChangePhoneno =this.onChangePhoneno.bind(this);
//         this.onChangeCity =this.onChangeCity.bind(this);
//         this.onChangeState =this.onChangeState.bind(this);
//         this.onChangeCountry =this.onChangeCountry.bind(this);
//         this.onChangeQualification =this.onChangeQualification.bind(this);

//         this.onSubmit=this.onSubmit.bind(this);

//         this.state={
//             email:"",
//             name:"",
//             phoneno:"",
//             city:"",
//             state:"",
//             country:"",
//             qualification:"",
//          };
//     }

//     onChangeEmail(e) {
//         this.setState({
//           email: e.target.value,
//         });
//       }

//       onChangeName(e) {
//         this.setState({
//           name: e.target.value,
//         });
//       }

//       onChangePhoneno(e) {
//         this.setState({
//           phoneno: e.target.value,
//         });
//       }

//       onChangeCity(e) {
//         this.setState({
//           city: e.target.value,
//         });
//       }

//       onChangeState(e) {
//         this.setState({
//           state: e.target.value,
//         });
//       }

//       onChangeCountry(e) {
//         this.setState({
//           country: e.target.value,
//         });
//       }

//       onChangeQualification(e) {
//         this.setState({
//           qualification: e.target.value,
//         });
//       }

//       onSubmit(e) {
//         e.preventDefault();
    
//         const UserDetails = {
//           email: this.state.email,
//           name: this.state.name,
//           phoneno: this.state.phoneno,
//           city: this.state.city,
//           state: this.state.state,
//           country: this.state.country,
//           qualification: this.state.qualification,

//         };


//         axios
//       .post("http://localhost:5000/api/user/add",UserDetails )
//       .then((res) => {
//         console.log(res.data);
//       });

//     this.setState({
//         email:"",
//         name:"",
//         phoneno:"",
//         city:"",
//         state:"",
//         country:"",
//         qualification:"",
//     });


//     }


//     render() {
//         return (
//             <div>
//             <Form  onSubmit={this.onSubmit}>
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//                <Form.Label>Email address</Form.Label>
//                <Form.Control type="email" placeholder="Enter email"  onChange={this.onChangeEmail} value={this.state.email}/>
//            </Form.Group>

//            <Form.Group className="mb-3" controlId="formBasicEmail">
//                <Form.Label>Name</Form.Label>
//                <Form.Control type="text" placeholder="Enter name" onChange={this.onChangeName} value={this.state.name}/>
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicEmail">
//                <Form.Label>Phone Number</Form.Label>
//                 <Form.Control type="number" placeholder="Enter  phone No" onChange={this.onChangePhoneno} value={this.state.phoneno}/>
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicEmail">
//                <Form.Label>City</Form.Label>
//                <Form.Control type="text" placeholder="City" onChange={this.onChangeCity} value={this.state.city}/>
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicEmail">
//                <Form.Label>State</Form.Label>
//                <Form.Control type="text" placeholder="State" onChange={this.onChangeState} value={this.state.state}/>
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicEmail">
//                <Form.Label>Country</Form.Label>
//                <Form.Control type="text" placeholder="Country" onChange={this.onChangeCountry} value={this.state.country}/>
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicEmail">
//                <Form.Label>Qualification</Form.Label>
//                <Form.Control type="text" placeholder="Qualification" onChange={this.onChangeQualification} value={this.state.qualification}/>
//             </Form.Group>

 
//  <Button variant="primary" type="submit">
//    Submit
//  </Button>
// </Form>
//             </div>
//         )
//     }
// }
