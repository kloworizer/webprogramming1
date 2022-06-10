function setUrl() {
    document.getElementById("facebook").href = "https://www.facebook.com/sharer/sharer.php?u=" + window.location.href;
    document.getElementById("twitter").href = "https://www.twitter.com/share?url=" + window.location.href;
    document.getElementById("whatsapp").href = "whatsapp://send?text=" + window.location.href;
}