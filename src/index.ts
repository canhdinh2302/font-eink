import { renderEVnExpressHome } from "./eVnExpress/home/index";

$(document).ready(function () {
  const { hostname, pathname } = location;

  if (hostname === "e.vnexpress.net" && pathname === "/") {
    console.clear();
    renderEVnExpressHome();
  } else {
    $("body").css("display", "block");
  }
});
