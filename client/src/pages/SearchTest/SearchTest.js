import React, { Component } from "react";
import { List, ListItem } from "../../components/List";
import API from "../../utils/API";

class SearchTest extends Component {


  componentDidMount() {
    this.loadPubs();
  }

  // Loads all Pubs  and sets them to this.state.Pubs
  loadPubs = () => {
    API.search()
      .then(res => {
        this.setState ({
          pubs: res.data
        });
        console.log(this.state);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
      { this.state.pubs.length ? (
        <List>
        {this.state.pubs.map(pub => {
          console.log(`IMG: ${pub.name} ${pub.img_url}`)
            return (
              <ListItem key={pub.id}>
              <a href={pub.url}>
                <strong>{pub.name}</strong>
              </a>
              <img
                alt="some bar"
                src={pub.img_url}
              />
            </ListItem>
            )
        })}
      </List>
      ) : <h1> No Search Results Yet </h1>}
      </div>
    );
  }
}

export default SearchTest;
