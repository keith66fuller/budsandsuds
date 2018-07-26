import React, { Component } from "react";
import API from "../../utils/API";
import PubsOption from "./PubsOption";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
// import {DatePickers, TimePickers, DateAndTimePickers} from '@material-ui';
// import DatePicker from 'material-ui/DatePicker';
// import DatePicker from 'material-ui/DatePicker';
// import TimePicker from '@material-ui/core/TimePicker';
import TextField from '@material-ui/core/TextField';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

class NewCrawl extends Component {

  state = {
    pubs: [],
    buds: [],
    pubSelect: [],
    crawlName: "",
    crawlDate: "",
    crawlTime: "",
    crawlBuds: "",
    crawlPubs: ""
  };

  componentDidMount() {
    this.loadPubs();
  }

  handleChange = event => {
    this.setState({ pubSelect: event.target.value });
  };


  loadPubs = () => {
    API.getpubs()
      .then(res => this.setState({
        pubs: res.data.map(x => {
          var obj = {};
          obj.name = x.name;
          obj.coordinates = x.coordinates;
          obj.id = x._id;
          return obj;
        })
      }))
      .catch(err => console.log(err));

  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    console.log(event.target);
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // this.setState({
    //   crawlDate: document.getElementById("crawl_date").value
    // });
    // this.state.crawlDate = document.getElementById("crawl_date").val();
    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    alert(`Name: ${this.state.crawlName} Date: ${this.state.crawlDate} Time: ${this.state.crawlTime}`);
    console.log("date " + this.state.crawlDate);
    this.setState({
      crawlName: "",
      crawlDate: "",
      crawlTime: ""
    });
  };

  render() {
    return (

      <div class="container">
        <div class="row valign-wrapper">
          <div class="col s6 offset-s3 valign">
            <div className="card teal darken-1">
              <div className="card-content blue-text">
                <span className="card-title center-align">Create a Crawl</span>
                <div className="card-action">
                  <div className="row">
                    <div className="input-field col s12">
                      <input
                        id="crawl_name"
                        type="text"
                        className="validate"
                        name="crawlName"
                        value={this.state.crawlName}
                        onChange={this.handleInputChange}
                      />
                      <label className="active" for="crawl_name">Name</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <TextField
                        id="crawl_date"
                        label="Date"
                        type="date"
                        // defaultValue="2017-05-24"
                        name="crawlDate"
                        onChange={this.handleInputChange}
                        // className={classes.textField}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <TextField
                        id="crawl_date"
                        label="Time"
                        type="time"
                        // defaultValue="2017-05-24"
                        name="crawlTime"
                        onChange={this.handleInputChange}
                        // className={classes.textField}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <select multiple>
                        <option value="" disabled selected>Choose your option</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                      </select>
                      <label>Buds</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <Select
                        multiple
                        value={this.state.pubSelect}
                        onChange={this.handleChange}
                        input={<Input id="select-multiple-checkbox" />}
                        renderValue={selected => selected.join(', ')}
                        MenuProps={MenuProps}
                      >
                        {this.state.pubs.map(x => (
                          <MenuItem key={x.id} value={x.name}>
                            <Checkbox checked={this.state.pubSelect.indexOf(x.name) > -1} />
                            <ListItemText primary={x.name} />
                          </MenuItem>
                        ))}
                      </Select>
                      {/* <select multiple>
                      
                        <option value="" disabled selected>Choose your option</option>
                        {this.state.pubs.map(x => (<PubsOption id={x.id} name={x.name} />))}
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                      </select> */}
                      <label>Pubs</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12 center-align">
                      <a className="waves-effect waves-light btn" onClick={this.handleFormSubmit}>Submit</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default NewCrawl;