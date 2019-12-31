import React, { PropsWithChildren } from "react";
import { useSelector, useDispatch } from "react-redux";

const Park: React.FC<PropsWithChildren<any>> = function Park(props) {

  const parkId = useSelector(state => (state as any).getIn(['parkingSearch', 'parkId']));
  const parkName = useSelector(state => (state as any).getIn(['parkingSearch', 'parkName']));
  const dispatch = useDispatch();

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    if (ev.target.className === "parkID") {
    dispatch({type: 'pushParkId', parkId: ev.target.value})
    } else if (ev.target.className === "parkName") {
    dispatch({type: 'pushParkName', parkName: ev.target.value})
    }
  };

  return (
    <div style={{ flex: 2 }}>
      <div className="parkIdBox">
        <span>停车场ID：</span>
        <input
          type="text"
          onChange={handleChange}
          value={parkId}
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
          value={parkName}
          name="parkName"
          className="parkName"
          id="parkName"
        />
      </div>
    </div>
  );
};


export default Park;
