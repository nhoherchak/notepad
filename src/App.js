import React, { Component } from 'react';
import Header from './components/Header';
import Grid from './components/Grid';
import Form from './components/Form';
import firebase from 'firebase';
import _ from 'lodash';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      name: 'Natasha', 
      currentTitle: "",
      currentDetails: "",
      formtext: "Add note",
    }
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBopwd0-uoa5ivk2kTSdfrjs5LKP9BKWrc",
      authDomain: "notepad-3e8ea.firebaseapp.com",
      databaseURL: "https://notepad-3e8ea.firebaseio.com",
      projectId: "notepad-3e8ea",
      storageBucket: "",
      messagingSenderId: "156176645239"
    });
    firebase.database().ref('/notes')
      .on('value', snapshot => {
        const fbstore = snapshot.val();
        const store = _.map(fbstore, (value, id) => {
          return {
            id: id,
            title: value.title,
            details: value.details,
          };
        });

        this.setState({
          notes: store, 
        });
      });
  }

  handleChange(event) {
    const name = event.target.name; //eg currentTitle or currentDetails
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = {
      title: this.state.currentTitle,
      details: this.state.currentDetails,
    };

    firebase.database().ref('/notes').push(data, response => response);

    this.setState({
      currentTitle: "",
      currentDetails: "",
    });
  }

  deleteNote(id) {
    firebase.database().ref(`/notes/${id}`)
    .remove();
    alert("Successful deletion.");
  }

  toggleUpdateForm(id) {
    this.setState({
      formtext: "Update"
    });
  }

  updateNote(id) {
    firebase.database().ref('/notes/' + id).set({
      title: this.state.currentTitle,
      details: this.state.currentDetails,
    });
    this.setState({
      formtext: "Add Note"
    });
  }

  render() {
    return (
      <div className="App">
        <Header name={this.state.name} />
        <Form 
        currentTitle={this.state.currentTitle}
        currentDetails = {this.state.currentDetails}
        handleChange={this.handleChange.bind(this)}
        handleSubmit={this.handleSubmit.bind(this)}
        formText={this.state.formtext}
        />
        <Grid notes={this.state.notes} deleteNote={this.deleteNote.bind(this)} updateNote={this.updateNote.bind(this)} />
      </div>
    );
  }
}

export default App;
