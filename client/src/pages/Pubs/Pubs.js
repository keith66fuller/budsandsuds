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
    flexGrow: 0
  },
  container: {
    display: "grid"
    // wrap: "nowrap"
    // gridTemplateColumns: "repeat(12, 1fr)",
    // gridGap: `${theme.spacing.unit * 3}px`,
    // direction: "column"
  },
  outerContainer: {
    direction: "row",
    height: "90%"
  },
  rightContainer: {
    // direction: "column"
  },
  item: {
    width: "50%"
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
    const propTypes = {
      classes: PropTypes.object.isRequired
    };
    this.state = {
      pubs: [],
      selected: {},
      selectAll: 0,
      markers: []
    };
    this.toggleRow = this.toggleRow.bind(this);
  }
  toggleRow(_id) {
    const newSelected = Object.assign({}, this.state.selected);
    newSelected[_id] = !this.state.selected[_id];
    const markers = Object.keys(newSelected).map(
      k => {
        if (newSelected[k] === true) {
          const pub = this.state.pubs.find(
            e => {
              return e._id === k
            }
          )
          return (pub)
        }

      }
    )
    this.setState({
      selectAll: 2,
      selected: newSelected,
      markers: markers
    });

    if (this.markers) { console.log(`MARKERS: ${JSON.stringify(this.markers,null,2)}`)}
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
      <Grid container styles={styles.outerContainer} spacing={24}>
        <Grid item xs={6} styles={styles.item}>
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
        </Grid>
        <Grid item xs={6}>
          <Maps markers={this.state.markers}/>
        </Grid>
      </Grid>
      );
  }
}

export default withStyles(styles)(Pubs);
