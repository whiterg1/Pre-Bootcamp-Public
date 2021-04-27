var likes = 0;
var likeButton = document.querySelector("#likeButton");
var likeCounter = document.querySelector("#likeCounter");
function add(){
    likes++;
    likeCounter.innerHTML= likes + "like(s)"
    console.log(likes);
}
