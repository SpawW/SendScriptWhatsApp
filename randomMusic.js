async function getMusic(url) {
  fetch(url)
    .then(function (response) {
      return response.text();
    })
    .then(function (text) {
      console.log("Request successful");
      var mySubString = text.substring(
        text.indexOf("<article>") + 1,
        text.lastIndexOf("</article>")
      );
      console.log(mySubString)
      //   return text;
    })
    .catch(function (error) {
      log("Request failed", error);
    });
}
getMusic("https://www.letras.mus.br/pineapple/poesia-acustica-13/");
