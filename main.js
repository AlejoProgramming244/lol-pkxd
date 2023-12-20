stat = "";

function Fn()
{
    window.location = "funcionamiento.html";
}

function setup()
{
    Canvas = createCanvas(500, 500);
    Canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function Start()
{
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("Status").innerHTML = "Estado: Detectando objetos";
    document.getElementById("date_obj").value;
    document.getElementById("date_obj").value = "";
}

function modelLoaded()
{
    console.log("Modelo CoCoSsd inicializado");
    stat = true;
}

function draw()
{
    image(video, 0, 0, 500, 500);
}
