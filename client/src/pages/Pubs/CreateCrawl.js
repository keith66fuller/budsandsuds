import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

const TextFieldMargins = props => {
  const { classes } = props;

  return (
    <div className={classes.container}>
     <TextField
        label="Crawl Name"
        id="margin-normal"
        // defaultValue="Default Value"
        className={classes.textField}
        // helperText="Some important text"
        margin="normal"
        onChange={(event) => props.onChange(event)}
      />
    </div>
  );
};

TextFieldMargins.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFieldMargins);
