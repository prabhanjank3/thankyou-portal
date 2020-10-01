var pastdata = [
  {
    id: "1",
    thankyou_title: "First Title",
    thankyou_descr: "This is description of first title"
  },
  {
    id: "2",
    thankyou_title: "Second Title",
    thankyou_descr: "This is description of second title"
  }
];
var initialstore = {
  isUserLoggedIn: true,
  prevMiracles: pastdata
};
const reducer = (state = initialstore, action) => {
  return state;
};
export default reducer;
