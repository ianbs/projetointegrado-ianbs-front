import Link from "next/link";
import { useState } from "react";
import SubNav from "./SubNav";

export default function NavBarItem({ item, ativo }) {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <>
      {item.link ? (
        <Link href={"/"}>
          <a className="nav-item" style={{ textDecoration: "none", fontSize: '14px' }}>
            <li
              className={
                item.ativo == ativo ? "nav-item row active" : "nav-item row"
              }
              onClick={() => setCollapsed(!collapsed)}
            >
              <div className="nav-icon">{item.icon}</div>
              <div className="nav-title">{item.title}</div>
            </li>
          </a>
        </Link>
      ) : (
        <li
          className={
            item.ativo == ativo ? "nav-item row active" : "nav-item row"
          }
          onClick={() => setCollapsed(!collapsed)}
        >
          <div className="nav-icon">{item.icon}</div>
          <div className="nav-title">{item.title}</div>
        </li>
      )}
      <SubNav item={item} collapsed={collapsed} />
    </>
  );
}
