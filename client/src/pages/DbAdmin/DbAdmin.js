import React, { Component } from "react";
import ReactTable from "react-table";
import 'react-table/react-table.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";

class DbAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pubs: [],
      selected: {},
      selectAll: 0
    }
    this.toggleRow = this.toggleRow.bind(this);
  }
  toggleRow(_id) {
    const newSelected = Object.assign({}, this.state.selected);
    newSelected[_id] = !this.state.selected[_id];
    this.setState({
      selectAll: 2,
      selected: newSelected
    });

    console.log(Object.keys(this.state.selected))
    
  }
  toggleSelectAll() {
    let newSelected = {};
    if (this.state.selectAll === 0) {
      this.state.pubs.forEach(x => {
        newSelected[x._id] = true;
      });
    }
    this.setState({
      selected: newSelected,
      selectAll: this.state.selectAll === 0 ? 1 : 0
    });
  }
  componentDidMount() {
    this.loadPubs();
  }

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
        accessor: 'name',
        Cell: row => (
          <div style={{ backgroundColor: this.state.selected[row.original._id] ? "#dadada" : "" }}>
            {row.value}
          </div>
        )
      }, {
        Header: 'Categories',
        id: 'categories',
        accessor: d => d.categories.map(e => e.alias).sort().join(" "),
        filterable: true,
        Cell: row => (
          <div style={{ backgroundColor: this.state.selected[row.original._id] ? "#dadada" : "" }}>
            {row.value}
          </div>
        )
      }
    ]

    return (
        <Grid container spacing={24}>
          <Grid item xs>
            <Paper>
              <ReactTable
                data={this.state.pubs}
                columns={columns}
                // When any part of a row is clicked.
                getTdProps={(state, rowInfo, column, instance) => {
                  return {
                    onClick: (e, handleOriginal) => {
                      console.log("A Td Element was clicked!");
                      // console.log("it produced this event:", e);
                      // console.log("It was in this column:", column);
                      // console.log("It was in this row:", rowInfo);
                      // console.log("It was in this table instance:", instance);
                      console.log(`DB instance _id: ${rowInfo.original._id}`)
                      this.toggleRow(rowInfo.original._id)
                      // IMPORTANT! React-Table uses onClick internally to trigger
                      // events like expanding SubComponents and pivots.
                      // By default a custom 'onClick' handler will override this functionality.
                      // If you want to fire the original onClick handler, call the
                      // 'handleOriginal' function.
                      if (handleOriginal) {
                        handleOriginal();
                      }
                    }
                  };
                }}
              />
            </Paper>
          </Grid>
          {Object.keys(this.state.selected).find(e => this.state.selected[e] === true) ? (
            <Grid item xs>
            <Paper>
            <List>
              {Object.keys(this.state.selected).map(
                function(k) {
                  const pub = this.state.pubs.find(
                    e => { return e._id === k }
                  )
                  
                  return (this.state.selected[k] === true) && pub ? (
                    <ListItem key={pub._id}>
                      <strong>
                        {pub.name}
                      </strong>
                  </ListItem>
                  ) : null
                }
              )}
              </List>
            </Paper>
          </Grid>
          ) : null}
        </Grid>
    );
  }
}

export default DbAdmin;

