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
    return true
}