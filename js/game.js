const WIDTH = 400;
const HEIGHT = 400;

let target = {
    x: getRandomNumber(WIDTH),
    y: getRandomNumber(HEIGHT)
};

let $map = document.getElementById('map');
let $distance = document.getElementById('distance');
let click = 0;

$map.addEventListener('click', function (e){
    click++;
    const distance = getDistance(e,target);
    const distanceHint = getDistanceHint(distance);
    $distance.innerHTML = `<h1>${distanceHint}</h1>`

    if( distance < 20){
        alert(`Haz encontrado el tesoro en ${click} click!!`);
        location.reload();
    }
    
})