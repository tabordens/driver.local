export default async function handler(req, res) {
  const ip =
    req.headers["x-forwarded-for"] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress;

  const userAgent = req.headers["user-agent"];
  const timestamp = new Date().toISOString();

  const logEntry = {
    ip,
    userAgent,
    timestamp,
  };

  console.log("Visitor:", logEntry);

  const redirectUrl = "https://google.com"; // <-- change this if you want
  res.writeHead(302, { Location: redirectUrl });
  res.end();
}
