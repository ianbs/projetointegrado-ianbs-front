import Image from "next/image";
import Link from "next/link";
import { parseCookies } from "nookies";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { AuthContext } from "../../../contexts/AuthContext";
import NavBarItem from "./NavBarItem";
import SidebarData from "./SidebarData";

export default function SidebarComponent({ ativo, subitem, user }) {
  const [username, setUsername] = useState("");
  const context = useContext(AuthContext);

  useEffect(() => {
    const { username } = parseCookies(context);
    setUsername(username);
  }, [username, context]);

  return (
    <Sidebar>
      <div className="sidebar-brand">
        <h1>
          <span className="las la-stethoscope"></span> SGCC
        </h1>
      </div>
      <div className="sidebar-profile">
        <Image
          src="https://avatars.dicebear.com/api/pixel-art-neutral/medic.svg"
          width={"80px"}
          height={"80px"}
          className="profile-photo"
          alt="profile photo"
        ></Image>
        <h5>{username}</h5>

        <small>Super Admin</small>
      </div>
      <ul className="sidebar-list nav flex-column">
        {SidebarData.map((item, key) => (
          <NavBarItem key={key} ativo={ativo} item={item} />
        ))}
      </ul>
      {/* <div className="sidebar-menu">
        <ul>
          <li>
            <Link href={`/`}>
              <a
                onClick={() => {
                  setAtendimentoCollapse(false);
                  setCadastroCollapse(false);
                  setFinanceiroCollapse(false);
                  setAdministracaoCollapse(false);
                }}
                className={ativo === "inicio" ? "active" : ""}
              >
                <i className="las la-home"></i>
                Início
              </a>
            </Link>
          </li>
          <li>
            <a
              onClick={() => {
                setAtendimentoCollapse(true);
                setCadastroCollapse(false);
                setFinanceiroCollapse(false);
                setAdministracaoCollapse(false);
              }}
              className={ativo === "atendimento" ? "active" : ""}
            >
              <i className="las la-comment-medical"></i>
              Atendimentos
            </a>

            <ul
              className={
                atendimentoCollapse
                  ? "subitem-menu show"
                  : "subitem-menu hidden"
              }
            >
              <li>
                <Link href={`/atendimentos/consultas`}>
                  <a
                    className={subitem === "consulta" ? "sub-item-active" : ""}
                  >
                    Consultas
                  </a>
                </Link>
              </li>
              <li>
                <Link href={`/atendimentos/exames`}>
                  <a className={subitem === "exames" ? "sub-item-active" : ""}>
                    Exames
                  </a>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <a
              onClick={() => {
                setCadastroCollapse(true);
                setAtendimentoCollapse(false);
                setFinanceiroCollapse(false);
                setAdministracaoCollapse(false);
              }}
              className={ativo === "cadastros" ? "active" : ""}
            >
              <i className="las la-users"></i>
              Cadastros
            </a>
            <ul
              className={
                cadastroCollapse ? "subitem-menu show" : "subitem-menu hidden"
              }
            >
              <li>
                <Link href={`/cadastros/convenios`}>
                  <a
                    className={subitem === "convenio" ? "sub-item-active" : ""}
                  >
                    Convênios
                  </a>
                </Link>
              </li>
              <li>
                <Link href={`/cadastros/medicos`}>
                  <a className={subitem === "medico" ? "sub-item-active" : ""}>
                    Médicos
                  </a>
                </Link>
              </li>
              <li>
                <Link href={`/cadastros/pacientes`}>
                  <a
                    className={subitem === "pacientes" ? "sub-item-active" : ""}
                  >
                    Pacientes
                  </a>
                </Link>
              </li>
              <li>
                <Link href={`/cadastros/colaborador`}>
                  <a
                    className={
                      subitem === "colaborador" ? "sub-item-active" : ""
                    }
                  >
                    Colaborador
                  </a>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <a
              onClick={() => {
                setCadastroCollapse(false);
                setAtendimentoCollapse(false);
                setFinanceiroCollapse(true);
                setAdministracaoCollapse(false);
              }}
              className={ativo === "financeiro" ? "active" : ""}
            >
              <i className="las la-hand-holding-usd"></i>
              Financeiro
            </a>
            <ul
              className={
                financeiroCollapse ? "subitem-menu show" : "subitem-menu hidden"
              }
            >
              <li>
                <Link href={`/financeiro/consultas`}>
                  <a
                    className={
                      subitem === "faturaconsulta" ? "sub-item-active" : ""
                    }
                  >
                    Faturar Consultas
                  </a>
                </Link>
              </li>
              <li>
                <Link href={`/financeiro/exames`}>
                  <a
                    className={
                      subitem === "faturaexames" ? "sub-item-active" : ""
                    }
                  >
                    Faturar Exames
                  </a>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <a
              onClick={() => {
                setCadastroCollapse(false);
                setAtendimentoCollapse(false);
                setFinanceiroCollapse(false);
                setAdministracaoCollapse(true);
              }}
              className={ativo === "administracao" ? "active" : ""}
            >
              <i className="las la-suitcase"></i>
              Administração
            </a>
            <ul
              className={
                administracaoCollapse
                  ? "subitem-menu show"
                  : "subitem-menu hidden"
              }
            >
              <li>
                <Link href={`/administracao/permissoes`}>
                  <a
                    className={
                      subitem === "permissoes" ? "sub-item-active" : ""
                    }
                  >
                    Permissoes de Usuários
                  </a>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div> */}
    </Sidebar>
  );
}

const Sidebar = styled.aside`
  width: 250px;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  background: var(--main-color);
  /* z-index: 10; */
  .sidebar-profile {
    text-align: center;
    margin-bottom: 1.5rem;
    margin-top: 10px;
    h3 {
      margin-top: 1rem;
      margin-bottom: 1;
    }
    .profile-photo {
      border-radius: 50%;
    }
  }

  .sidebar-brand {
    height: 70px;
    padding: 1rem 0rem 1rem 1rem;
    text-align: center;
    /* font-size: 1.2rem; */
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);

    span {
      display: inline-block;
      padding-right: 1rem;
    }
  }

  .hidden {
    display: none;
    visibility: collapse;
  }

  .show {
    display: block;
    visibility: visible;
  }

  .active {
    background: var(--text-grey);
  }

  .sidebar-list {
    height: auto;
    width: 100%;
    padding: 0;
    .row {
      margin: 0%;
      width: 100%;
      height: 60px;
      display: flex;
      color: var(--color-dark);
      justify-content: center;
      align-items: center;

      &:hover {
        cursor: pointer;
        background-color: var(--text-grey);
        color: var(--white);
      }

      .nav-icon {
        width: 30px;
        height: 30px;
        flex: 30%;
        display: grid;
        place-items: center;
      }
      .nav-title {
        flex: 70%;
      }
    }

    .nav-subitem {
      margin: 0%;
      width: 100%;
      background-color: var(--text-grey);
      height: 60px;
      display: flex;
      color: white;
      justify-content: center;
      align-items: center;

      &:hover {
        background-color: var(--text-grey);
        color: var(--white);
      }

      .nav-icon {
        width: 30px;
        height: 30px;
        flex: 30%;
        display: grid;
        place-items: center;
      }
      .nav-title {
        flex: 70%;
      }
    }
  }

  /* .sidebar-menu {
    margin-top: 1rem;
    
    overflow: hidden;
    li {
      width: 100%;
      

      padding-left: 1rem;
      .active {
        background: var(--text-grey);
        padding-top: 0.8rem;
        padding-bottom: 0.8rem;
        color: var(--white);
        border-radius: 1rem 0 0 1rem;
      }
      .sub-item-active {
        background: var(--white);
        color: var(--text-grey);
        border-radius: 1rem 0 0 1rem;
      }
      .subitem-menu {
        width: 100%;
        height: 100%;
        overflow: hidden;
        a {
          padding-top: 0.8rem;
          padding-bottom: 0.8rem;
        }
      }
    }

    .hidden {
      display: none;
      visibility: collapse;
    }

    .show {
      display: block;
      visibility: visible;
    }

    a {
      display: block;
      padding-left: 1rem;
      text-decoration: none;
      padding-top: 0.8rem;
      padding-bottom: 0.8rem;
      color: var(--color-dark);
      &:first-child {
        font-size: 1rem;
        /* padding-right: 1.5rem;
      }
      &:hover {
        background-color: var(--text-grey);
        padding-top: 1rem;
        padding-bottom: 1rem;
        color: var(--white);
        border-radius: 1rem 0 0 1rem;
      }
    }
    i {
      &:first-child {
        font-size: 1.2rem;
        padding-right: 1.5rem;
      }
    }
  } */
`;
