import http from "http";
import url from "url";
import querystring from "querystring";
import mime from "mime";

const server = http.createServer(function (request, response) {
  console.log(request.headers.host);
  const parsedUrl = new URL(request.url!, `http://${request.headers.host}/`);
  const resource = parsedUrl.pathname;

  if (resource.indexOf("/images/") === 0) {
    const imgPath = resource.slice(1);
    console.log("imgPath=" + imgPath);
    const imgMime = mime.getType(imgPath);
    console.log("mime=" + imgMime);
  }
});

server.listen(3001, function () {
  console.log("Server is running on port 3001");
});
