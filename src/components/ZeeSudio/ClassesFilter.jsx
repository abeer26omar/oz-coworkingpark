import React from "react";
import Button from "../UI/Button";

const ClassesFilter = ({}) => {
  return (
    <>
      <div className="container-fluid">
        <form className="form-filter">
          <div className="filter-component row g-3 d-flex align-items-center justify-content-around">
            <div className="col-xxl-2 col-md-2">
              <div className="input-group">
                <input
                  type="date"
                  name="date"
                  className="form__field placeholderSelect"
                  placeholder="Select date"
                />
              </div>
            </div>
            <div className="col-xxl-2 col-md-2">
              <div className="input-group">
                <input
                  type="date"
                  name="date"
                  className="form__field placeholderSelect"
                  placeholder="Select date"
                />
              </div>
            </div>
            {/* <div className="col-xxl-2 col-md-3"></div> */}
            <div className="col-xxl-2 col-md-3">
              <select
                id="facilities"
                name="facilities"
                className="form__field placeholderSelect"
                placeholder="Select class"
              >
                <option value=""></option>
              </select>
            </div>
            <div className="col-xxl-1 col-md-2">
              <div className="form-check">
                <input
                  id="favorites"
                  name="favorites"
                  type="checkbox"
                  className="form-check-input"
                />
                <label className="form-check-label" htmlFor="favorites">
                  Only Favorites
                </label>
              </div>
            </div>
            <div className="col-xxl-1 col-md-2">
              <Button
                tagType="button"
                type="submit"
                className="btn_outline_black text-center"
              >
                apply
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ClassesFilter;
