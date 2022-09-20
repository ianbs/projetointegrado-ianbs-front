import styled from "styled-components";
import HeadPage from "../src/Components/Head";
import { useContext, useEffect, useState } from "react";
import {
  addDays,
  addMonths,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  isToday,
  startOfMonth,
  startOfWeek,
  subMonths,
} from "date-fns";
import HeaderComponent from "../src/Components/Header";
import SidebarComponent from "../src/Components/SideMenu/Sidebar";
import { parseCookies } from "nookies";
import { AuthContext } from "../contexts/AuthContext";
// import { api } from "../services/api";
import { ptBR } from "date-fns/locale";
import AgendaModal from "../src/Components/AgendaModal";
import { api } from "../services/api";

export default function Home() {
  const { user } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const [prof, setProf] = useState([]);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activeDate, setActiveDate] = useState(new Date());

  const getWeekDaysName = () => {
    const weekStartDate = startOfWeek(activeDate);
    const weekDays = [];
    for (let day = 0; day < 7; day++) {
      weekDays.push(
        <div key={day} className="week-name-day">
          {format(addDays(weekStartDate, day), "E", { locale: ptBR })}
        </div>
      );
    }
    return <div className="weekday-container">{weekDays}</div>;
  };

  const getDatesForCurrentWeek = (date, selectedDate, activeDate) => {
    let currentDate = date;
    const week = [];
    for (let day = 0; day < 7; day++) {
      const auxDate = currentDate;
      week.push(
        <div
          key={currentDate}
          className={`day ${
            isSameMonth(currentDate, activeDate) ? "" : "inactiveDay"
          } ${isSameDay(currentDate, selectedDate) ? "selectedDay" : ""} ${
            isToday(currentDate) ? "today" : ""
          }`}
          onClick={() => setSelectedDate(auxDate)}
        >
          {format(currentDate, "d")}
        </div>
      );
      currentDate = addDays(currentDate, 1);
    }
    return <>{week}</>;
  };

  const getDates = () => {
    const startOfTheSelectedMonth = startOfMonth(activeDate);
    const endOfTheSelectedMonth = endOfMonth(activeDate);
    const startDate = startOfWeek(startOfTheSelectedMonth);
    const endDate = endOfWeek(endOfTheSelectedMonth);

    let currentDate = startDate;
    const allWeek = [];

    while (currentDate <= endDate) {
      allWeek.push(
        getDatesForCurrentWeek(currentDate, selectedDate, activeDate)
      );
      currentDate = addDays(currentDate, 7);
    }

    return <div className="weekday-container">{allWeek}</div>;
  };

  return (
    <div className="">
      <HeadPage pageTitle={"[Início]"} />
      <SidebarComponent ativo={"inicio"} user={user}></SidebarComponent>
      <Main>
        <HeaderComponent title={"Dashboard"}></HeaderComponent>
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
                <div className="p-card">
                  <div className="p-card-header">
                    <h2>Próximos Pacientes</h2>
                    <button>
                      Ver todos <i className="lar la-eye"></i>
                    </button>
                  </div>
                  <div className="p-card-body">
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
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-calendar">
            <div className="calendar">
              <div className="c-card">
                <div className="c-card-header">
                  <div className="d-flex align-items-center justify-content-evenly">
                    <h2>
                      Agenda -{" "}
                      {format(activeDate, "MMMM yyyy", {
                        locale: ptBR,
                      }).toUpperCase()}
                    </h2>
                    <button
                      className="btn btn-outline-dark m-2"
                      type="button"
                      onClick={() => {
                        setShowModal(!showModal);
                        api.get("/profissional").then((data) => {
                          setProf(data.data);
                        });
                      }}
                    >
                      Adicionar <i className="las la-plus"></i>
                    </button>
                  </div>
                  <div className="d-flex">
                    <button
                      className="btn btn-outline-dark m-2"
                      type="button"
                      onClick={() => {
                        setSelectedDate(new Date());
                        setActiveDate(new Date());
                      }}
                    >
                      Hoje
                    </button>
                    <button
                      className="btn btn-outline-dark m-2"
                      type="button"
                      onClick={() => setActiveDate(subMonths(activeDate, 1))}
                    >
                      <i className="las la-angle-left"></i>
                    </button>
                    <button
                      className="btn btn-outline-dark m-2"
                      type="button"
                      onClick={() => setActiveDate(addMonths(activeDate, 1))}
                    >
                      <i className="las la-angle-right"></i>
                    </button>
                  </div>
                </div>
                <div className="c-card-body">
                  {getWeekDaysName()}
                  {getDates()}
                  <AgendaModal
                    data={selectedDate}
                    showModal={showModal}
                    setShowModal={setShowModal}
                    prof={prof}
                  ></AgendaModal>
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

export async function getServerSideProps(ctx) {
  const { projintegtoken: token } = parseCookies(ctx);
  console.log(token);

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
  margin-left: 265px;
`;

const MainContent = styled.main`
  margin-top: 80px;
  padding: 2rem 1.5rem;
  background: var(--white);
  min-height: calc(100vh -280px);
  min-width: fit-content;

  .cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 3fr;
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

    .grid-next-pacients {
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
      border-radius: 10px;
      background-color: var(--white);
      padding: 1rem;

      .p-card {
        .p-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
          h2 {
            font-size: 1rem;
            margin-right: 10px;
          }
          button {
            border: 1px solid rgba(0, 0, 0, 0.3);
            padding: 5px;
            border-radius: 10px;
            font-size: 1rem;
            background-color: var(--white);
          }
        }
      }
    }
  }

  .grid-calendar {
    height: max-content;
    width: 100%;
    display: flex;
    margin-top: 1.5rem;
    /* justify-content: space-between; */
    .c-card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    }
    .c-card-body {
      height: 45vh;
      overflow-y: scroll;
      padding-left: 1rem;
      padding-right: 1rem;
      padding-bottom: 1rem;

      .weekday-container {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        width: 75vw;

        .today {
          background-color: #a1f0eb !important;
        }

        .week-name-day {
          border: 1px solid rgba(3, 0, 0, 0.3);
          text-align: center;
          padding: 0.5rem;
        }

        .day {
          border: 1px solid rgba(0, 0, 0, 0.3);
          text-align: center;
          padding: 1rem;
          cursor: pointer;
        }

        .day::hover {
          background-color: #ccc;
        }

        .inactiveDay {
          color: #9e9e9e;
          cursor: not-allowed;
        }

        .selectedDay {
          color: white;
          background: #3366ff;
        }
      }
    }
  }
`;
