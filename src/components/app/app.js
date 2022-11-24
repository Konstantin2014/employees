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
    this.maxid = 4;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return { data: data.filter((item) => item.id !== id) };
    });
  };

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      like: false,
      id: this.maxid++,
    };
    this.setState(({ data }) => {
      const newArray = [...data, newItem];
      return {
        data: newArray,
      };
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
        <EmploersAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
