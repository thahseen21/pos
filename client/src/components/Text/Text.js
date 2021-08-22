import "./style.css";

export const Shade = ({ text }) => {
  return <p className="ligth-text">{text}</p>;
};

export const Text = ({ children }) => {
  return <p className="dark-text">{children}</p>;
};

export const H1 = ({ text, style }) => {
  return (
    <p className="h1" style={style}>
      {text}
    </p>
  );
};

export const H2 = ({ text, style, id }) => {
  return (
    <p className="h2" style={style} id={id}>
      {text}
    </p>
  );
};
