import axios from "axios";
// import Properties from "../../Properties";
var Properties = { SERVER_URL: "" };
const submitThankYouNote = (note) => {
  return axios.post(Properties.SERVER_URL + "/thankyou", note, {
    headers: {
      "Content-type": "application/json"
    }
  });
};
export { submitThankYouNote };
