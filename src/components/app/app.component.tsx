import "../../common/styles/main.css";
import "../../common/styles/responsive.css";

function App() {
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
							<div className="col-1 mt-2">
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
							<div className="col-1 ">
								<div className="circle"></div>
							</div>
							<div className="col-11">
								<input
									type="text"
									placeholder="Create new todo..."
								/>
							</div>
						</div>

						<ul className="mt-4">
							<li>
								<div className="row box-item ">
									<div className="col-1 ">
										<div className="circle"></div>
									</div>
									<div className="col-11">
										<p>Jog around the park</p>
									</div>
								</div>
							</li>
							<li>
								<div className="row box-item ">
									<div className="col-1 ">
										<div className="circle"></div>
									</div>
									<div className="col-11">
										<p>10 minutes meditation</p>
									</div>
								</div>
							</li>
							<li>
								<div className="row box-item ">
									<div className="col-1">
										<div className="circle"></div>
									</div>
									<div className="col-11">
										<p>Read for 1 hour</p>
									</div>
								</div>
							</li>
							<li>
								<div className="row box-item ">
									<div className="col-1 ">
										<div className="circle"></div>
									</div>
									<div className="col-11">
										<p>Pick up groceries</p>
									</div>
								</div>
							</li>
						</ul>
						<div className="row box-filter ">
							<div className="col-lg-3 col-7">
								<p className="show-data">5 items left</p>
							</div>
							<div className="col-5 button-filter">
								<div className="row">
									<div className="col-2">
										<p>All</p>
									</div>
									<div className="col-4">
										<p>Active</p>
									</div>
									<div className="col-3">
										<p>Completed</p>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-5 float-right">
								<p className="show-data">Clear Completed</p>
							</div>
						</div>

						<div className="row box-sec-filter mt-3 text-center">
							<div className="col-6 offset-2">
								<div className="row">
									<div className="col-3">
										<p>All</p>
									</div>
									<div className="col-4">
										<p>Active</p>
									</div>
									<div className="col-4">
										<p>Completed</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
