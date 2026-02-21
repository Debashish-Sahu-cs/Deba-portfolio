import "./loader.css";
export default function Loader() {
  return (
    <div className="loader-container">
      <img src={import.meta.env.BASE_URL + "images/infinite-loader.gif"} alt="Loading..." />
    </div>
  );
}