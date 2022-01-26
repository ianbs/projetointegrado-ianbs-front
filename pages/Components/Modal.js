import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Modal = ({ day, showModal, setShowModal }) => {
	const handleCloseClick = (e) => {
		e.preventDefault();
		setShowModal(!showModal);
	};

	// useEffect(() => {
	// 	setTitle(
	// 		day.toLocaleDateString("pt-BR", { weekday: "long" }).toUpperCase()
	// 	);
	// }, [day]);

	return showModal ? (
		<div className="modal" tabIndex="-1">
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">
							{day
								.toLocaleDateString("pt-BR", { weekday: "long" })
								.toUpperCase()}
						</h5>
						<button
							onClick={handleCloseClick}
							type="button"
							className="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close"
						></button>
					</div>
					<div className="modal-body">
						<p>Modal body text goes here.</p>
					</div>
					<div className="modal-footer">
						<button
							type="button"
							className="btn btn-secondary"
							data-bs-dismiss="modal"
						>
							Close
						</button>
						<button type="button" className="btn btn-primary">
							Save changes
						</button>
					</div>
				</div>
			</div>
		</div>
	) : (
		""
	);
};

export default Modal;
