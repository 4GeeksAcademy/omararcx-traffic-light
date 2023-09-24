
import React, { useState } from "react";


//create your first component
const Home = () => {

	const [redOn, setRedOn] = useState(false)
	const [yellowOn, setYellowOn] = useState(false)
	const [greenOn, setGreenOn] = useState(false)

	return (
		<div className="semaforo">
			<div className="stick"></div>
			<div className="board">
				<div onClick={() => {
					setRedOn(!redOn)
					setGreenOn("")
					setYellowOn("")
				}} className={`redLight ${redOn ? `redLightOn` : ``}`} ></div>
				<div onClick={() => {
					setYellowOn(!yellowOn)
					setGreenOn("")
					setRedOn("")
				}} className={`yellowLight ${yellowOn ? `yellowLightOn` : ``}`}></div>
				<div onClick={() => {
					setGreenOn(!greenOn)
					setYellowOn("")
					setRedOn("")
				}} className={`greenLight ${greenOn ? `greenLightOn` : ``}`}></div>
			</div>

		</div>
	);
};

export default Home;
