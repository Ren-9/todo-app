import React from "react";

export const TitleTodo = () => {
	return (
		<div className="row">
			<div className="col-11 p-1 title">
				<h1>TODO</h1>
			</div>
			<div
				className="col-1 mt-2 select-box"
				style={{ cursor: "pointer" }}
				onClick={() => {
					console.log("asdfsd");
				}}
			>
				<img
					width="25"
					src={
						process.env.PUBLIC_URL + "/assets/images/icon-moon.svg"
					}
					alt=""
				/>
			</div>
		</div>
	);
};
