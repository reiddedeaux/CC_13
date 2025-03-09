//Task 2 Employee Cards Dynamic Addition
function addEmployeeCard(name, position){
    //main employee card
    const card = document.createElement(`div`); // class for style
    card.setAttribute(`class`, `employee-card`);
    const heading = document.createElement(`h3`); // use the name as the heading
    heading.textContent = name;
    const paragraph = document.createElement(`h3`) //the position is the paragraph
    paragraph.textContent = position;
    const removeButton = document.createElement(`button`) // creates a remove button
    removeButton.textContent = `Remove`;
    const editButton = document.createElement(`button`) //make edit button
    editButton.textContent = `Remove`;
//Adds elements to card
    card.appendChild(heading);
    card.appendChild(paragraph);
    card.appendChild(editButton);
    card.appendChild(removeButton);

    document.getElementById(`employeeContainer`).appendChild(card);

    removeButton.addEventListener(`click`, function(event){

    //Task 4 Employee Card Removal with Event Bubbling
    console.log(`Remove button was selected`);
    event.stopPropagation();
    card.remove();
    });
    // Task 5 Inline Editing for Employee Cards
    editButton.addEventListener(`click`, function(){
        const nameInput = document.createElement(`input`);
        nameInput.value = heading.textContent;
        const positionInput = document.createElement(`input`);
        positionInput.value = paragraph.textContent;
        const saveButton = document.createElement(`input`);
        saveButton.textContent = `Save`;
        card.appendChild(positionInput);
        //new function
        card.innerHTML = ``;
        card.appendChild(nameInput);
        card.appendChild(position);
        card.appendChild(saveButton);
        card.appendChild(removeButton);
        //Save Button listener
        saveButton.addEventListener(`click`, function(){
            heading.textContent = nameInput.value;
            paragraph.textContent = positionInput.value;

            card.innerHTML = ``;
            card.appendChild(heading);
            card.appendChild(paragraph);
            card.appendChild(editButton);
            card.appendChild(removeButton);
                });
    });
}
//example employee
addEmployeeCard(`Ronnie`, `Manager`);
addEmployeeCard(`Jimmy`, `Analyst`);
addEmployeeCard(`Jordan`,`Accountant`);
//task 3 Bulk update on Employee Cards
function bulkUpdateEmployeeCards(){
    const cards = document.querySelectorAll(`.employee-card`);
    const cardArray = Array.from(cards);

    cardArray.forEach(card => {
        card.style.backgroundColor = `lightgreen`; 
    }); //function for bulk updating cards
}
bulkUpdateEmployeeCards();//Able to use the bulk update function