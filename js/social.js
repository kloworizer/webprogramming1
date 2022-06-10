function setUrl() {
    url = encodeURI(window.location.href);
    document.getElementById("facebook").href = "https://www.facebook.com/sharer/sharer.php?u=" + url;
    document.getElementById("twitter").href = "https://www.twitter.com/share?url=" + url;
    document.getElementById("whatsapp").href = "whatsapp://send?text=" + url;
}