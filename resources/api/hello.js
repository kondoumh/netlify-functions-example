exports.handler = async (e, c) => {
  console.log(e);
  console.log(c);
  const fetch = require('node-fetch').default;
  const url = "https://scrapbox.io/api/pages/kondoumh?limit=10";
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
