exports.handler = async (e, c) => {
  console.log(e);
  console.log(c);
  return {
    statusCode: 200,
    body: 'Hello World\n',
  };
};
