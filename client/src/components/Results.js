import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import classNames from 'classnames';




const styles = theme => ({
  container: {
    alignItems: 'center',
    textalign: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column'
  },
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

class SwitchListSecondary extends React.Component {
  constructor (props) {
    super(props)
      this.state = {
        checked: [],
        results: props.results
      };
  }

  handleIconClick = value => () => {
    console.log(`VALUE: ${JSON.stringify(value)}`)
  };

  render() {
    const { classes } = this.props;

    return (
        <List  dense={true} className={classes.container} subheader={<ListSubheader><h4>Results</h4></ListSubheader>}>
          {this.props.searchResults.map(article => {
            return (
              <ListItem textalign="left" key={article._id}>
              <ListItemText primary={article.headline.main} />
              <ListItemSecondaryAction>
              <Button variant="contained" size="small" className={classes.button} onChange={event => this.handleIconClick(event)}>
                <SaveIcon className={classNames(classes.leftIcon, classes.iconSmall)} />
                Save
            </Button>
            </ListItemSecondaryAction>
            </ListItem>
            )
          })}
        </List>
    );
  }
}

SwitchListSecondary.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SwitchListSecondary);
