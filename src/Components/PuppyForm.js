import React from 'react';

export default function PuppyForm(props){
  return <form onSubmit={(event) => {
    event.preventDefault();
    props.postPuppy();
  }}>
    <div>
      Name: <input name="name" onChange={(event) => props.changeHandler(event.target.name, event.target.value)} value={props.name}/>
    </div>
    <div>
      Age: <input name="age" onChange={(event) => props.changeHandler(event.target.name, event.target.value)}/>
    </div>
    <div>
      Breed: <input name="breed" onChange={(event) => props.changeHandler(event.target.name, event.target.value)}/>
    </div>
    <div>
      Color: <input name="color" onChange={(event) => props.changeHandler(event.target.name, event.target.value)}/>
    </div>
    <div>
      Gender: <input name="gender" onChange={(event) => props.changeHandler(event.target.name, event.target.value)}/>
    </div>
    <div>
      Temperment: <input name="temperment" onChange={(event) => props.changeHandler(event.target.name, event.target.value)}/>
    </div>
    <div>
      Date Smuggled: <input name="date-smuggled" type="date" onChange={(event) => props.changeHandler(event.target.name, event.target.value)}/>
    </div>
    <div>
      Size: <input name="size" onChange={(event) => props.changeHandler(event.target.name, event.target.value)}/>
    </div>
    <button>Submit</button>
  </form>
}