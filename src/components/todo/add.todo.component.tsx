import React from "react";
import { useForm } from "../../hooks/useForm";

export const AddTodo = ({ handleAddTodo }: any) => {
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
		handleAddTodo(newTodo);
		reset();
	};

	return (
		<>
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
		</>
	);
};
