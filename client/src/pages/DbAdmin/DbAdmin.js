import React, { Component } from "react";
import { List, ListItem } from "../../components/List";
import ReactTable from "react-table";
import 'react-table/react-table.css';
import API from "../../utils/API";

class DbAdmin extends Component {
  state = {
    pubs: [],
    hasError: false
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    console.log(error, info);
  }

  componentDidMount() {
    this.loadPubs();
  }

  // Loads all Pubs  and sets them to this.state.Pubs
  loadPubs = () => {
    API.getpubs()
      .then(res => {
        this.setState({
          pubs: res.data
        });
      })
      .catch(err => console.log(err));
  };


  render() {

    const columns = [
      {
        Header: 'Pub',
        accessor: 'name'
      }, {
        Header: 'Categories',
        id: 'categories',
        accessor: d => d.categories.map(e => e.alias).sort().join(" "),
        filterable: true
      }
    ]

    return (
      <ReactTable
        data={this.state.pubs}
        columns={columns}
      />
    );
  }
}

export default DbAdmin;
