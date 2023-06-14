import React, { Component } from "react";
import Table from "./Table";
export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      show: false,
      data:[],
      name:""
    };
  }
  increment() {
    this.setState({
      counter: this.state.counter + 1,
      show: !this.state.show,
    });
  }
  onChangeName(event){
    this.setState({
        name:event.target.value
    });
  }
  onClickSave(){ 
    this.setState({
        data:[...this.state.data,{sn:this.state.data.length+1,name:this.state.name}]
    });
  }
  
  render() {
    return (
       
      <div className="m-5 w-50 justify-content-center">
        <h3 style={{color:"rgb(71, 129, 168)"}} >Counter value is: {this.state.counter} </h3>
        <div className="container m-3">
        <button className="btn btn-primary px-4" onClick={() => this.increment()}>
          Increment
        </button></div>
        {this.state.show ? (
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto iure
            temporibus natus consequuntur. Distinctio, dolores ad. Iste vel,
            pariatur omnis voluptatibus esse sed aut assumenda quisquam
            temporibus nemo fuga optio?Lorem, ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>
        ) : ("")}
        {/* {this.state.counter % 2 === 0) ?<h1>Parul</h1>:<h1>Not Parul</h1>} */}
        <div className=" input-group mb-3 mx-2 w-3 container">
        <span className="input-group-text">Item</span> 
        <input type="text"
      className="form-control"
      aria-label="Sizing example input"
      aria-describedby="inputGroup-sizing-default"
      placeholder="Enter the text to add"onChange={(e)=>{this.onChangeName(e)}} />
        </div>
        <button className="btn btn-success px-4" onClick={()=>{this.onClickSave()}}>Save</button>
        <Table data={this.state.data}/>
      </div>
      
    );
  }
}
