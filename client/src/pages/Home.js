import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Search from '../components/Search'
import Results from '../components/Results'
import Saved from '../components/Saved'
import Divider from '@material-ui/core/Divider';
import API from "../utils/API"

const styles = theme => ({
  root: {
    flexGrow: 1,
    direction: 'column',
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class GuttersGrid extends React.Component {
  constructor (props) {
    super(props)
      this.state = {
        checked: [],
        results: [],
      };

      this.passResults = this.passResults.bind(this);
      this.saveArticle = this.saveArticle.bind(this);
      this.deleteArticle = this.deleteArticle.bind(this);
  }

  saveArticle = idx => {
    // console.log(`SAVING: ${JSON.stringify(this.state.results[idx],null,2)}`)
    API.savearticle(this.state.results[idx])
  };

  deleteArticle = _id => {
    API.deletearticle(_id)
    .then(() => {
      this.state.savedArticles.forEach(article => {
        console.log(`ARTICLE: ${JSON.stringify(article,null,2)}`);
        const s = this.state.savedArticles.map(e => e._id == _id );
        this.setState({savedArticles: s});
      });
    })
  };

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };

  passResults = results => {
    this.setState({results: results})
  }

  getsaved = () => {
    API.getarticles()
    .then(articles => {
      // console.log(`SAVED: ${JSON.stringify(articles,null,2)}`)
      if (articles.data.length) this.setState({savedArticles: articles.data})
      console.log(`DONE SAVED: ${JSON.stringify(this.state.savedArticles,null,2)}`)
    })
  }

  componentDidMount() {
    this.getsaved();
  }
  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
        <Search passResults={this.passResults}/>
        <Divider absolute={true}/>
        </Grid>
        <Grid item xs={12}>
        <Results searchResults={this.state.results} saveArticle={this.saveArticle}/>
        </Grid>
        {this.state.savedArticles ?
        <Grid item xs={12}>
        <Saved savedArticles={this.state.savedArticles} deleteArticle={this.deleteArticle}/>
        </Grid>
        : null }
      </Grid>
    );
  }
}

GuttersGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GuttersGrid);
