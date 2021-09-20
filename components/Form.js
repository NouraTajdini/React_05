import React from 'react';

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            email: "",
            phone: ""
        }

    }

    onNameChange = (event) => {
        this.setState({name: event.target.value})
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }

    onPhoneChange = (event) => {
        this.setState({phone: event.target.value})
    }
    
    onTermSubmit = (event) => {
        event.preventDefault()
        alert("You have successfully submitted")

    }
    render() {
        return(
        <section>
            <form onSubmit={this.onTermSubmit} className="form">
            <label>Name:</label>
            <input type="text" onChange={this.onNameChange} value={this.state.name}></input>
            <label>Email:</label>
            <input type="email" onChange={this.onEmailChange} value={this.state.email}></input>
            <label>Phone:</label>
            <input type="tel" onChange={this.onPhoneChange} value={this.state.phone}></input>
            <button type="submit">Submit</button>
            </form>
        </section>
        )
    }
}

export default Form