/*Creating a footer element-----------------------------------------*/
//Create a variable to story my name
const author = "Arturo Mena";
//Create footer element
const newFooter= document.createElement('footer');
document.body.append(newFooter);

//get the date from the system and store the year in thisYear
const today = new Date();
const thisYear = today.getFullYear();

//get ther footer element I just created
const footer = document.querySelector('footer');

//create a paragraph element with my name and the year on it
const copyright = document.createElement('p');

/*Stretch goal from week11 adding utfcode for copyright symbol*/
copyright.innerHTML =  author + '\u00A9 ' + thisYear;

//assign the paragraph to the footer
footer.appendChild(copyright);

/*Modify skills section---------------------------------------------*/

const skills = ["JavaScript", "HTML", "CSS", "Python", "Git", "GitHub", "MS Word", "MS Excell", "MS PowerPoint","Adobe Photoshop", ];
const skillsSection = document.getElementById('Skills');
// const skillsList = skillsSection.getElementsByTagName('ul'); /*Why is this not working?*/
const skillsList = skillsSection.querySelector('ul');

for(let i =0; i< skills.length; i++){
    const skill = document.createElement('li');
    skill.innerHTML= skills[i];
    console.log(skill.innerHTML);
     skillsList.appendChild(skill);
}

/*-------------------------Week 12 ------------------------------------------------------- */
const messageForm = document.getElementById('leave_message');


messageForm.addEventListener('submit', event =>{
    //console.log(event);
    //console.log(event.target); // <-- target will tell us what element we clicked on, example: <p>, <h2>, <div>, etc.
    //To prevent the browser from refreshing automatically
    event.preventDefault();
    const usersName =  event.target.usersName;
    const usersEmail= event.target.usersEmail;
    const usersMessage = event.target.usersMessage;
    //console.log(usersName.value);
    /*Why interpolation isn't working? Because it uses this apostrofe: (`) not this one: (') */
    // console.log('Users Name: ${usersName.value}, users email: ${usersEmail.value} and users message: ${usersMessage.value}');
    //Logging values to console for debugging purposes
    //console.log("Users Name: " +usersName.value + ", users email: " + usersEmail.value+ " and users message: "+ usersMessage.value);

    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href="mailto:${usersEmail.value}">${usersName.value}: </a><span>${usersMessage.value}</span>`;
    

    const removeButton = document.createElement('button');
    removeButton.innerText ="remove";
    removeButton.type ="button";

    removeButton.addEventListener('click', event => {
        const entry= event.target.parentNode;
        entry.remove();
        /*-------------------------------------Week 12 stretch goal -------------------------------------------------*/
        //If the #messages section is empty hide it
        if(messageList && messageList.children.length === 0){
            console.log("The message list is empty");
            messageSection.style.display = "none";
        }
    })
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    /*-------------------------------------Week 12 stretch goal -------------------------------------------------*/
    //Showing the #messages section
    messageSection.style.display = "block";


    //Reset form's fields
    messageForm.reset();
})

/*-------------------------------------Week 12 stretch goal -------------------------------------------------*/
//Hiding the #messages section
const messagesList = document.getElementById('messages').querySelector('ul');
if(messagesList && messagesList.children.length === 0){
    console.log("The message list is empty");
    messages.style.display="none";
}