import React, { Component } from "react";
import PropTypes from 'prop-types';
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
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import CreateCrawl from "./CreateCrawl"

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 1;
  const left = 1;

  return {
    // top: `${top}%`,
    // left: `${left}%`,
    position: 'relative',
    width: 200,
    height: 100,

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',


    // transform: `translate(-${top}%, -${left}%)`,
  };
}


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

const modalStyles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});
class Pubs extends Component {
  constructor(props) {
    super(props);
    this.classes = props;
    this.state = {
      pubs: [],
      selected: {},
      selectAll: 0,
      markers: [],
      modalOpen: false,
      newCrawlName: '',
    };
    this.toggleRow = this.toggleRow.bind(this);
    this.handleCardClick = this.handleCardClick.bind(this);
    this.handleModalOpen = this.handleModalOpen.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
    this.crawlInput = this.crawlInput.bind(this);
  }

  crawlInput = (e) => {
    this.setState({
      newCrawlName: e.target.value
  });
  }
  handleModalOpen = (e) => {
    e.preventDefault();
    this.setState({ modalOpen: true });
  };

  handleModalClose = (e) => {
    e.preventDefault();
    this.setState({ modalOpen: false });
    API.savecrawl({
      name: this.state.newCrawlName,
      pubs: Object.keys(this.state.selected)
    })
    .then(res => {
      console.log(`Crawl Saved: ${res.data}`)
    })
    .catch(err => console.log(err));
  };
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
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
        {
          Object.keys(this.state.selected).length ?
            <div> 
              <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  onClick={(event) => this.handleModalOpen(event)}
              >
                {/* <Link to={'/Crawls?'+this.pubList()}>New Crawl</Link> */}
                New Crawl
              </Button>
              <Modal
                ariaHideApp={false}
                isOpen={this.state.modalOpen}
                // onAfterOpen={this.afterOpenModal}
                onRequestClose={(event) => this.handleModalClose(event)}
                style={customStyles}
                contentLabel="Example Modal"
              >
              <h2 ref={subtitle => this.subtitle = subtitle}>Create New Crawl</h2>
              # of Pubs {Object.keys(this.state.selected).length}
              <br/>
              <CreateCrawl onChange={this.crawlInput}/>
              <button onClick={this.handleModalClose}>Create</button>
               </Modal>
               </div>
              : null
        }

     

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
    </Grid>
  </Grid>
      );
  }
}

Pubs.propTypes = {
  classes: PropTypes.object.isRequired,
};

// // We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(Pubs);

export default withStyles(styles)(Pubs);
