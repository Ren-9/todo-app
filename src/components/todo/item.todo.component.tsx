

export const ItemTodo = ({ todo, handleDelete, handleToggle }: any) => {
	return (
		<li>
			<div className="row box-item ">
				<div
					className="col-1 "
					style={{ cursor: "pointer" }}
					onClick={() => {
						handleToggle(todo.id);
					}}
				>
					<div
						className={` text-center ${
							todo.done ? "circle-check " : "circle "
						}`}
					>
						{todo.done && (
							<img
								width="15"
								alt=""
								src={
									process.env.PUBLIC_URL +
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
						handleToggle(todo.id);
					}}
				>
					<p className={`${todo.done && "done"}`}>
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
						<img
							width="15"
							alt=""
							src={
								process.env.PUBLIC_URL +
								"/assets/images/icon-cross.svg"
							}
						/>
					</button>
				</div>
			</div>
		</li>
	);
};
