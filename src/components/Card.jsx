function Card({ children, title, footer }) {
  return (
    <div className="shadow-xl rounded-xl overflow-hidden bg-white">
      {children}
    </div>
  );
}

function Title({ children }) {
  return (
    <div className={" p-4 border-b"}>
      <h1 className={"text-2xl text-slate-900"}>{children}</h1>
    </div>
  );
}

function Body({ children }) {
  return <div className={"leading-relaxed p-4 text-slate-900"}>{children}</div>;
}

function Footer({ children }) {
  return <div className={"bg-slate-50 text-slate-900 p-4"}>{children}</div>;
}

Card.Title = Title;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
