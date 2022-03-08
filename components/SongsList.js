import React from "react";
import { useEffect } from "react";

export const SongsList = ({ tracks, setTrackId, setOpenModal, openModal }) => {
	console.log(tracks);
	const doTheTask = (e, id) => {
		setTrackId(id - 1);
		if (openModal) {
			setOpenModal(false);
		}

		e.target.className += "red";
	};
	useEffect(() => {}, [openModal]);
	return (
		<div className="songs-container">
			<>
				<ul>
					{tracks &&
						tracks.map((track) => (
							<li key={track.id} onClick={(e) => doTheTask(e, track.id)}>
								{track.title}
							</li>
						))}
				</ul>
			</>
		</div>
	);
};
export default SongsList;
