    
        var todos = []; // Global array to store todo objects
        var todoInput = document.getElementById("todo-input"); // Input field for new todo
        var todoParent = document.getElementById("todo-parent"); // Container to hold all todo items
        var addBtn = document.getElementById("add-btn"); // Button to add new todo
        var updateBtn = document.getElementById("update-btn"); // Button to update existing todo

        var editIndex = null;  // Variable to keep track of which todo is being edited



        // this function validates the input text for creating or updating a todo item
        function validateInput(text) {
            if (text.trim() === "") {
                alert("Please enter a task");
                return false;
            }
            return true;
        }



        // this function creates a new todo object with a unique id, the provided text, and a default completion status of false
        function createTodoObject(text) {
            return {
                id: Date.now(),
                text: text,
                isCompleted: false
            };
        }


        // this function adds a new todo item to the list after validating the input, creating a todo object, and then rendering the updated list of todos
        function addTodo() {
            var text = todoInput.value;

            if (!validateInput(text)) {
                return;
            }

            var todoObj = createTodoObject(text);
            todos.push(todoObj);

            clearInput();
            renderTodos();
        }


        // this function clears the input field after adding or updating a todo item
        function clearInput() {
            todoInput.value = "";
        }



        // this function renders the list of todo items by clearing the existing content and creating new elements for each todo in the array
        function renderTodos() {

            todoParent.innerHTML = "";

            for (var i = 0; i < todos.length; i++) {

                var todoDiv = createTodoElement(todos[i], i);
                todoParent.appendChild(todoDiv);

            }
        }


        // this function creates a DOM element for a single todo item, including its text and associated buttons for editing, deleting, marking as done, or undoing completion
        function createTodoElement(todo, index) {

            var div = document.createElement("div");
            div.className = "todo";

            if (todo.isCompleted) {
                div.classList.add("done");
            }

            var span = document.createElement("span");
            span.innerText = todo.text;

            var btnArea = createButtonArea(todo, index);

            div.appendChild(span);
            div.appendChild(btnArea);

            return div;
        }



        // this function creates a button area for each todo item, which includes different buttons based on whether the todo is completed or not
        function createButtonArea(todo, index) {

            var btnDiv = document.createElement("div");
            btnDiv.className = "todo-buttons";

            if (todo.isCompleted) {

                btnDiv.appendChild(createDeleteButton(index));
                btnDiv.appendChild(createUndoButton(index));

            } else {

                btnDiv.appendChild(createEditButton(index));
                btnDiv.appendChild(createDeleteButton(index));
                btnDiv.appendChild(createDoneButton(index));

            }

            return btnDiv;
        }



        // this function creates an "Edit" button for a todo item, which when clicked, will trigger the startEdit function with the index of the todo to be edited
        function createEditButton(index) {

            var btn = document.createElement("button");
            btn.innerText = "Edit";

            btn.onclick = function () {
                startEdit(index);
            };

            return btn;
        }



        // this function starts the editing process for a specific todo item by populating the input field with the current text of the todo, setting the editIndex to the index of the todo being edited, and toggling the visibility of the add and update buttons
        function startEdit(index) {

            todoInput.value = todos[index].text;

            editIndex = index;

            addBtn.style.display = "none";
            updateBtn.style.display = "inline";
        }



        // this function updates the text of an existing todo item based on the current value in the input field, resets the editIndex, toggles the visibility of the add and update buttons, clears the input field, and re-renders the list of todos to reflect the changes
        function updateTodo() {

            if (editIndex === null) {
                return;
            }

            var text = todoInput.value;

            if (!validateInput(text)) {
                return;
            }

            todos[editIndex].text = text;

            editIndex = null;

            addBtn.style.display = "inline";
            updateBtn.style.display = "none";

            clearInput();
            renderTodos();
        }



        // this function deletes a todo item from the list based on its index, and then re-renders the list of todos to reflect the change
        function deleteTodo(index) {
            todos.splice(index, 1);

            // Agar jo todo delete ho raha hai vo edit mode mein tha to reset karo
            if (editIndex === index || editIndex !== null) {
                editIndex = null;
                todoInput.value = '';
                addBtn.style.display = "inline";
                updateBtn.style.display = "none";
            }

            renderTodos();
        }



        // this function creates a "Delete" button for a todo item, which when clicked, will trigger the deleteTodo function with the index of the todo to be deleted
        function createDeleteButton(index) {

            var btn = document.createElement("button");
            btn.innerText = "Delete";
            btn.className = "delete-btn";

            btn.onclick = function () {
                deleteTodo(index);
            };

            return btn;
        }


        // this function marks a todo item as completed by setting its isCompleted property to true, and then re-renders the list of todos to reflect the change
        function markDone(index) {
            todos[index].isCompleted = true;
            renderTodos();
        }



        // this function creates a "Done" button for a todo item, which when clicked, will trigger the markDone function with the index of the todo to be marked as completed
        function createDoneButton(index) {

            var btn = document.createElement("button");
            btn.innerText = "Done";
            btn.className = "done-btn";

            btn.onclick = function () {
                markDone(index);
            };

            return btn;
        }


        // this function undoes the completion of a todo item by setting its isCompleted property to false, and then re-renders the list of todos to reflect the change
        function undoTodo(index) {
            todos[index].isCompleted = false;
            renderTodos();
        }


        // this function creates an "Undo" button for a completed todo item, which when clicked, will trigger the undoTodo function with the index of the todo to be marked as not completed
        function createUndoButton(index) {

            var btn = document.createElement("button");
            btn.innerText = "Undo";
            btn.className = "undo-btn";

            btn.onclick = function () {
                undoTodo(index);
            };

            return btn;
        }


        // Event listeners for the add and update buttons to trigger their respective functions when clicked
        addBtn.onclick = addTodo;
        updateBtn.onclick = updateTodo;
    