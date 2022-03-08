import React from "react";
import Sound from "react-sound";
import {
	AiFillCaretLeft,
	AiFillCaretRight,
	AiFillPauseCircle,
	AiFillPlusCircle,
	AiOutlineAlignRight,
} from "react-icons/ai";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { ImNext } from "react-icons/im";
import axios from "axios";

export const Buttons = ({
	isPlaying,
	toPrevTrack,
	toNextTrack,
	setIsPlaying,
	setOpenModal,
	openModal,
}) => {
	const doThing = () => {
		document.querySelector(".add-song").click();
	};
	const addSong = async (e) => {
		const audio = e.target.files[0];
		console.log(audio);
		const formData = new FormData();
		formData.append("file", audio);
		console.log([...formData]);
		const data = await axios.post("http://localhost:8000/api/upload-music", {
			formData,
		});
		console.log(data.data);
	};
	const uploadSong = async (x) => {
		const data = await axios.post("http://localhost:8000/api/upload-music", {
			x,
		});
		console.log(data.data);
	};
	const removeSong = () => {
		console.log("hell Yeah");
	};
	return (
		<div className="button-container">
			<AiFillPlusCircle
				onClick={(e) => {
					doThing();
				}}
			/>
			<input
				type="file"
				className="add-song"
				accept="audio/*"
				onChange={(e) => addSong(e)}
			/>
			<AiFillCaretLeft onClick={toPrevTrack} />
			{isPlaying ? (
				<AiFillPauseCircle onClick={() => setIsPlaying(false)} />
			) : (
				<ImNext onClick={() => setIsPlaying(true)} />
			)}

			<AiFillCaretRight onClick={toNextTrack} />

			<AiOutlineAlignRight
				className="love"
				onClick={() => setOpenModal(true)}
			/>
		</div>
	);
};
export default Buttons;
