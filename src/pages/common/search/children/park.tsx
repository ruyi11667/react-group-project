import React from "react";
import { connect } from "react-redux";

const Park: React.FC<{}> = function Park() {
  return (
    <div style={{flex: 2}}>
      <div className="parkIdBox">
        <span>停车场ID：</span>
        <input type="text" name="parkID" className="parkID" id="parkID" />
      </div>
      <div className="parkNameBox">
        <span>停车场名称：</span>
        <input type="text" name="parkName" className="parkName" id="parkName" />
      </div>
    </div>
  );
};

const mapStateToProps = (state: { parkingSearch: { parkId: any } }) => {
  return {
    parkId: state.parkingSearch.parkId
  };
};

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Park);
