//day.toLocaleDateString("pt-BR", { weekday: "long" }).toUpperCase()

import { format } from "date-fns";
import { useEffect, useState } from "react";
import styled from "styled-components";

const AgendaModalLista = ({ day, showModal, setShowModal }) => {
  const [horarios, setHorarios] = useState([]);

  const handleAvailableTimes = () => {
    const availableTimes = [];
    const openTime = new Date(0, 0, 0, 8, 0);
    const closeTime = new Date(0, 0, 0, 18, 0);

    while (openTime < closeTime) {
      availableTimes.push(openTime.toTimeString().substring(0, 5));
      openTime.setMinutes(openTime.getMinutes() + 30);
    }
    setHorarios(availableTimes);
  };

  const handleCloseClick = (e) => {
    e.preventDefault();
    setShowModal(!showModal);
  };

  useEffect(() => {
    handleAvailableTimes();
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
              {horarios.map((item, key) => (
                <div key={key}>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    {item}
                    <span className="badge bg-primary rounded-pill">Livre</span>
                    <div>
                      <span className="badge bg-secondary rounded-pill">
                        Alterar
                        <i className="las la-pen"></i>
                      </span>
                      <span className="badge bg-danger rounded-pill">
                        Excluir
                        <i className="las la-trash-alt"></i>
                      </span>
                    </div>
                  </li>
                </div>
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

  .modal-content {
    width: 100%;
    height: 50vh;
  }
`;

export default AgendaModalLista;
