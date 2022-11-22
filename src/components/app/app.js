import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmploersList from "../employers-list/employers-list";
import EmploersAddForm from "../employers-add-form/employers-add-form";
import "./app.css";

function App() {
  const data = [
    { name: "John Smidt", salary: 800, increase: false, id: 1 },
    { name: "Alex Fine", salary: 1500, increase: true, id: 2 },
    { name: "Max Blood", salary: 2000, increase: true, id: 3 },
  ];

  return (
    <div className="app">
      <AppInfo />
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmploersList data={data} />
      <EmploersAddForm />
    </div>
  );
}

export default App;
