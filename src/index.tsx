import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.component";
import "./common/styles/main.css";
import "./common/styles/responsive.css";

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
