import React from "react";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.textInput = React.createRef();
    this.handleCheck = this.handleCheck.bind(this);
    this.handleMakeFocus = this.handleMakeFocus.bind(this);
    console.log("Constructor is ready");
  }

  handleCheck(e) {
    this.setState({ value: e.target.value });
  }

  handleMakeFocus(e) {
    e.preventDefault();
    this.textInput.current.focus();
  }

  static getDerivedStateFromProps() {
    console.log("get Derived State From Props");
    return null;
  }
  componentDidMount() {
    console.log("Component did mount");
  }

  shouldComponentUpdate() {
    console.log("Component should update");
    return true;
  }
  componentDidUpdate() {
    console.log("Component did update");
  }

  getSnapshotBeforeUpdate() {
    console.log("get Snapshot Before Update");
    return null;
  }

  render() {
    console.log("Render is done here");
    return (
      <form>
        <input
          placeholder="write here"
          onChange={this.handleCheck}
          ref={this.textInput}
        ></input>
        <button disabled={this.state.value.includes("реакт")}>
          Сheck input
        </button>
        <button onClick={this.handleMakeFocus}>Click to focus input</button>
      </form>
    );
  }
}

export default MyComponent;
