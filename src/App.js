import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'
import axios from 'axios';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dataApi: [],
      dataPost: {
        id: 0,
        name: '',
        username: '',
        email: '',
        address: [],
        phone: '',
        company: []
      },
      edit: false
    }

    this.getData = this.getData.bind(this);

  }

  getData() {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        this.setState({
          dataApi: res.data,
          edit: false
        })
      })
  }

  componentDidMount() {
    this.getData()
  }

  render() {
    return (
      <div>
        <Table striped bordered hover >
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Street</th>
              <th>Suite</th>
              <th>City</th>
              <th>Zip Code</th>
              <th>Lattitude</th>
              <th>Lng</th>
              <th>Phone</th>
              <th>Company Name</th>
              <th>catchPhrase</th>
              <th>BS</th>
            </tr>
          </thead>
          {this.state.dataApi.map((data, index) => {
            return (
              <tbody key={index}>
                <tr>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.username}</td>
                  <td>{data.email}</td>
                  <td>{data.address.street}</td>
                  <td>{data.address.suite}</td>
                  <td>{data.address.zipcode}</td>
                  <td>{data.address.city}</td>
                  <td>{data.address.geo.lat}</td>
                  <td>{data.address.geo.lng}</td>
                  <td>{data.phone}</td>
                  <td>{data.company.name}</td>
                  <td>{data.company.catchPhrase}</td>
                  <td>{data.company.bs}</td>
                </tr>
              </tbody>
            )
          })}
        </Table>
      </div>
    )

  }
}

export default App;