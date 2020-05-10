

//post a car in the list!

document.addEventListener('click',function(e)
{
    if(e.target && e.target.id == 'add-car-btn')
    {
        carName = document.getElementById("car_name").value;
        price = document.getElementById("price").value;
        imgLink = document.getElementById("Image").value;
        carDesc = document.getElementById("car-desc").value;
        obj = {
            name: carName,
            price: price,
            description: carDesc,
            img: imgLink
        }
        postCar(obj);
    }
});

function postCar(postObject)
{

    fetch('http://localhost:3000/cars', {
        method: 'post',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(postObject)
    }).then(function () {
        document.getElementById("car_name").value = "";
        document.getElementById("price").value = "";
        document.getElementById("Image").value = "";
        document.getElementById("car-desc").value = "";
        
        //de adaugat move to search cars 
    });

}





/*

var addCarBtn = null;
if (document.getElementById('main-div'))
{
    console.log("binie");
    addCarBtn = document.getElementById('main-div');
    addCarBtn.addEventListener('click', works);
}
else
{
    addCarBtn = null;
}

function works()
{
    console.log("binie");
}
*/