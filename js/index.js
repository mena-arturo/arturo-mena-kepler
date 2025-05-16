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
