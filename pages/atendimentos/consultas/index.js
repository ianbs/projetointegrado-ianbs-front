/* eslint-disable @next/next/link-passhref */
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { format } from "date-fns";
import nookies, { parseCookies } from "nookies";

import HeadPage from "../../../src/Components/Head";
import SidebarComponent from "../../../src/Components/SideMenu/Sidebar";
import HeaderComponent from "../../../src/Components/Header";
import Link from "next/link";
import { api } from "../../../services/api";

export default function Consultas() {
  const [consultas, setConsultas] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [tipoModal, setTipoModal] = useState("");
  const [itemModal, setItemModal] = useState([]);

  const { push } = useRouter();

  useEffect(() => {
    searchConsulta();
  }, []);

  const searchConsulta = () => {
    api.get("consulta/",{headers: {
      "Access-Control-Allow-Origin": '*'
    }}).then((data) => {
      // console.log(data.data);
      setConsultas(data.data);
    });
  };

  const deleteConsulta = async (consultaID) => {
    await api.delete(`/consulta/${consultaID}`,{headers: {
      "Access-Control-Allow-Origin": '*'
    }}).then(() => {push("/atendimentos/consultas/")});
  };

  const ativaConsulta = async (consultaID) => {
    await api.put(`/consulta/active/${consultaID}`,{headers: {
      "Access-Control-Allow-Origin": '*'
    }}).then(() => {push("/atendimentos/consultas/")});
  };

  const cancelConsulta = async (consultaID) => {
    await api.put(`/consulta/cancel/${consultaID}`,{headers: {
      "Access-Control-Allow-Origin": '*'
    }}).then(() => {push("/atendimentos/consultas/")});
  };


  return (
    <div className="">
      <HeadPage pageTitle={"[Consultas]"} />
      <SidebarComponent
        ativo={"atendimentos"}
        subitem={"consulta"}
      ></SidebarComponent>
      <Main>
        <HeaderComponent title={"Atendimentos - Consultas"}></HeaderComponent>
        <MainContent>
          <div className="d-flex justify-content-between top-container mb-4">
            <Link href={`/atendimentos/consultas/add`} replace>
              <button type="button" className="btn btn-sm btn-outline-primary">
                Nova Consulta
              </button>
            </Link>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="Procurar atendimento"
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                >
                  Procurar
                </button>
              </div>
              <div className="list-search overflow-auto">
                <div className="list-group">
                  {consultas.map((consulta) => (
                    // <Link
                    //   key={consulta.id}
                    //   href={`/atendimentos/consultas/${consulta.id}`}
                    //   replace
                    //   className={consulta.cancelado ? "red-100" : ""}
                    // >
                      <div
                      
                        className={consulta.cancelado ? "border border-danger list-group-item list-group-item-action text-break" : "list-group-item list-group-item-action text-break"}
                        aria-current="true"
                      >
                        <div className="d-flex w-100 justify-content-between align-items-center">
                          <h6 className="mb-1">
                            <label>Paciente: {consulta.paciente.nome}</label>
                            <br />
                            <small>
                              Profissional: {consulta.profissional.nome}
                            </small>
                          </h6>
                        </div>
                        <div className="d-flex w-100 justify-content-between align-items-center">
                          <p className="mb-1">
                            <label>Convenio: {consulta.convenio.nome}</label>
                            <br />
                            <label>Data: {consulta.dataRealizacao}</label>
                          </p>
                          <small>
                            <div
                              className="btn-group btn-group-sm"
                              role="group"
                              aria-label="Basic outlined example"
                            >
                              <Link
                                href={`/atendimentos/consultas/${consulta.id}`}
                                replace
                              >
                                <a
                                  type="button"
                                  className="btn btn-outline-info"
                                >
                                  Detalhes
                                </a>
                              </Link>
                              <Link
                                href={`/atendimentos/consultas/attend/${consulta.id}`}
                                replace
                              >
                                <a
                                  type="button"
                                  className="btn btn-outline-info"
                                >
                                  Atender
                                </a>
                              </Link>
                              <Link
                                href={`/atendimentos/consultas/edit/${consulta.id}`}
                                replace
                              >
                                <a
                                  type="button"
                                  className="btn btn-outline-secondary"
                                >
                                  Editar
                                </a>
                              </Link>
                              {consulta.cancelado ? (
                                <button
                                type="button"
                                onClick={(e) => {
                                  ativaConsulta(consulta.id);
                                }}
                                className="btn btn-outline-danger"
                              >
                                Ativar
                              </button>
                              ) :  (<button
                                type="button"
                                onClick={(e) => {
                                  cancelConsulta(consulta.id);
                                }}
                                className="btn btn-outline-danger"
                              >
                                Cancelar
                              </button>)}
                              
                            </div>
                          </small>
                        </div>
                      </div>
                    // </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </MainContent>
      </Main>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const { projintegtoken: token } = parseCookies(ctx);
  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}

const Main = styled.main`
  margin-left: 260px;
`;

const MainContent = styled.main`
  margin-top: 50px;
  padding: 2rem 1.5rem;
  background: var(--white);
  min-height: calc(100vh - 90px);
  .card {
    width: 100%;
  }
  .list-search {
    height: 60vh;
  }
  .btn-group {
    width: 100%;
  }
`;
