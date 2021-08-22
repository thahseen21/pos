const TableView = ({ currentTable, tableCount, setTable, tableToggler }) => {
  return (
    <div className="tables-contain">
      {tableCount.map((item) => {
        return (
          <li
            key={item}
            onClick={() => {
              setTable(item);
              tableToggler();
            }}
            className="table-item"
          >
            <p>{item}</p>
          </li>
        );
      })}
    </div>
  );
};

export default TableView;
