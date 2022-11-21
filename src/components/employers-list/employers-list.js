import EmploersListItem from "../employers-list-item/employers-list-item";

import "./employers-list.css";

const EmploersList = () => {
  return (
    <ul className="app-list list-group">
      <EmploersListItem />
      <EmploersListItem />
      <EmploersListItem />
    </ul>
  );
};
export default EmploersList;
