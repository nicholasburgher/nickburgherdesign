function loadPictures(tnm, nm, format, ct) {
  var cardColumns = document.querySelector("#gallery div.card-columns");
  for (var i = 0; i < ct; i++) {
    var formattedNumber = ("0" + (i + 1)).slice(-2);
    console.log(formattedNumber);
    var divElem = document.createElement("div");
    divElem.setAttribute("class", "card");
    var imgElem = document.createElement("img");
    imgElem.setAttribute("class", "card-img-top");
    imgElem.src = "images/thumbs/" + tnm + formattedNumber + "." + format;
    imgElem.setAttribute("onclick","loadModal('" + tnm + formattedNumber + "." + format + "','" + nm + "_" + formattedNumber + "." + format + "','" + nm + "');");
    imgElem.setAttribute("data-toggle","modal");
    imgElem.setAttribute("data-target","#previewModal");
    divElem.appendChild(imgElem);
    cardColumns.appendChild(divElem);
  }
}

function loadModal(thumbName,fullName, folderName) {
  document.getElementById("previewTitle").innerHTML = "";
  document.getElementById("selectedImg").src = "images/thumbs/" + thumbName;
  var modalDownloadLink = document.getElementById("modalDownloadLink");
  modalDownloadLink.href = "images/full/" + folderName + "/" + fullName;
  //modalDownloadLink.download = fullName;
}

var QueryString = function () {
  // This function is anonymous, is executed immediately and
  // the return value is assigned to QueryString!
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
        // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
        // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
      query_string[pair[0]] = arr;
        // If third or later entry with this name
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  }
  return query_string;
  for (i=0; i<vars; i++) {
	  query_string.replace(/+/g,' ');
  }
}();

function capitalizeFLetter(input) {
          var text = input[0].toUpperCase() +
            input.slice(1);
          return text;
        }
