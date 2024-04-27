const client = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_AUTHTOKEN);

export const sendOtp = async (body, to) => {
    try{
      const response = await client.messages.create({
        body: body,
        to: to,
        from: process.env.TWILIO_CONTACT,
      });
      return response;
    }
    catch(error){
      return "Ivalid contact number."
    }
}

