//day.toLocaleDateString("pt-BR", { weekday: "long" }).toUpperCase()

import { format, getDate, getMonth, getYear } from "date-fns";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../services/api";

const schema = yup
  .object({
    id: yup.string().notRequired(),
    titulo: yup.string().notRequired(),
    descricao: yup.string().required(),
    data: yup.date().required(),
    horario: yup.string().required(),
  })
  .required();

const events = [
  {
    id: 1,
    titulo: "Titulo",
    descricao: "Descricao",
    data: new Date(2022, 2, 17),
    horario: "08:00",
  },

  {
    id: 1,
    titulo: "Titulo",
    descricao: "Descricao",
    data: new Date(2022, 2, 17),
    horario: "10:00",
  },
];

const AgendaModal = ({ data, showModal, setShowModal }) => {
  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
  });
  const [horarios, setHorarios] = useState([]);
  const [loading, setLoading] = useState(false);

  const [profissionais, setProfissionais] = useState([]);

  const searchProfissionais = () => {
    api.get("/api/profissionais/").then((data) => {
      setProfissionais(data.data);
    });
  };

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

    const eventos = [];

    events.forEach((item) => {
      eventos.push(item.horario);
    });

    while (openTime < closeTime) {
      availableTimes.push(openTime.toTimeString().substring(0, 5));
      openTime.setMinutes(openTime.getMinutes() + 30);
    }

    const filtered = availableTimes.filter((value) => !eventos.includes(value));

    // console.log(filtered);

    setHorarios(filtered);
  };

  useEffect(() => {
    searchProfissionais();
    handleAvailableTimes();
  }, [data]);

  return showModal ? (
    <ModalStyle>
      <div className="modal-dialog modal-xl" style={{ width: "100%" }}>
        <div className="modal-content">
          <div className="modal-header justify-content-between">
            {data
              .toLocaleDateString("pt-BR", { weekday: "long" })
              .toUpperCase()}{" "}
            - {format(data, "dd/MM/yyyy")}
            <span
              style={{ fontSize: "22px", cursor: "pointer" }}
              onClick={handleCloseClick}
            >
              <i className="lar la-times-circle"></i>
            </span>
          </div>
          <div className="modal-body">
            <div className="container">
              <div className="row ">
                <div className="col d-flex justify-content-center">
                  <ul
                    className="list-group"
                    style={{ width: "100%", height: "50vh" }}
                  >
                    <p>Horarios Marcados para {format(data, "dd/MM/yyyy")}</p>
                    {events.map((item) => (
                      <div key={item.id}>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                          {item.horario}
                          <div>
                            {item.titulo}
                            <br />
                            {item.descricao}
                          </div>
                          <div>
                            <span className="badge bg-danger rounded-pill">
                              Excluir
                              <i className="las la-trash-alt"></i>
                            </span>
                          </div>
                        </li>
                      </div>
                    ))}
                    <p className="mt-4">
                      Horarios Livres para {format(data, "dd/MM/yyyy")}
                    </p>
                    <div className="overflow-auto" style={{ height: "500px" }}>
                      {horarios.map((item, key) => (
                        <div key={key}>
                          <li className="list-group-item d-flex justify-content-between align-items-center">
                            {item}
                            <span className="badge bg-primary rounded-pill">
                              Livre
                            </span>
                          </li>
                        </div>
                      ))}
                    </div>
                  </ul>
                </div>
                <div
                  className="col d-flex flex-column"
                  // style={{ height: "30%" }}
                >
                  <form>
                    <p>Adicionar Novo Evento</p>
                    <div className="form-floating m-2">
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        id="floatingInput"
                        placeholder="name@example.com"
                      />
                      <label htmlFor="floatingInput">Titulo</label>
                    </div>
                    <div className="form-floating m-2">
                      <textarea
                        className="form-control form-control-sm"
                        placeholder="Leave a comment here"
                        id="floatingTextarea"
                      ></textarea>
                      <label htmlFor="floatingTextarea">Descrição</label>
                    </div>
                    <div className="form-floating m-2">
                      <select
                        className="form-select"
                        id="floatingSelect"
                        aria-label="Floating label select example"
                      >
                        <option selected></option>
                        {profissionais && profissionais.length > 0 ? (
                          <>
                            {profissionais.map((profissional) => (
                              <option
                                key={profissional.id}
                                value={profissional.id}
                              >
                                {profissional.razaoSocial}
                              </option>
                            ))}
                          </>
                        ) : (
                          <option key={0} value="1">
                            Nenhum profissional encontrado.
                          </option>
                        )}
                      </select>
                      <label htmlFor="floatingSelect">Profissionais</label>
                    </div>
                    <div>
                      <label htmlFor="floatingSelect">Data</label>
                      <input
                        className="form-control form-control-sm p-2"
                        value={format(data, "yyyy-MM-dd")}
                        type="date"
                        placeholder=".form-control-sm"
                        aria-label=".form-control-sm example"
                      ></input>
                    </div>
                    <div className="form-floating m-2">
                      <select
                        className="form-select"
                        id="floatingSelect"
                        aria-label="Floating label select example"
                      >
                        <option selected></option>
                        {horarios.map((horario, index) => (
                          <option key={index}>{horario}</option>
                        ))}
                      </select>
                      <label htmlFor="floatingSelect">Horarios</label>
                    </div>
                    <div className="d-grid gap-2 mt-3">
                      {loading ? (
                        <button
                          className="btn btn-primary"
                          type="button"
                          disabled
                        >
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
              </div>
            </div>
          </div>
          <div className="modal-footer">
            {/* <button
              onClick={handleCloseClick}
              type="button"
              className="btn btn-outline-danger"
            >
              Cancelar
            </button> */}
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

export default AgendaModal;
