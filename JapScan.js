// ==UserScript==
// @name Japscan Adblock Bypass
// @namespace JapScan
// @version 1.0
// @description Bypass the adblock detection on Japscan manga website
// @match https://*/*
// @grant none
// ==/UserScript==

(function () {
  var originalFunction = window.a0W;
  window.a0W = function (arg) {
  };
  document.querySelector("#single-reader").addEventListener("click", function () {
    var path = window.location.pathname;
    var currentPage = path.split("/").pop();
    var newURL;
    if (currentPage.endsWith(".html")) {
      var pageNumber = parseInt(currentPage.replace(".html", ""), 10);
      var totalPages = document.querySelector(".ss-list").childElementCount;
      if (!isNaN(pageNumber) && pageNumber < totalPages) {
        pageNumber++;
        newURL = window.location.origin + path.replace(currentPage, pageNumber + ".html");
      }
    } else {
      newURL = window.location.origin + path + "2.html";
    }
    window.location.href = newURL;
  });
})();
