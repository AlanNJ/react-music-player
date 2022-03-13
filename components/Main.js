import React, { useState, useEffect, useRef } from "react";
import Buttons from "./Buttons";
import AudioPlayer from "react-h5-audio-player";
import SongsList from "./SongsList";

export const Main = () => {
	const [trackId, setTrackId] = useState(0);
	const [progress, setProgress] = useState();
	const [isPlaying, setIsPlaying] = useState(false);
	const [duration, setDuration] = useState();
	const [openModal, setOpenModal] = useState(false);
	const [time, setTime] = useState();
	const [view, setView] = useState(false);

	const tracks = [
		{
			id: 1,
			title: "y2mate.com - Eminem  Higher Official Video Explicit.mp3",
			artist: "string",
			audioSrc: "/y2mate.com - Eminem  Higher Official Video Explicit.mp3",
			image: "string",
			color: "string",
		},
		{
			id: 2,
			title: "y2mate.com - Eminem  Higher Official Video Explicit.mp3",
			artist: "string",
			audioSrc: "/food_G1U6tlb.mp3",
			image: "string",
			color: "string",
		},
		{
			id: 2,
			title: "y2mate.com - Eminem  Higher Official Video Explicit.mp3",
			artist: "string",
			audioSrc: "/food_G1U6tlb.mp3",
			image: "string",
			color: "string",
		},
		{
			id: 2,
			title: "y2mate.com - Eminem  Higher Official Video Explicit.mp3",
			artist: "string",
			audioSrc: "/food_G1U6tlb.mp3",
			image: "string",
			color: "string",
		},
	];

	const { title, artist, color, image, audioSrc } = tracks[trackId];
	//const [audio] = useState(typeof Audio !== "undefined" && new Audio(audioSrc));
	if (typeof Audio !== "undefined") {
		const audioRef = useRef(new Audio(audioSrc));
		const intervalRef = useRef();
		const isReady = useRef(false);
		setTime(audioRef.current.duration);
	}

	useEffect(() => {
		return () => {
			audioRef.current.pause();
			clearInterval(intervalRef.current);
		};
	}, []);
	const toPrevTrack = () => {
		if (trackId - 1 < 0) {
			setTrackId(tracks.length - 1);
		} else {
			setTrackId(trackId - 1);
		}
		console.log(trackId);
	};

	const toNextTrack = () => {
		if (trackId < tracks.length - 1) {
			setTrackId(trackId + 1);
		} else {
			setTrackId(0);
		}
		console.log(trackId);
	};
	useEffect(() => {
		if (isPlaying) {
			audioRef.current.play();
			startTimer();
			console.log(audioRef.current.currentTime);
			setProgress(audioRef.current.currentTime);
		} else {
			audioRef.current.pause();
		}
	}, [isPlaying]);
	const startTimer = () => {
		clearInterval(intervalRef.current);
		intervalRef.current = setInterval(() => {
			if (audioRef.current.ended) {
				setTimeout(() => {
					toNextTrack();
				}, [3000]);
			} else {
				setProgress(audioRef.current.currentTime);
			}
		}, [1000]);
	};
	useEffect(() => {
		audioRef.current.pause();
		audioRef.current = new Audio(audioSrc);
		console.log(audioRef.current);
		setProgress(audioRef.current.currentTime);
		console.log(isReady.current);
		if (isReady.current) {
			audioRef.current.play();
			setIsPlaying(true);
			startTimer();
		} else {
			isReady.current = true;
		}
	}, [trackId]);
	console.log(progress);
	const changeTime = (value) => {
		clearInterval(intervalRef.current);
		audioRef.current.currentTime = value;
		setProgress(audioRef.current.currentTime);
		startTimer();
	};

	const onScrubEnd = () => {
		// If not already playing, start
		if (!isPlaying) {
			setIsPlaying(true);
		}
		startTimer();
	};
	//duration ? duration : audioRef.current.duration

	return (
		<div className="main-container">
			<div className="circle"></div>
			<h1>{title}</h1>
			<input
				type="range"
				value={progress}
				step="1"
				min="0"
				max={time}
				className="loader"
				onChange={(e) => changeTime(e.target.value)}
				onMouseUp={onScrubEnd}
				onKeyUp={onScrubEnd}
			/>

			<Buttons
				toNextTrack={toNextTrack}
				toPrevTrack={toPrevTrack}
				isPlaying={isPlaying}
				setIsPlaying={setIsPlaying}
				setOpenModal={setOpenModal}
			/>
			{openModal && (
				<SongsList
					tracks={tracks}
					setTrackId={setTrackId}
					setOpenModal={setOpenModal}
					openModal={openModal}
				/>
			)}
		</div>
	);
};
export default Main;
