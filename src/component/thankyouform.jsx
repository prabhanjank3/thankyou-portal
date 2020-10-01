import React from "react";
import { Button, Form } from "react-bootstrap";
import { formik, useFormik } from "formik";
import { submitThankYouNote } from "../Utilities/CommonFunctions";
import "./thankyouportal.css";
export default () => {
  const formik = useFormik({
    initialValues: {
      thankyou_for: "",
      thankyou_details: "",
      starred: false
    },
    onSubmit: (values) => {
      submitThankYouNote(values).then((resp) => {
        if (resp.status === 200) {
          alert("Thank You Note Delivered to Universe Successfully!");
        } else {
          alert("Error Occured. Please try again!");
        }
      });
    }
  });
  const add_details_listener = () => {
    document.getElementById("thankyou-descr-input-id").style.visibility =
      "visible";
  };
  return (
    <Form>
      <Form.Group>
        <div className="thankyouform-btn-panel">
          <Button className="add-details-btn" onClick={add_details_listener}>
            Add Details
          </Button>
        </div>
        <input
          type="text"
          className="thankyou-for-input"
          placeholder="What this thank you is for?"
          name="thankyou_for"
          onChange={formik.handleChange}
        />
        <textarea
          id="thankyou-descr-input-id"
          name="thankyou_details"
          onChange={formik.handleChange}
          className="thankyou-descr-input"
          rows="10"
          cols="125"
          placeholder="Add description"
          style={{ visibility: "hidden" }}
        />
        <div>
          <Button className="say-thankyou-btn" onClick={formik.handleSubmit}>
            Thank You!
          </Button>
        </div>
      </Form.Group>
    </Form>
  );
};
