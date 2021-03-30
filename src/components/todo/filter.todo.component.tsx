import React from "react";

export const FilterTodo = ({ todos, handleFilter, deleteTodos }: any) => {
	return (
		<>
			<div className="row box-filter ">
				<div className="col-lg-3 col-6">
					<p className="show-data">
						{todos.filter((x: any) => x.done === false).length}{" "}
						items left
					</p>
				</div>

				<div className="col-5 button-filter">
					<div className="row">
						<div className="col-2">
							<p>
								<button
									type="button"
									onClick={() => {
										handleFilter("ALL");
									}}
								>
									All
								</button>
							</p>
						</div>
						<div className="col-3">
							<p>
								<button
									type="button"
									onClick={() => {
										handleFilter("ACTIVE");
									}}
								>
									Active
								</button>
							</p>
						</div>
						<div className="col-3">
							<p>
								<button
									type="button"
									onClick={() => {
										handleFilter("COMPLETED");
									}}
								>
									Completed
								</button>
							</p>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-6 float-right">
					<button onClick={deleteTodos} className="show-data">
						Clear Completed
					</button>
				</div>
			</div>

			<div className="row box-sec-filter mt-3 text-center">
				<div className="col-6 offset-2">
					<div className="row">
						<div className="col-3">
							<p>
								<button
									type="button"
									onClick={() => {
										handleFilter("ALL");
									}}
								>
									All
								</button>
							</p>
						</div>
						<div className="col-4">
							<p>
								<button
									type="button"
									onClick={() => {
										handleFilter("ACTIVE");
									}}
								>
									Active
								</button>
							</p>
						</div>
						<div className="col-4">
							<p>
								<button
									type="button"
									onClick={() => {
										handleFilter("COMPLETED");
									}}
								>
									Completed
								</button>
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
