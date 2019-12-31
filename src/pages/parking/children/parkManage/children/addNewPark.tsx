import React from 'react'

const AddNew: React.FC<{}> = function AddNew () {
  return (
    <div className="addNewPage">
      <section className="addTitle">新增停车场</section>
      <div className="addContent">
        <section className="fist">
          <div className="parkIdBox">
            <span>停车场ID：</span>
            <input type="text" name="parkId" id="parkId"/>
          </div>
          <div className="parkIdBox">
            <span>停车场名称：</span>
            <input type="text" name="parkName" id="parkName"/>
          </div>
          <div className="parkIdBox">
            <span>负责人：</span>
            <input type="text" name="addUser" id="addUser"/>
          </div>
          <div className="parkIdBox">
            <span>联系方式：</span>
            <input type="text" name="parkId" id="parkId"/>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AddNew
