const path = require("path");

const home = (req, res) => {
  return res.sendFile(path.join(`${__dirname}/../../../client/src/components/index.html`));
};

module.exports = {
  getHome: home
};