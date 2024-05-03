import { httpAxios } from "@/helper/axioshelper";

export async function getMachineDetails( id) {
    
    const result = await httpAxios
      .get(`/api/machine/${id}`)
      .then((Response) => Response.data);
    return result;
  }
  

  export async function addMedicine( params) {
    console.log("params", params)
    const result = await httpAxios
  .patch(`/api/machine/${params.id}/addmedicine`,{ data: params.medicine })
  .then((response) => response.data);
return result;
  }
  