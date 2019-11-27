import React, { Component } from 'react';
import axios from 'axios';
import PuppyForm from './Components/PuppyForm';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      puppies: []
    };

    this.getAllPuppies = this.getAllPuppies.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.postPuppy = this.postPuppy.bind(this);
  }

  componentDidMount(){
    this.getAllPuppies();
  }

  postPuppy(){
    const { name, age, breed, color, gender, temperment, dateSmuggled, size } = this.state;
    axios
      .post('/api/puppy', { name, age, breed, color, gender, temperment, dateSmuggled, size })
      .then(res => {
        this.setState({
          puppies: res.data
        });
      });
  }

  getAllPuppies(){
    axios.get('/api/puppies').then(res => {
      this.setState({
        puppies: res.data
      });
    });
  }

  unsmugglePuppy(id){
    axios.delete(`/api/unsmuggle/${id}`).then(res => {
      this.setState({
        puppies: res.data
      });
    });
  }

  changeHandler(key, value){
    this.setState({
      [key]: value
    });
  }

  render() {
    const { puppies, age, name, breed } = this.state;
    const mappedPuppies = puppies.map(puppy => {
      return <div key={puppy.id} className="puppy-card">
        <div>{puppy.name}</div>
        <div>{puppy.age}</div>
        <div>{puppy.breed}</div>
        <button onClick={() => this.unsmugglePuppy(puppy.id)}>
          Unsmuggle
        </button>
      </div>
    });

    console.log(this.state)

    return <div className="App">
      <PuppyForm age={age} name={name} breed={breed} changeHandler={this.changeHandler} postPuppy={this.postPuppy}/>
      <div>{mappedPuppies}</div>
    </div>
  }
}

export default App;
