import { useState } from "react";

export const Inventory = () => {
	const [inv, setInv] = useState({
		books: 10,
		notebooks: 13,
		pens: 40,
		inkpens: 26,
	});
	// Create add and remove functions here that changes the
	// state.
	// console.log(inv);

	const handleValue = (value, type) => {
		if(type==="b"){
		  setInv({...inv, books:inv.books+value});
		  //{books: 10,notebooks: 13,pens: 40,inkpens: 26, books:inv.books+value }
		}else if(type==="n"){
		  setInv({...inv, notebooks:inv.notebooks+value})
		}else if(type==="p"){
		  setInv({...inv, pens:inv.pens+value})
		}else if(type==="i"){
		  setInv({...inv, inkpens:inv.inkpens+value})
		}
	};

	return (
		<div
			style={{
				border: "1px solid black",
				borderRadius: "3px",
				padding: "10px",
				display: "flex",
				flexDirection: "column",
				width: "400px",
			}}
		>
			<div className="items">
				<span>Books: </span>
				<button className="circlularButton" onClick={() => handleValue(1, "b")}>
					+
				</button>
				<button
					className="circlularButton"
					onClick={() => handleValue(-1, "b")}
				>
					-
				</button>
				<span>{inv.books}</span>
			</div>
			<div className="items">
				<span>Notebooks: </span>
				<button className="circlularButton" onClick={() => handleValue(1, "n")}>+</button>
				<button className="circlularButton" onClick={() => handleValue(-1, "n")}>-</button>
				<span>{inv.notebooks}</span>
			</div>
			<div className="items">
				<span>Pen: </span>
				<button className="circlularButton" onClick={() => handleValue(1, "p")}>+</button>
				<button className="circlularButton" onClick={() => handleValue(-1, "p")}>-</button>
				<span>{inv.pens}</span>
			</div>
			<div className="items">
				<span>Ink Pens: </span>
				<button className="circlularButton" onClick={() => handleValue(1, "i")}>+</button>
				<button className="circlularButton" onClick={() => handleValue(-1, "i")}>-</button>
				<span>{inv.inkpens}</span>
			</div>
			{/*calculate total and show it*/}
			total: {inv.books + inv.inkpens + inv.notebooks + inv.pens}
		</div>
	);
};
