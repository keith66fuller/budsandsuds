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

class Saved extends React.Component {
  constructor (props) {
    super(props)
    console.log(`PROPS: ${JSON.stringify(props)}`)
  }

  componentDidMount() {
      console.log(JSON.stringify(this.props.savedArticles))
      this.setState({savedArticles: this.props.savedArticles})
  }


  render() {
    const { classes } = this.props;
    if (!this.state) return (null)
    return (
        <List  dense={true} className={classes.container} subheader={<ListSubheader><h4>Saved</h4></ListSubheader>}>
          {this.state.savedArticles.map(article => {
            return (
              <ListItem alignitems="left" key={article._id}>
              <ListItemText primary={article.title} />
              <ListItemSecondaryAction>
              <Button variant="contained" key={article._id} size="small" className={classes.button} onClick={() => this.props.deleteArticle(article._id)}>
                <DeleteIcon className={classNames(classes.leftIcon, classes.iconSmall)} />
                Delete
            </Button>
            </ListItemSecondaryAction>
            </ListItem>
            )
          })}
        </List>
    );
  }
}

Saved.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Saved);
