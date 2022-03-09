import styled from "styled-components";

export default function HeaderComponent({ title }) {
  return (
    <Header>
      <h4>
        <label>
          <i className="las la-bars"></i>
          {title}
        </label>
      </h4>
      <div className="right-header">
        <div className="notification-wrapper">
          <i className="las la-bell"></i>
        </div>
        <a href={`/logout`}>
          <div className="logout-wrapper">
            <i className="las la-sign-out-alt"></i>
            Logout
          </div>
        </a>
      </div>
    </Header>
  );
}

const Header = styled.header`
  display: flex;
  background-color: var(--white);
  justify-content: space-between;
  padding: 1rem;
  /* box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); */
  border-bottom: solid 1px rgba(0, 0, 0, 0.3);
  position: fixed;
  left: 250px;
  width: calc(100% - 250px);
  top: 0;
  .right-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      text-decoration: none;
      color: var(--color-dark);
    }
    .notification-wrapper {
      margin-right: 1rem;
    }
    .logout-wrapper {
      margin-right: 1rem;
      cursor: pointer;
    }
  }
`;
