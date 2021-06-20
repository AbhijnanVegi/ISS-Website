const images = ["foxy.jpg","eagle.jpg","zelda.jpg","island.jpg","deer.jpg"]
let current = 4;

function changeImg()
{
    current = (current + 1) % 5;
    document.getElementById("gallery").src = "../img/" + images[current]
}