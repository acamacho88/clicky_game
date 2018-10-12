import React, { Component } from "react";
import "./Picture.css";

class Picture extends Component {
    // Setting the component's initial state
    state = {
        clicked: 0,
    };

    handleClick = event => {
        console.log("here!");
        if (this.state.clicked == 0) {
            this.setState({
                clicked: 1
            })
        }
    }

    /* handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.name;

        // Updating the input's state
        this.setState({
            [name]: value
        });
    }; */

    /* handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        if (!this.state.firstName || !this.state.lastName) {
            alert("Fill out your first and last name please!");
        } else if (this.state.password.length < 6) {
            alert(
                `Choose a more secure password ${this.state.firstName} ${this.state
                    .lastName}`
            );
        } else {
            alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
        }

        this.setState({
            firstName: "",
            lastName: "",
            password: ""
        });
    }; */

    render() {
        // Notice how each input has a `value`, `name`, and `onChange` prop
        return (
            <div className="card" onClick={this.props.onClick}>
                <img
                    src={this.props.src}
                    clicked={this.state.clicked}
                    alt={this.props.alt}
                />
            </div >
        );
    }
}

export default Picture;
