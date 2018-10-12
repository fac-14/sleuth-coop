const { getSMEs } = require('./database/queries/index');

exports.get = (req, res) => {
  getSMEs()
    .then(result => {
      res.send(JSON.stringify(result));
    })
    .catch(err => console.log(err))

};

// const smesData = [
//   {
//     user_id: 1,
//     company_name: "Boom",
//     description:
//       "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis."
//   }
// ];
