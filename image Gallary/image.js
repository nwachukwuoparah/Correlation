function showPic(whichpic) {
  if (!document.getElementsByTagName) return false;
  var source = whichpic.getAttribute("href");
  var placeholder = document.getElementById("placeholder");
  placeholder.setAttribute("src", source);
  var text = whichpic.getAttribute("title");
  var description = document.getElementById("description");
  description.firstChild.nodeValue = text;
}

const prepareGallery = () => {
  if (!document.getElementsByTagName || !document.getElementById) return false;
  let gallery = document.getElementById("imagegallery");
  if (!gallery) return false;
  var links = gallery.getElementsByTagName("a");
  for (let i = 0; i < links.length; i++) {
    console.log(links[i]);
    links[i].onclick = function () {
      showPic(this);
      return false;
    };
  }
};

window.onload = prepareGallery;
