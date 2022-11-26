import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmploersList from "../employers-list/employers-list";
import EmploersAddForm from "../employers-add-form/employers-add-form";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: "John Smidt",
          salary: 800,
          increase: false,
          like: false,
          id: 1,
        },
        {
          name: "Alex Fine",
          salary: 1500,
          increase: false,
          like: false,
          id: 2,
        },
        {
          name: "Max Blood",
          salary: 2000,
          increase: false,
          like: false,
          id: 3,
        },
      ],
      term: "",
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

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  };

  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  render() {
    const { data, term } = this.state;
    const employees = this.state.data.length;
    const increased = this.state.data.filter((item) => item.increase).length;
    const visibleData = this.searchEmp(data, term);

    return (
      <div className="app">
        <AppInfo employees={employees} increased={increased} />
        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter />
        </div>
        <EmploersList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmploersAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
