import React, { Component } from "react";
//npm start in ToDo folder to run react
export default class Todo extends Component {
  constructor() {
    super(); //call the constructor of component
    this.state = {
      tasks: [ //4k->8k
        {id:1,task:"Revise js"},
        {id:2,task:"Revise DSA"},
        {id:3,task:"complete assignments"},
        {id:4,task:"wake up at 6"},
      ],
      currTask: "",
    };
  }

    handleAddTask = () => {
        this.setState({
              tasks:[...this.state.tasks,{id:this.state.tasks.length+1,task:this.state.currTask}] //8k
          })
    }

    handleChange = (e) => {
        console.log(e.target.value);
        this.setState({
            currTask: e.target.value
        })
  }
  handleDelete=(id) => {
    let narr = this.state.tasks.filter(taskObj => taskObj.id != id);
    // narr->1,3
    this.setState({
      tasks: [...narr]
    });
  }
  render() { // Render is the technique that can redirect a page with the help of function render(). Most importantly, render a function we can use to define the HTML code within the HTML element. It helps to display certain views in the UI using certain logic defined in the render function and returns the output.
    return (
      <div>
        <input
          type="text"
          placeholder="Enter Your Task"
          onChange={this.handleChange}
        />
        <button onClick={this.handleAddTask}>Add</button>
        {this.state.tasks.map((taskObj,idx) => { // js use krna he isliye ye {} use kra he this.state.tasks.map se pehle
          return (/* 1st line -> for li we need key to uniquely identify while rendering, className for css in todo.css */
          /* 2 line -> tedha underscore isliye use kra he kyuki variable use krne the iski help se */
          /*3rd line after style -> isme 2{} isliye liye he ek js ke liye aur ek style ke liye */
          //3rd line -> yha pr mene arrow fn use kra he kyuki mujhe parameters pass krne the agar fn(a) krta to fn usi waqt call ho jata isliiye ham callback fn dete he -> fn ya fir arrow fn jisse sirf reference pass ho
            <li  className="list" key={taskObj.id}> 
              <p>{`${idx+1 }. ${taskObj.task}`}</p>
              <button style={{backgroundColor:"red"}} onClick={()=>this.handleDelete(taskObj.id)}>Delete</button> 
            </li>
          );
        })}
      </div>
    );
  }
}