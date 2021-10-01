import axios from "axios";
const salaryUrl = "http://localhost:5000/salary";

export const getSal = async (_id) => {
  _id = _id || "";
  // console.log(axios.get(`${url}/${_id}`))
  return await axios.get(`${salaryUrl}/${_id}`);
};
export const addSal = async (user) => {
  return await axios.post(salaryUrl, user);
};

export const deleteSal = async (_id) => {
  return await axios.delete(`${salaryUrl}/${_id}`);
};

export const editSal = async (_id, user) => {
  return await axios.patch(`${salaryUrl}/${_id}`, user);
};
///Advance Api
const adv = "http://localhost:5000/advance";

export const getAdvance = async (_id) => {
  _id = _id || "";
  // console.log(axios.get(`${url}/${_id}`))
  return await axios.get(`${adv}/${_id}`);
};

export const addAdvance = async (user) => {
  return await axios.post(adv, user);
};



///Penalty Api
const penaltyUrl = "http://localhost:5000/penalty";

export const getPenalty = async (_id) => {
  _id = _id || "";
  // console.log(axios.get(`${url}/${_id}`))
  return await axios.get(`${penaltyUrl}/${_id}`);
};
export const addPenalty = async (user) => {
  return await axios.post(penaltyUrl, user);
};


////OverTime Api

const otUrl = "http://localhost:5000/overtime";

export const getOverTime = async (_id) => {
  _id = _id || "";
  // console.log(axios.get(`${url}/${_id}`))
  return await axios.get(`${otUrl}/${_id}`);
};
export const addOvertime = async (user) => {
  return await axios.post(otUrl, user);
};


/////Food Bill Api

const foodUrl = "http://localhost:5000/foodbill";

export const getBill = async (_id) => {
  _id = _id || "";
  // console.log(axios.get(`${url}/${_id}`))
  return await axios.get(`${foodUrl}/${_id}`);
};
export const addBill = async (user) => {
  return await axios.post(foodUrl, user);
};



///////////Salary master api
