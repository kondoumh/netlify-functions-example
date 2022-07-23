import { Context } from "netlify:edge";

export default async (req: Request, { next, geo }: Context) => {
  const res = await next();
  let text = await res.text();

  // if (geo.country.code === "JP") {
  //   text = text.replaceAll("Hello", "こんにちは");
  // }

  return new Response(text, res);
};
