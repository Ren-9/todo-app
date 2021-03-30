import { Home } from "../../pages/home/home.page";



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
						<Home />
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
