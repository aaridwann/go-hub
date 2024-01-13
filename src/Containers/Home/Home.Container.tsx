import React from "react";
import { connect } from "react-redux";

import HomeComponent from "./Home.Component";

interface StateRedux {
  notification: {
    value: number;
  };
}
function HomeContainer(props: StateRedux) {
  return <HomeComponent {...props} />;
}

const mapStateToProps = (state: StateRedux) => ({
  notification: state.notification,
});

export default connect(mapStateToProps, null)(HomeContainer);
