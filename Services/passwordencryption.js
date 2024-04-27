const bcrypt = require('bcrypt');
export const passwordencryption = (myPlaintextPassword) => {
  bcrypt.hash(myPlaintextPassword, 10 , function (err, hash) {
    try {
      if (err) throw err;
      else return hash;
    } catch (err) {
      console.log(err);
    }
  });
};
