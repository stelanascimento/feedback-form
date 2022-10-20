const conexao = require("../connection.js");

const showFeedbacks = async (req, res) => {
  try {
    const { rows: users } = await conexao.query("select * from users");

    return res.status(200).json(users);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};
const registerFeedback = async (req, res) => {
  console.log(req.body);
  const { name, email, message } = req.body;
  console.log(name, email, message);
  //   if (!name) {
  //     return res.status(400).json("The name field is a must!");
  //   }
  //   if (!email) {
  //     return res.status(400).json("The email field is a must!");
  //   }
  //   if (!message) {
  //     return res.status(400).json("The message field is a must!");
  //   }
  try {
    const query = "insert into users (name, email, message) values($1, $2, $3)";
    const user = await conexao.query(query, [name, email, message]);
    console.log(user);

    if (user.rowCount === 0) {
      return res
        .status(400)
        .json("It was not possible to register the Feedback");
    }
    return res.status(200).json("Feedback was registred successfully");
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

module.exports = {
  showFeedbacks,
  registerFeedback,
};
