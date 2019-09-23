const handleCustomErrors = (err, req, res, next) => {
  if (err.status) res.status(err.status).send({ msg: err.msg });
  else next(err);
};

const handle500s = (err, req, res, next) => {
  console.log(err);
  res.status(500).send({ msg: "Something has gone wrong" });
};

module.exports = { handleCustomErrors, handle500s };
