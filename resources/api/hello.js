exports.handler = async (e, c) => {

  console.log(c)

  const header = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "*"
  };

  const project = e.headers.project
  if (!project) {
    return {
      statusCode: 400,
      headers: header,
      body: JSON.stringify({error: "Project name is required!"}),
    };
  }
  const connect_sid = e.headers.connect_sid

  const fetch = require("node-fetch").default;
  const url = `https://scrapbox.io/api/pages/${project}`;
  const ops = {
    headers: {
      cookie: connect_sid
    }
  }
  const res = await fetch(url, ops);
  const data = await res.json();
  if (res.status !== 200) {
    return {
      statusCode: res.status,
      headers: header,
      body: JSON.stringify(data),
    }
  }
  console.log(data.projectName + " : " + data.count);
  return {
    statusCode: 200,
    headers: header,
    body: JSON.stringify(data),
  };
};
