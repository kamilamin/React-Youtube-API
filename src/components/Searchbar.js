import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    term: "Default text"
  };
  handleChange = ev => {
      this.setState({
          term: ev.target.value
      })
  };
  handleSubmit = ev => {
      ev.preventDefault();
  };
  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.handleSubmit} className="ui form">
          <div className="field">
            <label htmlFor="video-search">Video Search</label>
            <input
              type="text"
              name="video-search"
              value={this.state.term}
              onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
