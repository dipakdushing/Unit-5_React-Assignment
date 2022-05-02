import "./style.css";

var root = document.getElementById("root");
// root.append(h1)
console.log("Haan Dikha!");

var logo_div = document.createElement("div");
logo_div.className = "logo_div";
var logo = document.createElement("img");
logo.src = "https://zenkit.com/wp-content/uploads/2021/01/todo-social.jpg";
logo.className = "logo";

logo_div.append(logo);

var inpBox = document.createElement("input");
var btn = document.createElement("button");
btn.innerText = "Button";
var inp_div = document.createElement("div");
inp_div.className = "inp-div";
var op_div = document.createElement("div");
op_div.className = "op-div";

inp_div.append(inpBox, btn);
root.append(logo_div, inp_div);

btn.addEventListener("click", () => {
	var inp_data = inpBox.value;
	console.log(inp_data);
	op_div.innerText = inp_data;
});
root.append(op_div);
