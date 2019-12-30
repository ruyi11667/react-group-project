import React, { PropsWithChildren } from "react";
import { connect } from "react-redux";

const Park: React.FC<PropsWithChildren<any>> = function Park(props) {
  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    if (ev.target.className === "parkID") {
      props.pushParkId(ev.target.value);
    } else if (ev.target.className === "parkName") {
      props.pushParkName(ev.target.value);
    }
  };

  return (
    <div style={{ flex: 2 }}>
      <div className="parkIdBox">
        <span>停车场ID：</span>
        <input
          type="text"
          onChange={handleChange}
          name="parkID"
          className="parkID"
          id="parkID"
        />
      </div>
      <div className="parkNameBox">
        <span>停车场名称：</span>
        <input
          type="text"
          onChange={handleChange}
          name="parkName"
          className="parkName"
          id="parkName"
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state: {
  parkingSearch: { parkId: any; parkName: any };
}) => {
  return {
    parkId: state.parkingSearch.parkId,
    parkName: state.parkingSearch.parkName
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  pushParkId(str: String) {
    dispatch({
      type: "pushParkId",
      parkId: str
    });
  },
  pushParkName(str: String) {
    dispatch({
      type: "pushParkName",
      parkName: str
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Park);
