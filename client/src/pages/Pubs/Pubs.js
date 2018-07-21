import React, { Component } from "react";
import PropTypes from "prop-types";
import Maps from "../../components/Maps";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  container: {
    display: "grid",
    wrap: "nowrap"
    // gridTemplateColumns: "repeat(12, 1fr)",
    // gridGap: `${theme.spacing.unit * 3}px`,
    // direction: "column"
  },
  outerContainer: {
    direction: "row"
  },
  rightContainer: {
    direction: "column"
  },
  item: {
    width: "100%"
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing.unit,
    height: "100%"
  },
  divider: {
    margin: `${theme.spacing.unit * 2}px 0`
  }
});

class Pubs extends Component {
  constructor(props) {
    super(props);
    this.classes = props;
    this.propTypes = {
      classes: PropTypes.object.isRequired
    };
    this.state = {
      pubs: [],
      selected: {},
      selectAll: 0
    };
    this.toggleRow = this.toggleRow.bind(this);
  }
  toggleRow(_id) {
    const newSelected = Object.assign({}, this.state.selected);
    newSelected[_id] = !this.state.selected[_id];
    this.setState({
      selectAll: 2,
      selected: newSelected
    });

    console.log(Object.keys(this.state.selected));
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
        Header: "Pub",
        accessor: "name",
        Cell: row => (
          <div
            style={{
              backgroundColor: this.state.selected[row.original._id]
                ? "#dadada"
                : ""
            }}
          >
            {row.value}
          </div>
        )
      },
      {
        Header: "Categories",
        id: "categories",
        accessor: d =>
          d.categories
            .map(e => e.alias)
            .sort()
            .join(" "),
        filterable: true,
        Cell: row => (
          <div
            style={{
              backgroundColor: this.state.selected[row.original._id]
                ? "#dadada"
                : ""
            }}
          >
            {row.value}
          </div>
        )
      }
    ];

    const columnsSel = [
      {
        Header: "Pub",
        accessor: "name"
      },
      {
        Header: "Categories",
        accessor: "categories"
      }
    ];

    const pubsSelected = Object.keys(this.state.selected).find(
      e => this.state.selected[e] === true
    );

    const classes = this.classes;

    return (
      <Grid container outerContainer>

        <Grid item>

          <Grid container>

            <Grid item>
              <Paper className={classes.paper}>
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
                        console.log(`DB instance _id: ${rowInfo.original._id}`);
                        this.toggleRow(rowInfo.original._id);
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

          </Grid>

        </Grid>

        <Grid item>
          <Grid container rightContainer>
            <Grid item>
              <Paper>
                <List>
                  {pubsSelected ? (
                    Object.keys(this.state.selected).map(k => {
                      if (this.state.selected[k] === true) {
                        const pub = this.state.pubs.find(e => {
                          return e._id === k;
                        });
                        return (
                          <ListItem key={pub._id}>
                            <strong>{pub.name}</strong>
                          </ListItem>
                        );
                      }
                    })
                  ) : (
                    <ListItem key={0}>
                      <strong>No Pubs Selected</strong>
                    </ListItem>
                  )}
                </List>
              </Paper>
            </Grid>

            <Grid item>
              <Maps />
            </Grid>

          </Grid>
        </Grid>
      </Grid>

      // <Grid columnContainer spacing={24}>
      //   <Grid container spacing={12}>
      //     <Grid item xs={12}>
      //       <Paper className={classes.paper}>
      //         PUBS
      //       </Paper>
      //     </Grid>
      //   </Grid>
      //   <Grid container spacing={12}>
      //     <Grid item xs={6}>
      //       <Paper>
      //         SELECTED
      //       </Paper>
      //     </Grid>

      //     <Grid item xs={6}>
      //       <Paper>
      //         MAP
      //       </Paper>
      //     </Grid>
      //   </Grid>
      // </Grid>
    );
  }
}

export default withStyles(styles)(Pubs);
