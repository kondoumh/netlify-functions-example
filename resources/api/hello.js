exports.handler = async (e) => {

  let data = {}
  data.message = "Hello world!";
  data.timestamp = Date.now();
  return {
    statusCode: 200,
    body: JSON.stringify(data)
  };
};
