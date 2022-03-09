//day.toLocaleDateString("pt-BR", { weekday: "long" }).toUpperCase()

import { format, getDate, getMonth, getYear } from "date-fns";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    paciente: yup.string().notRequired(),
    descricao: yup.string().required(),
    profissional: yup.string().required(),
    dataAgendamento: yup.date().required(),
  })
  .required();

const AgendaModalForm = ({ day, showModal, setShowModal }) => {
  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
  });
  const [horarios, setHorarios] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleCloseClick = (e) => {
    e.preventDefault();
    setShowModal(!showModal);
  };

  const handleAgendaSubmit = (data) => {
    setLoading(true);
    console.log(data);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    reset();
  };

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
            <form onSubmit={handleSubmit(handleAgendaSubmit)}>
              <div className="row g-3 align-items-center">
                <div className="col-auto">
                  <label htmlFor="paciente" className="col-form-label">
                    Paciente
                  </label>
                </div>
                <div className="col-auto">
                  <input
                    {...register("paciente")}
                    type="text"
                    id="paciente"
                    className="form-control form-control-sm"
                  />
                </div>
              </div>
              <div className="row g-3 align-items-center">
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea"
                    {...register("descricao")}
                  ></textarea>
                  <label htmlFor="floatingTextarea">Descrição</label>
                </div>
              </div>
              <div className="row g-3 align-items-center">
                <div className="col-auto">
                  <label htmlFor="profissional" className="col-form-label">
                    Profissional
                  </label>
                </div>
                <div className="col-auto">
                  <input
                    {...register("profissional")}
                    type="text"
                    id="profissional"
                    className="form-control form-control-sm"
                  />
                </div>
              </div>
              <div className="row g-3 align-items-center">
                <div className="col-auto">
                  <label htmlFor="" className="col-form-label">
                    Horário
                  </label>
                </div>
                <div className="col-auto">
                  <select
                    className="form-select form-select-sm"
                    aria-label=".form-select-sm example"
                    {...register("dataAgendamento")}
                  >
                    {horarios.map((horario, key) => (
                      <option
                        key={key}
                        value={
                          new Date(
                            getYear(day),
                            getMonth(day),
                            getDate(day),
                            horario.substring(0, 2),
                            horario.substring(3, 6)
                          )
                        }
                      >
                        {horario}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="d-grid gap-2 mt-3">
                {loading ? (
                  <button className="btn btn-primary" type="button" disabled>
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Loading...
                  </button>
                ) : (
                  <button className="btn btn-primary" type="submit">
                    Agendar Horário
                  </button>
                )}
              </div>
            </form>
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

  .form-control {
    width: 100%;
  }
`;

export default AgendaModalForm;
