import React from "react";

class Join extends React.Component {
  state = {
    renderList: null,
  };
  componentDidMount() {
    this.setState({
      renderList: false,
    });
  }
  handleClick(searchTerm) {
    this.setState({ renderList: true });
    this.fetchItems(searchTerm);
  }
  render() {
    console.log(this.state.renderList);
    return (
      <section className="Join_container">
        {this.state.renderList ? (
          <div>
            <span>Join us</span>
          </div>
        ) : null}
      </section>
    );
  }
}

export default Join;
