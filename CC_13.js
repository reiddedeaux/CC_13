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

    card.appendChild(heading);
    card.appendChild(paragraph);
    card.appendChild(editButton);
    card.appendChild(removeButton);

    document.getElementById(`employeeContainer`).appendChild(card);

    removeButton.addEventListener(`click`, function(event))
}