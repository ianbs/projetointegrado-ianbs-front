//day.toLocaleDateString("pt-BR", { weekday: "long" }).toUpperCase()

import { format, eachHourOfInterval } from "date-fns";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const FormModal = ({ day, showModal, setShowModal }) => {
	const [horarios, setHorarios] = useState([]);

	const handleCloseClick = (e) => {
		e.preventDefault();
		setShowModal(!showModal);
	};

	const eachHour = (day) => {
		const result = eachHourOfInterval({
			start: new Date(2022, 0, 1, 8),
			end: new Date(2022, 0, 1, 18),
		});
		setHorarios(result);
	};

	useEffect(() => {
		eachHour(day);
	}, [day]);

	return showModal ? (
		<ModalStyle>
			<div
				className="modal modal-dialog modal-dialog-centered modal-dialog-scrollable"
				style={{ width: "100%" }}
			>
				<div className="modal-content">
					<div className="modal-header justify-content-between">
						{day.toLocaleDateString("pt-BR", { weekday: "long" }).toUpperCase()}{" "}
						- {format(day, "dd/MM/yyyy")}
						<span onClick={handleCloseClick}>X</span>
					</div>
					<div className="modal-body">
						<ul className="list-group">
							{horarios.map((item) => (
								<li
									className="list-group-item d-flex justify-content-between align-items-center list-group-item-action"
									key={item}
								>
									{format(item, "kk:mm")}
									<span className="badge bg-primary rounded-pill">Livre</span>
								</li>
							))}
						</ul>
					</div>
					<div className="modal-footer">
						<button
							onClick={handleCloseClick}
							type="button"
							className="btn btn-outline-danger"
						>
							Cancelar
						</button>
					</div>
				</div>
			</div>
			<div
				className="modal fade"
				id="exampleModalToggle2"
				aria-hidden="true"
				aria-labelledby="exampleModalToggleLabel2"
				tabIndex="-1"
			>
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalToggleLabel2">
								Modal 2
							</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div className="modal-body">
							Hide this modal and show the first with the button below.
						</div>
						<div className="modal-footer">
							<button
								className="btn btn-primary"
								data-bs-target="#exampleModalToggle"
								data-bs-toggle="modal"
							>
								Back to first
							</button>
						</div>
					</div>
				</div>
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
`;

export default FormModal;
