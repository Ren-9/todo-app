import React, { useReducer, useEffect } from "react";

import { useForm } from "../../hooks/useForm";
import { todoReducer } from "../../reducer/todoReducer";

import { Todo } from "../../common/interfaces/todo.interface";

import "../../common/styles/main.css";
import "../../common/styles/responsive.css";

const init = () => {
	const data: Todo[] = JSON.parse(localStorage.getItem("todos")!) || [];
	return data;
};

function App() {

	const [todos, dispatch] = useReducer(todoReducer, [], init);

	const [{ description }, handleInputChange, reset] = useForm({
		description: "",
	});

	const handleSubmit = (e: any) => {
		e.preventDefault();
		const newTodo = {
			id: new Date().getTime(),
			description: description,
			done: false,
		};
		dispatch({
			type: "POST",
			payload: newTodo,
		});
		reset();
	};

	const toggleDone = (id: number) => {
		dispatch({
			type: "DONE",
			payload: id,
		});
	};

	const handleDelete = (id: number) => {
		dispatch({
			type: "DELETE",
			payload: id,
		});
	};

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	return (
		<>
			<div className="todo-box ">
				<div
					className="cover"
					style={{
						backgroundImage: `url(${process.env.PUBLIC_URL} '/assets/images/bg-desktop-light.jpg')`,
					}}
				></div>
				<div className="row vertical-center">
					<div className="main_wrapper col-lg-5  col-12 ">
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
										process.env.PUBLIC_URL +
										"/assets/images/icon-moon.svg"
									}
									alt=""
								/>
							</div>
						</div>
						<div className="row box-input mt-3">
							<div className="col-1 mt-1">
								<div className="circle"></div>
							</div>
							<div className="col-11">
								<form action="" onSubmit={handleSubmit}>
									<input
										type="text"
										name="description"
										value={description}
										onChange={handleInputChange}
										autoComplete="off"
										placeholder="Create new todo..."
									/>
								</form>
							</div>
						</div>

						<ul className="mt-4">
							{todos.map((todo) => (
								<li key={todo.id}>
									<div className="row box-item ">
										<div
											className="col-1 "
											style={{ cursor: "pointer" }}
											onClick={() => {
												toggleDone(todo.id);
											}}
										>
											<div
												className={` text-center ${
													todo.done
														? "circle-check "
														: "circle "
												}`}
											>
												{todo.done && (
													<img
														width="15"
														alt=""
														src={
															process.env
																.PUBLIC_URL +
															"/assets/images/icon-check.svg"
														}
													/>
												)}
											</div>
										</div>
										<div
											className="col-10"
											style={{ cursor: "pointer" }}
											onClick={() => {
												toggleDone(todo.id);
											}}
										>
											<p
												className={`${
													todo.done && "done"
												}`}
											>
												{todo.description}
											</p>
										</div>
										<div className="col-1">
											<button
												type="button"
												className="btn-delete"
												onClick={() => {
													handleDelete(todo.id);
												}}
											>
												<i className="fa fa-trash"></i>
											</button>
										</div>
									</div>
								</li>
							))}
						</ul>
						<div className="row box-filter ">
							<div className="col-lg-3 col-7">
								<p className="show-data">
									{todos.length} items left
								</p>
							</div>
							<div className="col-5 button-filter">
								<div className="row">
									<div className="col-2">
										<p>
											<button type="button">All</button>
										</p>
									</div>
									<div className="col-3">
										<p>
											<button type="button">
												Active
											</button>
										</p>
									</div>
									<div className="col-3">
										<p>
											<button type="button">
												Completed
											</button>
										</p>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-5 float-right">
								<p className="show-data">Clear Completed</p>
							</div>
						</div>

						{/* <div className="row box-sec-filter mt-3 text-center">
							<div className="col-6 offset-2">
								<div className="row">
									<div className="col-3">
										<p>
											<a href="#">All</a>
										</p>
									</div>
									<div className="col-4">
										<p>
											<a href="#">Active</a>
										</p>
									</div>
									<div className="col-4">
										<p>
											<a href="#">Completed</a>
										</p>
									</div>
								</div>
							</div>
						</div> */}
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
