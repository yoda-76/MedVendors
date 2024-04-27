const { httpAxios } = require("@/helper/axioshelper");

export async function sendOTP(details) {
  const result = await httpAxios
    .post("/api/vendor/vendorsignin/sendotp", details)
    .then((Response) => Response.data);
  return result;
}
export async function vendorSignIn(details) {
  const result = await httpAxios
    .post("/api/vendor/vendorsignin/verifyotp", details)
    .then((Response) => Response.data);
  return result;
}

export async function vendorLogIn(details) {
  const result = await httpAxios
    .post("/api/vendor/vendorlogin", details)
    .then((Response) => Response.data);
  return result;
}

export async function addMachine(id, details) {
  const result = await httpAxios
    .post(`/api/vendor/${id}/addmachine`, details)
    .then((Response) => Response.data);
  return result;
}

export async function getVendorDetails(id) {
  const result = await httpAxios
    .get(`/api/vendor/${id}`)
    .then((Response) => Response.data);
  return result;
}
