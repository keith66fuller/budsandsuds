import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import DropDownMenu from '../DropDownMenu';

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  selectOpen: {
    color: red[500],
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class PubCard extends React.Component {

  state = {
    selected: false,
  };

  constructor(props) {
    super(props);
    console.log(`PROPS: ${JSON.stringify(props,null,2)}`)
  }

  handleSelectClick = (e,_id) => {
    e.preventDefault();
    this.setState(state => ({ selected: !state.selected }));
    this.props.handleSelect(_id);
  };


  render() {
    const { classes, pub } = this.props;
    if (pub == null) return null;
    console.log(`PUB: ${JSON.stringify(pub,null,2)}`)


    return (
      <div>
        <Card className={classes.card}>
          <CardHeader
            title={pub.name}
            subheader={pub.address1}
          />
          <CardMedia
            className={classes.media}
            image={pub.image_url}
          />
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton
              className={classnames(classes.expand, {
                  [classes.selectOpen]: this.state.selected,
                })}
                onClick= {(event) => this.handleSelectClick(event,pub._id)}
                aria-label="Add to Pub List">
              <FavoriteIcon />
            </IconButton>
          </CardActions>
        </Card>
      </div>
    );
  }
}

PubCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PubCard);
