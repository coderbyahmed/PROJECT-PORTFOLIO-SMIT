var inputBox = document.getElementById("input-box"); //YE INPUT BOX KI ID HAI
    

var addBtn = document.getElementById("add-btn"); //YE ADD BUTTON KI ID HAI
    

var todoList = document.getElementById("todoList"); //YE TODO LIST KI ID HAI
    

var editTodo = null; //YE EDIT TODO KO NULL SET KARTA HAI
    

var editItem = null; //YE EDIT ITEM KO NULL SET KARTA HAI


// YE FUNCTION TODO KO ADD KARNE KE LIYE HAI
addBtn.onclick = function () {

    var text = inputBox.value.trim(); //YE INPUT BOX SE TEXT LE RAHA HAI AUR USKE AROUND KE SPACE KO HATA RAHA HAI
       

    if (text === "") { //AGAR TEXT EMPTY HAI TO ALERT KARO

        alert("Write something");

        return;

    }


    if (editItem) { //AGAR EDIT ITEM NULL NA HO TO USME TEXT UPDATE KARO

        editItem.children[0].innerHTML = text; //YE EDIT ITEM KE PEHLE CHILD KO UPDATE KAR RAHA HAI
            
        editItem = null; //EDIT ITEM KO NULL SET KARO

        addBtn.innerHTML = "Add"; //ADD BUTTON KA TEXT WAPIS "Add" KARO

    }
    else { //AGAR EDIT ITEM NULL HO TO NAYA TODO ITEM GENERATE KARO

        var li = document.createElement("li");
            

        var span = document.createElement("span");
            

        span.innerHTML = text;
            

        li.appendChild(span);



        var div = document.createElement("div");
            

        div.className = "btn-area";
            

        var editBtn = document.createElement("button");
            

        editBtn.innerHTML = "Edit";
            

        var deleteBtn = document.createElement("button");
            

        deleteBtn.innerHTML = "Delete";
            

        div.appendChild(editBtn); //EDIT BUTTON KO DIV ME APPEND KARO

        div.appendChild(deleteBtn); //DELETE BUTTON KO DIV ME APPEND KARO

        li.appendChild(div); //DIV KO LI ME APPEND KARO

        todoList.appendChild(li); //LI KO TODO LIST ME APPEND KARO

    }

    inputBox.value = ""; //INPUT BOX KO EMPTY KARO

};

// YE FUNCTION TODO ITEM KO UPDATE KARNE KE LIYE HAI
todoList.onclick = function (e) { //YE EVENT DELEGATION KA USE KAR RAHA HAI

    if (e.target.innerHTML === "Delete") {

        e.target.parentElement.parentElement.remove(); //DELETE BUTTON KE PARENT KE PARENT KO REMOVE KARO (LI KO REMOVE KARO)

    }



    if (e.target.innerHTML === "Edit") { //AGAR EDIT BUTTON PE CLICK HUA TO USKA PARENT KE PARENT (LI) KO EDIT ITEM ME SET KARO


        var li = e.target.parentElement.parentElement; //YE EDIT BUTTON KE PARENT KE PARENT (LI) KO LI VARIABLE ME STORE KAR RAHA HAI
            

        var text = li.children[0].innerHTML; //YE LI KE PEHLE CHILD (SPAN) KE INNERHTML KO TEXT VARIABLE ME STORE KAR RAHA HAI
            
        inputBox.value = text; //YE INPUT BOX ME TEXT KO SET KAR RAHA HAI
            
        addBtn.innerHTML = "Edit"; //ADD BUTTON KA TEXT "Edit" KARO

        editItem = li; //EDIT ITEM KO LI ME SET KARO
    }
};