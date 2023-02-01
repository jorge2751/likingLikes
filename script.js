var likeBtns = document.querySelectorAll(".likeBtn");

likeBtns.forEach(function(btn) {
    btn.addEventListener("click", function() {
        var likes = this.parentElement.querySelector(".likes");
        likes.innerHTML = parseInt(likes.innerHTML) + 1;
    });
});