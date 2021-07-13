import React, { Component } from 'react'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table'
export default class RegisterHome extends Component {
    render() {
        return (
            <div>
            <Table>
            <tr>
            <td>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>Upload Research paper</Card.Title>
              <Card.Text>
                You can upload your research paper here
              </Card.Text>
              <Link to="/research"><Button variant="primary">Click</Button></Link>
            </Card.Body>
          </Card>
            </td>
            <td>
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>Upload Workshop Details</Card.Title>
            <Card.Text>
            You can upload your workshop details here
            </Card.Text>
            <Link to="/workshop"><Button variant="primary">Click</Button> </Link>
          </Card.Body>
        </Card>
        </td>
        </tr>
        </Table>
            </div>
        )
    }
}
