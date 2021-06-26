function addReview()
{
    let name = $("#name").val()
    let skill = $("#skill").val()
    let level = $("#level").val()
    if (name == "" || skill == "" || level == null) {
        $("#error").css("display","block")
        return false
    }
    $("#error").css("display","none")
    $("#reviews").append("<tr><td>"+name+"</td><td>"+skill+"</td><td>"+level+"</td></tr>")
    $("#reviewer")[0].reset()

    var review = {
        "name": name,
        "skill": skill,
        "level" : level
    }

    var reviewjson = localStorage.getItem("Reviews");
    var reviews = JSON.parse(reviewjson);
    if(reviews == null){
    reviews = [];
    }
    reviews.push(review);
    localStorage.setItem("Reviews", JSON.stringify(reviews));
    return true
}

function loadReviews()
{
    var reviewjson = localStorage.getItem("Reviews");
    var reviews = JSON.parse(reviewjson);
    if(reviews == null){
    reviews = [];
    }

    reviews.forEach(function(obj) {
        $("#reviews").append("<tr><td>" + obj.name + "</td><td>" + obj.skill + "</td><td>" + obj.level + "</td></tr>")
    })
}

window.onload = loadReviews;