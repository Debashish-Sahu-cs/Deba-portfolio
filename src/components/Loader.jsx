import "./loader.css";

export default function Loader() {
  return (
    <div className="loader-container">
      <div className="energy-core">
        <div className="ring ring-1"></div>
        <div className="ring ring-2"></div>
        <div className="ring ring-3"></div>
        <div className="core"></div>
      </div>
    </div>
  );
}