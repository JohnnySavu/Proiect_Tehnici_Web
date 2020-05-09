document.getElementById("home-btn").addEventListener("click", goHome);
document.getElementById("log-in-btn").addEventListener("click", goLogIn);
document.getElementById("search-cars-btn").addEventListener("click", goSearchCars);
document.getElementById("add-cars-btn").addEventListener("click", goAddCars);
localStorage.setItem("onSearch", "false");
btn = document.getElementById("modify-list-btn");

document.addEventListener('click',function(e)
{
    if(e.target && e.target.id == 'modify-list-btn')
    {
        goModifiy();
    }
});


function modifyItem(car)
{
    localStorage.setItem("onSearch", "false");
    main = document.getElementById('main-section');
    main.innerHTML =`<main class = 'main-div'>
    <div class='add-car'>
        <div class = 'add-poza-titlu'>
            <div class ='desc-produs'>
                <img class = 'img' alt='Car' src='./img/add-car.jpg'>
            </div>
            <form>
                <br>
                <label for="Car name">Car name</label><br>
                <input class='add-input' type="text" id="car_name" name="Car name" placeholder="Car name"><br>
    
                <label for="Price">Price</label><br>
                <input class='add-input' type="text" id="price" name="Price" placeholder="Price"><br>
                <label for="Image">Image link</label><br>
                <input class='add-input' type="text" id="Image" name="Image" placeholder="Image link"><br>
                
            </form>
        </div>

        <div class = 'descriere'>
           <h3>
               Add description:
           </h3>
           <form>
            <textarea name="message" id = 'car-desc' class='add-input-desc' rows="20" cols="150"></textarea>
           </form>
           <br>

        </div>

        <button type='button' class='add-car-btn' id = 'modify-car-btn'>
            Modify the car!
        </button>
        
        <button type='button' class='add-car-btn' id = 'delete-car-btn'>
            Delete the car!
        </button>
    </div>
</main>
    `;


}



function goModifiy()
{
    localStorage.setItem("onSearch", "false");

    let mainSection = document.getElementById('main-section');
    while(mainSection.firstChild)
    {
        mainSection.removeChild(mainSection.firstChild);
    }
    let main_div = document.createElement("main");
    main_div.className = "main-div-search";
    main_div.id = "main-div-search";
    //let main = document.getElementById('main-div-search');
    //while(main.firstChild)
        //main.removeChild(main.firstChild);
    fetch('http://localhost:3000/cars')
    .then(function (response) {
        // Trasform server response to get the dogs
        response.json().then(function (cars) {
            for(let i = 0; i < cars.length; i++)
            {
                let div_id = document.createElement("div");
                div_id.id = cars[i].id;
                div_id.className = 'car';

                let div_poz_titlu = document.createElement("div");
                div_poz_titlu.className = 'poza-titlu';
                
                let div_desc = document.createElement("div");
                div_desc.className = 'desc-produs';
                
                let img = document.createElement("img");
                img.className = 'img';
                img.alt = 'Car'
                img.src = cars[i].img;
                
                div_desc.appendChild(img);
                
                let div_titlu_pret = document.createElement("div");
                div_titlu_pret.className = "titlu-pret";

                let h3 = document.createElement("p");
                h3.className = 'titlu';
                h3.innerText = cars[i].name;

                let h4 = document.createElement("p");
                h4.className = 'pret';
                h4.innerText = cars[i].price;

                div_titlu_pret.appendChild(h3);
                div_titlu_pret.appendChild(h4);
                div_poz_titlu.appendChild(div_desc);
                div_poz_titlu.appendChild(div_titlu_pret);

                let div_descriere = document.createElement("div");
                div_descriere.className = "descriere";
                div_descriere.innerText = cars[i].description;

                let btn = document.createElement("button");
                btn.className = "btn-buy";
                btn.type = "button";
                btn.id = "modify"
                btn.innerText = "Modify it!";
                btn.addEventListener('click', function () {
                    modifyItem(cars[i]); // de pus functia de steregere 

                });

                div_id.appendChild(div_poz_titlu);
                div_id.appendChild(div_descriere);
                div_id.appendChild(btn);

                main_div.appendChild(div_id);
            }
            
        });
    });

    mainSection.appendChild(main_div);
}



function goLogIn(){
    localStorage.setItem("onSearch", "false");
    main = document.getElementById('main-section');
    main.innerHTML = `
    <main class = 'main-div-sign'>
        <form>
            <h1 class = 'sing-in-header'>Sign in</h1>
            <label for="username">User name</label><br>
            <input class='input' type="text" id="username" name="username" placeholder="username"><br>
            <br>
            <label for="password">Passowrd</label><br>
            <input class='input' type="password" id="password" name="password" placeholder="password"><br>
            <br>
            <input type="submit" value="Log in" id='submit-log-in' class="submit-button">
            
            <h1 class = 'sing-up-header'>Don't have an account? Sign up!</h1>
            <label for="username2">User name</label><br>
            <input class='input' type="text" id="username2"  name="username2" placeholder="username"><br>
            <br>

            <label for="email">Email adress</label><br>
            <input class='input' type="text" id="email"  name="email" placeholder="email"><br>
            <br>

            <label for="password2">Password</label><br>
            <input class='input' type="password" id="password2"  name="password2" placeholder="password"><br>
            <br>

            <label for="password2c">Confirm password</label><br>
            <input class='input' type="password" id="password2c"  name="password2c" placeholder="confirm password"><br>
            <br>

            <input type="submit" value="Sign up" id='submit-sign-up' class="submit-button">
            <br>
        </form>
        <br>       
    </main>
    `;
}

function goAddCars(){
    localStorage.setItem("onSearch", "false");
    main = document.getElementById('main-section');
    main.innerHTML =`<main class = 'main-div'>
    <div class='add-car'>
        <div class = 'add-poza-titlu'>
            <div class ='desc-produs'>
                <img class = 'img' alt='Car' src='./img/add-car.jpg'>
            </div>
            <form>
                <br>
                <label for="Car name">Car name</label><br>
                <input class='add-input' type="text" id="car_name" name="Car name" placeholder="Car name"><br>
    
                <label for="Price">Price</label><br>
                <input class='add-input' type="text" id="price" name="Price" placeholder="Price"><br>
                <label for="Image">Image link</label><br>
                <input class='add-input' type="text" id="Image" name="Image" placeholder="Image link"><br>
                
            </form>
        </div>

        <div class = 'descriere'>
           <h3>
               Add description:
           </h3>
           <form>
            <textarea name="message" id = 'car-desc' class='add-input-desc' rows="20" cols="150"></textarea>
           </form>
           <br>

        </div>
        
        <button type='button' class='add-car-btn' id = 'add-car-btn'>
            Add the car!
        </button>
    </div>
</main>
    `;

}

// display cars to the list 
function goSearchCars(){
    
    //if we try to reload the list but there is no need to, abort
    if(localStorage.getItem("onSearch") == 'true')
    {
        console.log(localStorage.getItem("onSearch"));
        return;
    }
    localStorage.setItem("onSearch",'true');
    let mainSection = document.getElementById('main-section');
    while(mainSection.firstChild)
    {
        mainSection.removeChild(mainSection.firstChild);
    }
    let main_div = document.createElement("main");
    main_div.className = "main-div-search";
    main_div.id = "main-div-search";
    
    //let main = document.getElementById('main-div-search');
    //while(main.firstChild)
        //main.removeChild(main.firstChild);
    fetch('http://localhost:3000/cars')
    .then(function (response) {
        // Trasform server response to get the dogs
        response.json().then(function (cars) {
            for(let i = 0; i < cars.length; i++)
            {
                let div_id = document.createElement("div");
                div_id.id = cars[i].id;
                div_id.className = 'car';

                let div_poz_titlu = document.createElement("div");
                div_poz_titlu.className = 'poza-titlu';
                
                let div_desc = document.createElement("div");
                div_desc.className = 'desc-produs';
                
                let img = document.createElement("img");
                img.className = 'img';
                img.alt = 'Car'
                img.src = cars[i].img;
                
                div_desc.appendChild(img);
                
                let div_titlu_pret = document.createElement("div");
                div_titlu_pret.className = "titlu-pret";

                let h3 = document.createElement("p");
                h3.className = 'titlu';
                h3.innerText = cars[i].name;

                let h4 = document.createElement("p");
                h4.className = 'pret';
                h4.innerText = cars[i].price;

                div_titlu_pret.appendChild(h3);
                div_titlu_pret.appendChild(h4);
                div_poz_titlu.appendChild(div_desc);
                div_poz_titlu.appendChild(div_titlu_pret);

                let div_descriere = document.createElement("div");
                div_descriere.className = "descriere";
                div_descriere.innerText = cars[i].description;

                let btn = document.createElement("button");
                btn.className = "btn-buy";
                btn.type = "button";
                btn.innerText = "Buy it!";

                div_id.appendChild(div_poz_titlu);
                div_id.appendChild(div_descriere);
                div_id.appendChild(btn);

                main_div.appendChild(div_id);

            }
            
        });
    });

    mainSection.appendChild(main_div);
/*

    mainSection.innerHTML = `<main class = 'main-div-search' id = 'main-div-search'>
    <div id = '1' class='car'>
                <div class = 'poza-titlu'>
                    <div class ='desc-produs'>
                        <img class = 'img' alt='Car'  src='./img/car1.jpg'>
                    </div>
                    <div class = 'tilu-pret'>
                        <h3 class='titlu'>
                            BMW 320d
                        </h3>
                        <h4 class='pret'>
                            3.200$
                        </h4>
                    </div>
                </div>

                <div class = 'descriere'>
                   Descriere: lorem ipsum
                </div>
                
                <button type='button' class='btn-buy'>
                    Buy it!
                </button>
    </div>


</main>`;
*/
}

function goHome(){
    localStorage.setItem("onSearch", "false");
    main = document.getElementById('main-section');
    main.innerHTML = `<main class = 'main-div'>      
</main>`;
}

