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

function capitalizeFLetter(input) {
          var text = input[0].toUpperCase() +
            input.slice(1);
          return text;
        }

//Jumbotron
var jumboHeight = $('.jumbotron').outerHeight();
function parallax(){
    var scrolled = $(window).scrollTop();
    $('.homepage-banner').css('height', (jumboHeight-scrolled) + 'px');
}

$(window).scroll(function(e){
    parallax();
});
