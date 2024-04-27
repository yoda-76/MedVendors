const { httpAxios } = require("@/helper/axioshelper");

export async function patientSignIn(details) {
  const result = await httpAxios
    .post("/api/patient/patientsignin/signin", details)
    .then((Response) => Response.data);
  return result;
}
export async function patientLogIn(loginDetails) {
  const result = await httpAxios
    .post("/api/patient/patientlogin", loginDetails)
    .then((response) => response.data);
  return result;
}
export async function sendOTP(details) {
  const result = await httpAxios
    .post("/api/patient/patientsignin/sendotp", details)
    .then((Response) => Response.data);
  return result;
}

export async function getPatientDetails(id, details) {
  const result = await httpAxios
    .get(`/api/patient/${id}`, details)
    .then((Response) => Response.data);
  return result;
}
