import { format } from "https://deno.land/std@0.149.0/datetime/mod.ts";

export default () => {
  const now = format(new Date(), "yyyy-MM-dd HH:mm:ss.SSS");
  return new Response(now);
}
