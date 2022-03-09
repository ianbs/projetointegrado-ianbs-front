import Link from "next/link";

export default function SubNav({ item, collapsed }) {
  return (
    <ul className={collapsed ? "hidden" : "show"}>
      {item.subNav?.map((subitem, index) => (
        <Link key={index} href={subitem.link}>
          <a key={index} style={{ textDecoration: "none" }}>
            <li key={index} className="nav-subitem">
              <div className="nav-icon"></div>
              <div className="nav-title">{subitem.title}</div>
            </li>
          </a>
        </Link>
      ))}
    </ul>
  );
}
