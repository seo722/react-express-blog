const path = require("path");
const model = require("./model");

const AWS = require("aws-sdk");
AWS.config.loadFromPath(path.join(__dirname, "config", "awsConfig.json"));

module.exports = {
  needs: () => upload,
  api: {
    getData: (req, res) => {
      model.api.getData((data) => {
        return res.send(data);
      });
    },
    addData: (req, res) => {},
    modifyData: (req, res) => {},
    deleteData: (req, res) => {},
  },
};

//mvc 패턴 할당하기 용 controller
