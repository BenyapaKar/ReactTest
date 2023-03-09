import React from "react";

export default class AddTodo extends React.Component {
  state = { content: "" };
  onChange = (e) => {
    e.preventDefault();
    this.setState({ content: e.target.value });
  };
  onKeydown = (e) => {
    if (e.key === "Enter") {
      this.onSubmit(e);
    }
  };
  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.content.trim().length !== 0)
      this.props.onAdd(this.state.content);
    else 
      alert("Content should not be blank");
    this.setState({ content: "" });
  };
  render() {
    return (
      <>
        <h2>
          <label htmlFor="new-todo-input">What needs to be done?</label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          placeholder="Your task"
          name="text"
          autoComplete="off"
          value={this.state.content}
          onChange={this.onChange}
          onKeyDown={this.onKeydown}
        />
        <button type="submit" className="btn" onClick={this.onSubmit}>
          Add
        </button>
      </>
    );
  }
}
