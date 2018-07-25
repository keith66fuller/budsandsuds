import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import API from "../../utils/API";
import PubCard from "../../components/PubCard";
import DropDownMenu from "../../components/DropDownMenu";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'



const styles = theme => ({
  root: {
    flexGrow: 0
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    // display: 'none',
  },
  container: {
    display: "grid",
    // wrap: "nowrap"
    // gridTemplateColumns: "repeat(12, 1fr)",
    // gridGap: `${theme.spacing.unit * 3}px`,
    direction: "row"
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
  },
  gridList: {
    width: 500,
    height: 'auto',
  },
  subheader: {
    width: '100%',
  }
});

class Pubs extends Component {
  constructor(props) {
    super(props);
    this.classes = props;
    this.state = {
      pubs: [],
      selected: {},
      selectAll: 0,
      markers: []
    };
    this.toggleRow = this.toggleRow.bind(this);
    this.handleCardClick = this.handleCardClick.bind(this);
  }

  pubList() {
    return JSON.stringify(Object.keys(this.state.selected))
  }
  handleCardClick(_id) {
    console.log(`CARD ${_id} Has been selected.`)
  }

  goCreateCrawl() {
      const pubs = this.state.pubs.map(pub => this.state.selected[pub._id] ? pub : null )
      return 
  }
  toggleRow(_id) {
    const newSelected = Object.assign({}, this.state.selected);
    newSelected[_id] = !this.state.selected[_id];
    const markers = Object.keys(newSelected)
    .filter(k => newSelected[k] === true)
    .map(
      k => {
        const pub = this.state.pubs.find(
          e => {
            return e._id === k
          }
        )
        return pub ? pub : null
      }
    )

    this.setState({
      selectAll: 2,
      selected: newSelected,
      markers: markers,
      selectedPub: markers[0]
    });

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
    const { classes } = this.props;

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
        Header: "Rating",
        accessor: "rating",
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

    return (
    <Grid container xs={12}>
      <Grid item xs={6} styles={styles.item}>
        <ReactTable
          data={this.state.pubs}
          columns={columns}
          // When any part of a row is clicked.
          getTdProps={(state, rowInfo, column, instance) => {
            return {
              onClick: (e, handleOriginal) => {
                this.toggleRow(rowInfo.original._id);
                if (handleOriginal) {
                  handleOriginal();
                }
              }
            };
          }}
        />
      </Grid>
      <Grid item xs={6} styles={styles.item}>
        <GridList cellHeight={160} className={classes.gridList} cols={3}>
            {this.state.pubs.map(pub => (
                this.state.selected[pub._id] ? (
            <GridListTile key={pub._id} cols={1}>
                <img src={pub.image_url} alt={pub.name} />
                <GridListTileBar
                    title={pub.name}
                    subtitle={<span>Rating {pub.rating}</span>}
                />
            </GridListTile>
                ) : null 
            ))}
        </GridList>
        {Object.keys(this.state.selected).length ? 
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={this.goCreateCrawl()}
            >
              <Link to={'/Crawls?'+this.pubList()}>New Crawl</Link>
            </Button>
            : null }
    </Grid>
  </Grid>
      );
  }
}

export default withStyles(styles)(Pubs);
