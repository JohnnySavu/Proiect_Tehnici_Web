document.getElementById("home-btn").addEventListener("click", goHome);
document.getElementById("log-in-btn").addEventListener("click", goLogIn);
document.getElementById("search-cars-btn").addEventListener("click", goSearchCars);
document.getElementById("add-cars-btn").addEventListener("click", goAddCars);

function goLogIn(){
    main = document.getElementById('main-section');
    main.innerHTML = `<main class = 'main-div-sign'>
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
</main>`;
}

function goAddCars(){

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
            <textarea name="message" class='add-input-desc' rows="20" cols="150"></textarea>
           </form>
           <br>

        </div>
        
        <button type='button' class='add-car-btn'>
            Add the car!
        </button>
    </div>
</main>
    `;

}

function goSearchCars(){
    main = document.getElementById('main-section');
    main.innerHTML = `<main class = 'main-div-search'>
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
}

function goHome(){
    main = document.getElementById('main-section');
    main.innerHTML = `<main class = 'main-div'>      
</main>`;
}

