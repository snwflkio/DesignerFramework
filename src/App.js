import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";

class App extends Component{

	allowDrop(ev) {
  		ev.preventDefault();
	}

	drag(ev) {
  		ev.dataTransfer.setData("text", ev.target.id);
	}

	drop(ev) {
		ev.preventDefault();
		var data = ev.dataTransfer.getData("text");
		ev.target.appendChild(document.getElementById(data));
	}


	render(){
	return(
	  <div className="main">
			<div className="section-column">
				<div id="title" draggable="true" onDragStart={(event)=>this.drag(event)}>
					<h1>Title</h1>
				</div>
				<div id="subtitle" draggable="true" onDragStart={(event)=>this.drag(event)}>
					<h2>Subtitle</h2>
				</div>

				<div id="subtitle" draggable="true" onDragStart={(event)=>this.drag(event)}>
					<h3>SubSubtitle</h3>
				</div>

				<div id="subtitle" draggable="true" onDragStart={(event)=>this.drag(event)}>
					<h4>SubSubSubtitle</h4>
				</div>

			</div>
			<div className="line">

			</div>
			<div className="section">
				<div id="1-dd" onDrop={(event)=>this.drop(event)} onDragOver={(event)=>this.allowDrop(event)} className="draggable location"></div> 
				<div id="2-dd" onDrop={(event)=>this.drop(event)} onDragOver={(event)=>this.allowDrop(event)} className="draggable location"></div>
				<div id="3-dd" onDrop={(event)=>this.drop(event)} onDragOver={(event)=>this.allowDrop(event)} className="draggable location"></div>
				<div id="4-dd" onDrop={(event)=>this.drop(event)} onDragOver={(event)=>this.allowDrop(event)} className="draggable location"></div>
			</div>
		</div>
	);
	}
}

export default hot(module)(App);