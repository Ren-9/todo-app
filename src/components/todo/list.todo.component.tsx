import React from "react";
import { Todo } from "../../common/interfaces/todo.interface";
import { ItemTodo } from "./item.todo.component";

export const ListTodo = ({ todos, handleDelete, handleToggle }: any) => {
	return (
		<ul key={Math.random().toString(36).substr(2, 9)}>
			{todos.map((todo: Todo) => (
				<ItemTodo
					key={Math.random().toString(36).substr(2, 9)}
					todo={todo}
					handleDelete={handleDelete}
					handleToggle={handleToggle}
				/>
			))}
		</ul>
	);
};
