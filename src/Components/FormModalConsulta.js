import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const FormModal = ({ item, tipo, showModal, setShowModal }) => {
	const handleCloseClick = (e) => {
		e.preventDefault();
		setShowModal(!showModal);
	};

	useEffect(() => {
		console.log(item);
	}, [item]);

	return showModal ? (
		<ModalStyle>
			<div className="modal modal-lg modal-dialog modal-dialog-centered modal-dialog-scrollable">
				<div className="modal-content">
					<div className="modal-header">
						{tipo === "create" ? "Novo" : ""}
						{tipo === "alter" ? "Alterar" : ""} Atendimento - Consulta
						<span onClick={handleCloseClick}>X</span>
					</div>
					<div className="modal-body">
						{tipo === "create" ? (
							<form className="row g-1">
								<div className="col-md-3">
									<label htmlFor="inputEmail4" className="form-label">
										Código Paciente
									</label>
									<input
										type="text"
										className="form-control"
										id="inputEmail4"
									/>
								</div>
								<div className="col-md-9">
									<label htmlFor="inputPassword4" className="form-label">
										Nome do Paciente
									</label>
									<input
										type="text"
										className="form-control"
										id="inputPassword4"
									/>
								</div>
								<div className="col-md-3">
									<label htmlFor="inputEmail4" className="form-label">
										Código do Convênio
									</label>
									<input
										type="email"
										className="form-control"
										id="inputEmail4"
									/>
								</div>
								<div className="col-md-9">
									<label htmlFor="inputPassword4" className="form-label">
										Nome do Convênio
									</label>
									<input
										type="password"
										className="form-control"
										id="inputPassword4"
									/>
								</div>
								<div className="col-3">
									<label htmlFor="inputAddress" className="form-label">
										Tipo Atendimento
									</label>
									<input
										type="text"
										className="form-control"
										id="inputAddress"
									/>
								</div>
								<div className="col-3">
									<label htmlFor="inputAddress2" className="form-label">
										Indicação de Acidente
									</label>
									<input
										type="text"
										className="form-control"
										id="inputAddress2"
									/>
								</div>
								<div className="col-3">
									<label htmlFor="inputAddress2" className="form-label">
										Caracter Atendimento
									</label>
									<input
										type="text"
										className="form-control"
										id="inputAddress2"
									/>
								</div>
								<div className="col-3">
									<label htmlFor="inputAddress2" className="form-label">
										Atendimento RN
									</label>
									<input
										type="text"
										className="form-control"
										id="inputAddress2"
									/>
								</div>
								<div className="col-md-12 mb-2">
									<label htmlFor="inputPassword4" className="form-label">
										Procedimento
									</label>
									<select
										className="form-select"
										aria-label=".form-select-sm example"
									>
										<option selected>Selecione o procedimento</option>
										<option value="1">10101012 - Consulta Clinica Geral</option>
										<option value="2">10101012 - Consulta Pediatra</option>
										<option value="3">10101012 - Consulta Psicologia</option>
									</select>
								</div>
								<div className="modal-footer">
									<div className="d-grid col-12">
										<div
											className="btn-group"
											role="group"
											aria-label="Basic outlined example"
										>
											<button type="submit" className="btn btn-outline-primary">
												Gravar Atendimento
											</button>

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
							</form>
						) : (
							""
						)}
						{tipo === "alter" ? (
							<form className="row g-1">
								<div className="col-md-3">
									<label htmlFor="inputEmail4" className="form-label">
										Código Paciente
									</label>
									<input
										type="text"
										className="form-control"
										id="inputEmail4"
										value={item.id}
									/>
								</div>
								<div className="col-md-9">
									<label htmlFor="inputPassword4" className="form-label">
										Nome do Paciente
									</label>
									<input
										type="text"
										className="form-control"
										id="inputPassword4"
										value={item.paciente}
									/>
								</div>
								<div className="col-md-3">
									<label htmlFor="inputEmail4" className="form-label">
										Código do Convênio
									</label>
									<input
										type="email"
										className="form-control"
										id="inputEmail4"
										value={item.id}
									/>
								</div>
								<div className="col-md-9">
									<label htmlFor="inputPassword4" className="form-label">
										Nome do Convênio
									</label>
									<input
										type="text"
										className="form-control"
										id="inputPassword4"
										value={"Nome do convenio"}
									/>
								</div>
								<div className="col-3">
									<label htmlFor="inputAddress" className="form-label">
										Tipo Atendimento
									</label>
									<input
										type="text"
										className="form-control"
										id="inputAddress"
										placeholder="1234 Main St"
										value={1}
									/>
								</div>
								<div className="col-3">
									<label htmlFor="inputAddress2" className="form-label">
										Indicação de Acidente
									</label>
									<input
										type="text"
										className="form-control"
										id="inputAddress2"
										value={1}
									/>
								</div>
								<div className="col-3">
									<label htmlFor="inputAddress2" className="form-label">
										Caracter Atendimento
									</label>
									<input
										type="text"
										className="form-control"
										id="inputAddress2"
										value={1}
									/>
								</div>
								<div className="col-3">
									<label htmlFor="inputAddress2" className="form-label">
										Atendimento RN
									</label>
									<input
										type="text"
										className="form-control"
										id="inputAddress2"
										value={1}
									/>
								</div>
								<div className="col-md-12 mb-2">
									<label htmlFor="inputPassword4" className="form-label">
										Procedimento
									</label>
									<select
										className="form-select"
										aria-label=".form-select-sm example"
									>
										<option>Selecione o procedimento</option>
										<option value="1">10101012 - Consulta Clinica Geral</option>
										<option value="2" selected>
											10101012 - Consulta Pediatra
										</option>
										<option value="3">10101012 - Consulta Psicologia</option>
									</select>
								</div>
								<div className="modal-footer">
									<div className="d-grid col-12">
										<div
											className="btn-group"
											role="group"
											aria-label="Basic outlined example"
										>
											<button type="submit" className="btn btn-outline-primary">
												Gravar Atendimento
											</button>

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
							</form>
						) : (
							""
						)}
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
