/*------------------------------ GLOBAL VARIABLES ---------------------------------------------*/
//QUERYING THE DOM FOR ELEMENTS
const messageSection = document.getElementById('messages');
const messageList = messageSection.querySelector('ul');
const projectSection = document.getElementById('Projects');
const projectList = projectSection.querySelector('ul');

/*------------------------------------ FUNCTIONS ---------------------------------------------*/

//HIDE THE MESSAGE SECTION IF EMPTY
function hideMessages(messagesList){
    if(messagesList && messagesList.children.length === 0){
        //UNCOMENT FOR DEBUGGING PURSOSES ONLY
        //console.log("The message list is empty");
        messages.style.display="none";
    }
}

/*--------------------------------- WEEK 11 ---------------------------------------------------*/
/*-------- CREATING A FOOTER ELEMENT -----------------------------------*/

//CREATE A VARIABLE TO STORE MY NAME
const author = "Arturo Mena";

//CREATE THE FOOTER ELEMENT
const newFooter= document.createElement('footer');
document.body.append(newFooter);

//GETTING THE CURRENT DATE FROM THE SYSTEM AND STORE THE YEAR IN ANOTHER VARIABLE
const today = new Date();
const thisYear = today.getFullYear();

//CREATE A NEW PARAGRAPH
const copyright = document.createElement('p');

//ADDING MY NAME, UTFCODE FOR COPYRIGHT SYMBOL, AND THE YEAR TO THE PARAGRAPH I JUST CREATED
copyright.innerHTML =  author + ' \u00A9 ' + thisYear;

//ASSIGN THE NEW PARAGRAPH TO THE FOOTER
newFooter.appendChild(copyright);

/*-------- MODIFYING SKILLS SECTION VIA DOM-----------------------------*/

const skills = [
    "JavaScript",
    "HTML",
    "CSS",
    "Python",
    "Git",
    "GitHub",
    "MS Word",
    "MS Excel",
    "MS PowerPoint",
    "Adobe Photoshop"];

const skillsSection = document.getElementById('Skills');
const skillsList = skillsSection.querySelector('ul');

for(let i =0; i< skills.length; i++){
    const skill = document.createElement('li');
    skill.innerHTML= skills[i];
    //UNCOMENT FOR DEBUGGING PURSOSES ONLY
    //console.log(skill.innerHTML);
    skillsList.appendChild(skill);
}

/*--------------------------------- WEEK 12 ---------------------------------------------------*/

//GET THE MESSAGES FORM
const messageForm = document.getElementById('leave_message');
//ADD A SUBMIT-EVENT LISTENER 
messageForm.addEventListener('submit', event =>{
    //PREVENT FORM AUTO-RESET
    event.preventDefault();
    //GET INPUT FORM'S DATA
    const usersName =  event.target.usersName;
    const usersEmail= event.target.usersEmail;
    const usersMessage = event.target.usersMessage;
    //CREATE A NEW MESSAGE
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href="mailto:${usersEmail.value}">${usersName.value}: </a><span>${usersMessage.value}</span>`;
    //CREATING THE REMOVE BUTTON
    const removeButton = document.createElement('button');
    removeButton.innerText ="Remove";
    removeButton.type ="button";
    removeButton.className ="action-btn";
    //ADD A CLICK-EVENT LISTENER TO THE REMOVE BUTTON
    removeButton.addEventListener('click', event => {
        const entry= event.target.parentNode;
        entry.remove();
/*-------- STRETCH GOAL WEEK 12 ----------------------------------------*/
        //IF THE MESSAGES SECTION IS EMPTY THEN HIDE IT
        hideMessages(messageList);
    })
    //ADDING BUTTON AND NEW MESSAGE TO MESSAGE LIST    
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    //AS MESSAGES SECTION HAS AT LEAST ONE NEW ELEMENT WE HAVE TO SHOW IT
    messageSection.style.display = "block";
    //RESETTING FORM'S FIELDS
    messageForm.reset();
})

/*-------- STRETCH GOAL WEEK 12 ----------------------------------------*/
//HIDDING MESSAGES SECTION
hideMessages(messageList);

/*--------------------------------- WEEK 13 ---------------------------------------------------*/
/*-------- FETCHING DATA FROM GITHUB -----------------------------------*/

const userName="mena-arturo";
fetch(`https://api.github.com/users/${userName}/repos`)
    //HANDLING THE RESPONSE
    .then(response =>{
        if(!response.ok){ //IF THERE WAS A PROBLEM FETCHING THE INFO THROW AN ERROR
            throw new Error(`Request for information about ${userName} repositories failed: ${response.status}`);
        }
        return response.json(); //PARSING JSON RESPONSE INTO A JS OBJECT
    })
    //HANDLING THE PARSED DATA
    .then(data => {
        //UNCOMENT FOR DEBUGGING PURSOSES ONLY: SEEING WHAT DATA LOOKS LIKE
        //console.log(data);
        if(projectSection == null || projectList==null){
            console.error("Project Section or project list not found");
        }
        else{
            //CREATE A LIST ITEM FOR EACH REPOSITORY FOUND ON GITHUB AND PUT IT ON THE PROJECT LIST
            for (let i = 0; i< data.length; i++){
                const project = document.createElement('li');
                project.innerHTML = `${data[i].name}`;
                projectList.appendChild(project);
                //UNCOMENT FOR DEBUGGING PURSOSES ONLY
                //console.log(`Repository name: ${data[i].name}`);
            }
        }
    })
    //HANDLING ERRORS WHILE FETCHING DATA FROM GITHUB
    .catch(error => {
        console.error(error);
        const project = document.createElement('li');
        project.innerHTML = `No projects found`;
        projectList.appendChild(project);
    });
