import React, { useEffect, useReducer, useState } from "react";
import { Todo } from "../../common/interfaces/todo.interface";
import { todoReducer } from "../../reducer/todoReducer";
import { TitleTodo } from "../../components/todo/title.todo.component";
import { AddTodo } from "../../components/todo/add.todo.component";
import { ListTodo } from "../../components/todo/list.todo.component";
import { FilterTodo } from "../../components/todo/filter.todo.component";

const init = () => {
	const data: Todo[] = JSON.parse(localStorage.getItem("todos")!) || [];
	return data;
};

export const Home: React.FC = () => {
	const [todos, dispatch] = useReducer(todoReducer, [], init);
	const [filter, setFilter] = useState([{}]);
	const handleAddTodo = (newTodo: Todo) => {
		dispatch({
			type: "POST",
			payload: newTodo,
		});
	};

	const handleToggle = (id: number) => {
		dispatch({
			type: "DONE",
			payload: id,
		});
	};
	const deleteTodos = () => {
		dispatch({
			type: "CLEAR-TODOS",
		});
	};

	const handleDelete = (id: number) => {
		localStorage.setItem("todos", "");
		dispatch({
			type: "DELETE",
			payload: id,
		});
	};

	const handleFilter = (filter: string) => {
		if (filter === "ACTIVE") {
			setFilter(todos.filter((todo) => todo.done === false));
		}
		if (filter === "COMPLETED") {
			setFilter(todos.filter((todo) => todo.done === true));
		}
		if (filter === "ALL") {
			setFilter(todos);
		}
	};

	useEffect(() => {
		setFilter(todos);
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	return (
		<>
			<TitleTodo />

			<AddTodo handleAddTodo={handleAddTodo} />

			<div className="mt-4">
				<ListTodo
					todos={filter}
					handleDelete={handleDelete}
					handleToggle={handleToggle}
				/>
			</div>

			{todos.length!==0 ? (
				<FilterTodo
					todos={todos}
					handleFilter={handleFilter}
					deleteTodos={deleteTodos}
				/>
			) : (
				<div className="row box-filter mt-3 text-center">
					<div className="col-6 offset-3">
						<p >There is nothing  &#128513;</p>
					</div>
				</div>
			)}
		</>
	);
};
