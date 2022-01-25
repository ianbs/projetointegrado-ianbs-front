import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Modal = ({ day, showModal, setShowModal }) => {
	const [title, setTitle] = useState("");

	const handleCloseClick = (e) => {
		e.preventDefault();
		setShowModal(!showModal);
		setTitle("");
	};

	// useEffect(() => {
	// 	setTitle(
	// 		day.toLocaleDateString("pt-BR", { weekday: "long" }).toUpperCase()
	// 	);
	// }, [day]);

	return showModal ? (
		<ModalStyle onClick={handleCloseClick}>
			<div className="modal">
				<div className="modal-header">
					{day.toLocaleDateString("pt-BR", { weekday: "long" }).toUpperCase()}
					<span onClick={handleCloseClick}>X</span>
				</div>
				<div className="modal-body">Lorem</div>
			</div>
		</ModalStyle>
	) : (
		""
	);
};

const ModalStyle = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.3);

	.modal {
		background-color: var(--white);
		padding: 1rem;
		border-radius: 10px;
		width: 30vw;
		height: 30vh;
		.modal-header {
			display: flex;
			justify-content: space-between;
			h1 {
				margin-left: 1rem;
			}
		}
	}
`;

export default Modal;
