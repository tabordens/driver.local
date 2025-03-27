export default async function handler(req, res) {
  if (req.method === "POST") {
    const timestamp = new Date().toISOString();
    const ip =
      req.headers["x-forwarded-for"] || req.connection.remoteAddress;

    const data = {
      timestamp,
      ip,
      ...req.body,
    };

    console.log("Collected Data:", JSON.stringify(data, null, 2));
  }

  res.status(200).json({ status: "ok" });
}
