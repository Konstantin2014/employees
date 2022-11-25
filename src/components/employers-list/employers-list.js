import EmploersListItem from "../employers-list-item/employers-list-item";

import "./employers-list.css";

const EmploersList = ({ data, onDelete, onToggleIncrease, onToggleLike }) => {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <EmploersListItem
        key={id}
        {...itemProps}
        onDelete={() => {
          onDelete(id);
        }}
        onToggleIncrease={() => {
          onToggleIncrease(id);
        }}
        onToggleLike={() => {
          onToggleLike(id);
        }}
      />
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmploersList;
