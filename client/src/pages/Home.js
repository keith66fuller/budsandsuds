import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Search from '../components/Search'
import Results from '../components/Results'
import Divider from '@material-ui/core/Divider';

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
        results: []
      };

      this.passResults = this.passResults.bind(this);
  }

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };

  passResults = results => {
    this.setState({results: results})
  }

  render() {
    const { classes } = this.props;
    // const { spacing } = this.state;

    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
        <Search passResults={this.passResults}/>
        <Divider absolute={true}/>        
        </Grid>
        <Grid item xs={12}>
        <Results searchResults={this.state.results}/>
        </Grid>
        <Grid item xs={12}>
        </Grid>
      </Grid>
    );
  }
}

GuttersGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GuttersGrid);
