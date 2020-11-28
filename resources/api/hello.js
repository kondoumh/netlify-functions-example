exports.handler = async (e, c) => {
  console.log(e);
  console.log(c);
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/plain",
    },
    body: 'Hello World\n',
  };
};
