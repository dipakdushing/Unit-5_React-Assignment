import React from "react";
import ReactDOM from "react-dom";

let links= ["Services", "Projects",'About']

function App() {

	return (
		<>
			<nav className="nav">
				<div className="left">
					<h3>LOGOBAKERY</h3>
				</div>
				<div className="middle">
					{links.map((e)=><Apna val={e}/>)}
				</div>
				<div className="right">
					<button>Contact</button>
				</div>
			</nav>
		</>
	);
}

function Apna(props){
	return <a>{props.val}</a>
}

export default App;
