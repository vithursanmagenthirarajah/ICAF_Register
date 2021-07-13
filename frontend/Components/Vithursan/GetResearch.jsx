import React, { Component } from 'react'
import Button from "react-bootstrap/Button";
import axios from 'axios';
import Table from 'react-bootstrap/Table'



export default class GetResearch extends Component {

constructor(props){
super(props);
this.getAll = this.getAll.bind(this);
this.state = {
research : []
}

}



// async componentDidMount(){

//}





getAll(){
    axios.get("http://localhost:5000/api/getresearchbyid/"+id).then((res) => {
this.setState({id : response.data.id})
console.log(res.formdata);
})

return this.state.research.map((file) => {
return(

<tr key={file._id}>
<td>{file.email}</td>
<td>{file.name}</td>
<td>{file.phone}</td>
<td>{file.city}</td>
<td>{file.state}</td>
<td>{file.country}</td>
<td>{file.qualification}</td>
<td>{file.rtitle}</td>
<td>{<a href={"http://localhost:5000/" + file.filePath} target="_blank" >{file.fileName}</a>}</td>
<td><Button variant="info" href="/">Edit</Button></td>
</tr>
)
})
}



render() {
return (

<div>

<h4 style={{textAlign:"center"}}>Templates</h4>
<br></br>
<Table striped bordered hover variant="dark" >

<thead>
<tr>
<th>email</th>
<th>name</th>
<th>Phone</th>
<th>city</th>
<th>state</th>
<th>country</th>
<th>qualification</th>
</tr>

</thead>
<tbody>
{this.getAll()}
</tbody>
</Table>
</div>
)

}

}