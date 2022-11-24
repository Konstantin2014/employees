import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmploersList from "../employers-list/employers-list";
import EmploersAddForm from "../employers-add-form/employers-add-form";
import "./app.css";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "John Smidt", salary: 800, increase: false, id: 1 },
        { name: "Alex Fine", salary: 1500, increase: true, id: 2 },
        { name: "Max Blood", salary: 2000, increase: true, id: 3 },
      ],
    };
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      // const index = data.findIndex((elem) => elem.id === id);
      // const before = data.splice(0, index);
      // const after = data.splice(index + 1);
      // const newArray = [...before, ...after];
      // return {
      //   data: newArray,
      // };

      return { data: data.filter((item) => item.id !== id) };
    });
  };

  render() {
    return (
      <div className="app">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmploersList data={this.state.data} onDelete={this.deleteItem} />
        <EmploersAddForm />
      </div>
    );
  }
}

export default App;
