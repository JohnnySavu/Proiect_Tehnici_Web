function buybooks(book)
{
    localStorage.setItem("onSearch", "false");
    main = document.getElementById('main-section');
    main.innerHTML =`<main class = 'main-div'>
    <div class='add-book'>
        <div class = 'add-poza-titlu'>
            <div class ='desc-produs'>
                <img class = 'img' id ='display-book' alt='book' src='./img/book.jpg'>
            </div>
            <form>
                <br>
                <label for="book name">Book name</label><br>
                <input class='add-input' type="text" id="book_name" name="book name" placeholder="book name" disabled><br>

                <label for="Author name">Author name</label><br>
                <input class='add-input' type="text" id="author_name" name="Author name" placeholder="Author name" disabled><br>

                <label for="Price">Price</label><br>
                <input class='add-input' type="text" id="price" name="Price" placeholder="Price" disabled><br>


                
            </form>
        </div>

        <div class = 'descriere'>
           <h3>
               Add description:
           </h3>
           <form>
            <textarea name="message" id ='book_desc' class='add-input-desc' rows="20" cols="150" disabled></textarea>
           </form>
           <br>

        </div>

        <button type='button' class='add-book-btn' id = 'modify-book-btn'>
            Buy the book!
        </button>

    </div>
</main>
    `;
    
    document.getElementById("display-book").src = book.img;
    document.getElementById("book_name").value = book.name;
    document.getElementById("price").value = book.price;
    document.getElementById('book_desc').value = book.description;

}