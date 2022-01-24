import Image from "next/image";
import styled from "styled-components";
import HeadPage from "./Components/Head";
import Day from "./Components/Day";
import { useEffect, useState } from "react";
import {
  eachDayOfInterval,
  endOfMonth,
  startOfMonth,
  daysInWeek,
} from "date-fns";

export default function Home() {
  const [allDays, setAllDays] = useState([]);

  const handleMonth = () => {
    const result = eachDayOfInterval({
      start: startOfMonth(new Date()),
      end: endOfMonth(new Date()),
    });
    console.log();
    setAllDays(result);
  };

  useEffect(() => {
    handleMonth();
  }, []);
  return (
    <div className="">
      <HeadPage pageTitle={"[Início]"} />
      <Sidebar>
        <div className="sidebar-brand">
          <h1>
            <span className="las la-stethoscope"></span> SGCC
          </h1>
        </div>
        <div className="sidebar-profile">
          <Image
            src="https://randomuser.me/api/portraits/men/73.jpg"
            width={"100px"}
            height={"100px"}
            className="profile-photo"
            alt="profile photo"
          ></Image>
          <h3>Jonh Doe</h3>
          <small>Super Admin</small>
        </div>
        <div className="sidebar-menu">
          <ul>
            <li>
              <a className="active">
                <i className="las la-home"></i>
                Início
              </a>
            </li>
            <li>
              <a>
                <i className="las la-comment-medical"></i>
                Atendimentos
              </a>
            </li>
            <li>
              <a>
                <i className="las la-users"></i>
                Cadastros
              </a>
            </li>
            <li>
              <a>
                <i className="las la-hand-holding-usd"></i>
                Financeiro
              </a>
            </li>
            <li>
              <a>
                <i className="las la-suitcase"></i>
                Administração
              </a>
            </li>
          </ul>
        </div>
      </Sidebar>
      <Main>
        <Header>
          <h1>
            <label>
              <i className="las la-bars"></i>
              Início
            </label>
          </h1>
          <div className="right-header">
            <div className="notification-wrapper">
              <i className="las la-bell"></i>
            </div>
            <div className="logout-wrapper">
              <i className="las la-sign-out-alt"></i>
              Logout
            </div>
          </div>
        </Header>
        <MainContent>
          <div className="cards">
            <div className="card-single">
              <div>
                <small>Médicos</small>
                <h1>4</h1>
              </div>
              <div>
                <i className="las la-user-nurse"></i>
              </div>
            </div>
            <div className="card-single">
              <div>
                <small>Consultorios</small>
                <h1>4</h1>
              </div>
              <div>
                <i className="las la-procedures"></i>
              </div>
            </div>
            <div className="card-single">
              <div>
                <small>Pacientes</small>
                <h1>10</h1>
              </div>
              <div>
                <i className="las la-user-injured"></i>
              </div>
            </div>
            <div className="grid-next-pacients">
              <div className="pacients">
                <div className="card">
                  <div className="card-header">
                    <h2>Próximos Pacientes</h2>
                    <button>
                      Ver todos <i className="lar la-eye"></i>
                    </button>
                  </div>
                  <div className="card-body">
                    <table width="100%">
                      <thead>
                        <tr>
                          <td>Nome</td>
                          <td>Médico</td>
                          <td>Consultório</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Joao</td>
                          <td>Mateus</td>
                          <td>C1</td>
                        </tr>
                        <tr>
                          <td>Maria</td>
                          <td>João</td>
                          <td>C2</td>
                        </tr>
                        <tr>
                          <td>Thiago</td>
                          <td>Tiago</td>
                          <td>C4</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-calendar">
            <div className="calendar">
              <div className="card">
                <div className="card-header">
                  <h2>Agenda</h2>
                  <button>
                    <i className="lar la-calendar-plus"></i>Novo agendamento
                  </button>
                </div>
                <div className="card-body">
                  <div className="month">
                    {allDays.map((item) => (
                      <Day key={item} day={item}></Day>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MainContent>
      </Main>

      <footer className=""></footer>
    </div>
  );
}

const Sidebar = styled.aside`
  width: 345px;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  background: var(--main-color);
  z-index: 100;
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
    height: 80px;
    padding: 1rem 0rem 1rem 1rem;
    text-align: center;
    font-size: 1.5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);

    span {
      display: inline-block;
      padding-right: 1rem;
    }
  }

  .sidebar-menu {
    margin-top: 1rem;
    li {
      width: 100%;
      margin-bottom: 1.3rem;
      padding-left: 1rem;
      .active {
        background: var(--white);
        padding-top: 1rem;
        padding-bottom: 1rem;
        color: var(--text-grey);
        border-radius: 1rem 0 0 1rem;
      }
    }

    a {
      display: block;
      font-size: 1.1rem;
      &:first-child {
        font-size: 1.2rem;
        padding-right: 1.5rem;
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
  }
`;

const Header = styled.header`
  display: flex;
  background-color: var(--white);
  justify-content: space-between;
  padding: 1rem;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  position: fixed;
  left: 345px;
  width: calc(100% - 345px);
  top: 0;
  z-index: 100;
  .right-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .notification-wrapper {
      margin-right: 1rem;
    }
    .logout-wrapper {
      margin-right: 1rem;
    }
  }
`;

const Main = styled.main`
  margin-left: 345px;
`;

const MainContent = styled.main`
  margin-top: 80px;
  padding: 2rem 1.5rem;
  background: var(--white);
  min-height: calc(100vh - 90px);

  .cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 2fr;
    grid-gap: 2rem;

    .card-single {
      display: flex;
      justify-content: space-between;
      background-color: var(--white);
      padding: 1.5rem;
      border-radius: 10px;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);

      h1 {
        color: var(--text-grey);
      }

      i:first-child {
        font-size: 4rem;
      }
      i:last-child {
        color: var(--text-grey);
      }
    }
  }

  table {
    border-collapse: collapse;
  }

  .grid-calendar {
    display: flex;
    margin-top: 1.5rem;
    justify-content: space-between;
    .card-header {
      display: inline-flex;
      align-items: center;
      margin-bottom: 1rem;
      button {
        margin-left: 1rem;
        padding: 1em;
        font-size: 1rem;
        background-color: var(--white);
        border: none;
        &:hover {
          background-color: var(--text-grey);
          color: var(--white);
          border-radius: 10px;
        }
      }
    }
    .card-body {
      .month {
        display: grid;
        width: max-content;
        /* width: calc(100vw - 400px); */
        grid-template-columns: repeat(11, 1fr);
        /* overflow-x: scroll; */
        .day {
          box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
          border-radius: 10px;
          padding: 1rem;
          text-align: center;
          .hours {
            display: grid;
            /* display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center; */
          }
        }
      }
    }
  }
`;
