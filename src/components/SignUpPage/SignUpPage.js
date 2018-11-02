import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SignUpPage.css";
import firebase from "firebase";



class SignUpPage extends Component {
  state = {
    name: "",
    surname: "",
    email: "",
    password: "",
    password2: "",
    age: "",
    gender: "",
    city: "",
    description: "",
    error: null
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
      if (this.state.password !== this.state.password2){
        this.setState({
          error: {message: "Hasła się nie zgadzają."}
        })
      } else  {
        firebase.auth().createUserWithEmailAndPassword(
          this.state.email,
          this.state.password
        ).then(
          (data) => {
          firebase.database().ref('/users/' + data.user.uid).set({name: this.state.name, surname: this.state.surname})
          this.setState({ error: null })
          this.props.history.push ("/welcome")
          }
        ).catch(
          error => this.setState({ error })
        )
      }
  }

  render() {
    return (
      <div className="SignUpPage">
        <form onSubmit={this.handleSubmit} className="SignUpForm">
        <div className="SignText">[MIEJSCE NA TEKST]</div>
        {this.state.error && <p>{this.state.error.message}</p>}
        <table>
          <tbody>
            <tr>
        <td><label for="name">Imię</label></td>
        <td> 
        <input
          placeholder="Imię"
          required
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          
        /></td>
        </tr>
        <tr><td><label for="surname">Nazwisko</label></td>
         <td><input
          placeholder="Nazwisko"
          name="surname"
          value={this.state.surname}
          onChange={this.handleChange}
        /></td>
       </tr>
        <tr>
          <td>
            <label for="email">Adres e-mail</label>
            </td>
            <td>
        <input
          placeholder="Adres e-mail"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        </td>
       </tr>
          <tr>
            <td>
          <label for="password">Hasło</label>
          </td>
        <td>
        <input
          placeholder="Hasło"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
          type="password"
        />
        </td>
      </tr>
        <tr>
          <td>
        <label for="passoword2">Powtórz hasło</label>
        </td>
        <td>
        <input
          placeholder="Powtórz hasło"
          name="password2"
          value={this.state.password2}
          onChange={this.handleChange}
          type="password"
        />
        </td>
        </tr>
        </tbody>
      </table>
        
        <div>
      
        <button id="register" className="register">Wyślij</button>
        
          <img src="/data/signmole.png" alt="sign" className="Sign-drawing" /></div>
    
      </form>
      
      </div>
      
    );
  }
}

export default SignUpPage;