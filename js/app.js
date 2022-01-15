/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/*
 Comments should be present at the beginning of each procedure and class.
 Great to have comments before crucial code sections within the procedure.
*/
//  Defining Global Values
let navBar = document.getElementById('navbar__list');
let sections = document.querySelectorAll('section');
let btn = document.getElementById('add__section');
// End of Global Values

//Making a dynmaic navBar
// Make a forEach loop to add lists dynamically
sections.forEach(function (section) {
    // Creating a listElement
    listItem = document.createElement('li');
    // creating a variable for the name of the listItem
    sectionName = section.getAttribute('data-nav');
    // Modyifiying the HTML of the listElement
    listItem.innerHTML = `<li><a class="menu__link" href="#${section.id}" data-nav="${section.id}">${sectionName}</a>`;
    // Adding the listElement to be the last Item on the navBar dynamically
    navBar.appendChild(listItem);
});
// End of dynamic navBar

// Making the IntersectionObserver method
// Making a callBackFunction
const callBackFunction = function (entries) {
    entries.forEach(entry => { //Making a condion for adding 'your-active-class' class
        if (entry.intersectionRatio >= 0.6) { //if 60% of the section is visible then the class is added
            entry.target.classList.add('your-active-class');
        } else { //Otherwise the class won't be added
            entry.target.classList.remove('your-active-class');
        }
    })
};
//making rules for the functions
const options = { threshold: 0.6, root: null };
const observer = new IntersectionObserver(callBackFunction, options)

//starting the function to observe the section
sections.forEach(section => {
    observer.observe(section);
});
// End of IntersectionObserver method


/*
this is a bouns
i tried to add a button to add a section to body and to navBar automatically
but there's not enough time to submit the project
i'm planning to do it after submitting ISA
*/
function addNewSection() {
    newElement = document.createElement('section');
    let counter = 5;
    newElement.innerHTML = `<section id="section${counter}" data-nav="Section ${counter}">
    <div class="landing__container">
      <h2>Section ${counter}</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

      <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
    </div>
    </section>`;
    counter++;
    console.log(newElement.innerHTML);
    navBar = document.getElementById('navbar__list');
    sections = document.querySelectorAll('section');
    sections.forEach(function (section) {
        // Creating a listElement
        listItem = document.createElement('li');
        // creating a variable for the name of the listItem
        sectionName = section.getAttribute('data-nav');
        // Modyifiying the HTML of the listElement
        listItem.innerHTML = `<li><a class="menu__link" href="#" data-nav=""></a>`;
        // Adding the listElement to be the last Item on the navBar dynamically
        navBar.appendChild(listItem);
        main = document.getElementById('main');
        main.appendChild(newElement);

    });
};
btn.addEventListener('click', addNewSection);
// End of bouns


//Making smooth scroll
// Making a constant variable to target all the links
const links = document.getElementsByClassName('menu__link');

// Transfering the constant to an array
linksToArr = Array.from(links);

// Making a loop to taregt every element of the array
for (let i = 0; i < linksToArr.length; i++) {
    // Adding the event for every element
    linksToArr[i].addEventListener("click", function (e) {
        // Prevend the default scroll of any link
        e.preventDefault();
        // Getting href attribute
        let href = e.target.getAttribute('href');
        // Excluding the hash sign # from href attribute
        href = href.substring(1);
        // making a nested loop to taregt every element's id attribute and strict equal it to the href attribute
        for (let j = 0; j < sections.length; j++) {
            if (href === sections[j].getAttribute('id')) { // if true make the scroll smooth
                sections[j].scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
        }

    });
}
// end of smooth scroll