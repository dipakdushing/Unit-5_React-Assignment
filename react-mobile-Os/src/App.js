import React from "react";
import ReactDOM from "react-dom";

// function App() {
// 	let os = ["Android", "Blackberry", "iPhone", "Windows Phone"];
// 	let manufacturer = ["Samsung", "HTC", "Apple", "Micromax"];

// 	return (
// 		<>
// 			<h2>Mobile Operating System</h2>
// 			<ul>
// 				{os.map((elem) => (
// 					<li>{elem}</li>
// 				))}
// 			</ul>
// 			<h2>Mobile Manufacturer</h2>
// 			<ul>
// 				{manufacturer.map((elem) => (
// 					<li>{elem}</li>
// 				))}
// 			</ul>
// 		</>
// 	);
// }
function App() {
	let os = ["Android", "Blackberry", "iPhone", "Windows Phone"];
	let manufacturer = ["Samsung", "HTC", "Apple", "Micromax"];

	return (
		<>
			<h2>Mobile Operating System</h2>
			<ul>
				{os.map((elem) => (
					<li>{elem}</li>
				))}
			</ul>
			<h2>Mobile Manufacturer</h2>
			<ul>
				{manufacturer.map((elem) => {
					return <Items li={elem} cls="red-text" />;
				})}
			</ul>
		</>
	);
}

function Items(props) {
	return (
		<>
			<li className={props.cls}>{props.li}</li>
		</>
	);
}

export default App;
