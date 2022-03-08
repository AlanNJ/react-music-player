import React, { useState, useEffect, useRef } from "react";
import Main from "../components/Main";

export const index = () => {
	const [music, setMusic] = useState("");
	return (
		<div className="container">
			<Main />
		</div>
	);
};
export default index;
