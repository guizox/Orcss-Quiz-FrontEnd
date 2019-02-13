import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { requestCardsAction } from "../../container/redux/actions/cardAction";

const Test = props => (
  <div>Funcionando {console.log(props.requestCardsAction())}</div>
);

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestCardsAction }, dispatch);
export default connect(
  null,
  mapDispatchToProps
)(Test);
