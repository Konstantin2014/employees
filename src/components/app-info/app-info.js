import "./app-info.css";

const AppInfo = ({ increased, employees }) => {
  return (
    <div className="app-info">
      <h1>Учет сотрудников компании N</h1>
      <h2>Щбщее число сотрудников: {employees}</h2>
      <h2>Премии получат: {increased}</h2>
    </div>
  );
};
export default AppInfo;
