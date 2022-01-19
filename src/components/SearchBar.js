import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    // event.target.value
  }

  onFormSubmit(event) {
    // event.target.value
    event.preventDefault();
    this.props["onSubmit"](this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="term">Image Search</label>
            <input
              id="term"
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
