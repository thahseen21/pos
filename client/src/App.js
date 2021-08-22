import { connect } from "react-redux";

import Order from "./container/Order/Order";
import { dismissError } from "./store/action/error";
import Toast from "./components/Toast/Toast";

import "./App.css";

function App({ errorList, removeItem }) {
  return (
    <div className="App primary-color">
      <Order />
      <Toast errorList={errorList} removeItem={removeItem} />
    </div>
  );
}

const mapStateToProps = ({ Error }) => {
  return {
    errorList: Error.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (data) => dispatch(dismissError(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
