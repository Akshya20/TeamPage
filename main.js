const team = [
    {
        id: "anna",
        fullName: "Anna Kendrick",
        jobTitle: "Front-end Ninja",
        bio: "Bibliophile, loves to dive into fictional worlds, ships JS code like brownies",
        avatar: "/take5/assests/annakendrick.svg",
    },
    {
        id: "harry",
        fullName: "Harry Fawn",
        jobTitle: "Illustrator",
        bio: "Creates new illustrations each week, will kill for coffee, and loves beaches",
        avatar: "/take5/assests/harryfn.svg ",
    },
    {
        id: "sofia",
        fullName: "Sofia Sultan",
        jobTitle: "Backend Engineer",
        bio: "Donuts over waffles. Martinis over whiskeys. Typescript over anything.",
        avatar: "/take5/assests/sofiasul.svg",
    },
];


const content = document.getElementById("content");


const getImageElement = (src, alt) => {
    let img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    return img;

};


function generateCard(id, fullName, jobTitle, bio, avatar) {
   
    let section = document.createElement('section');
    section.classname = 'my-section';
    section.id = id;
    document.body.appendChild(section);
    console.log(section);


    
    let imageElemnt = getImageElement(avatar, fullName);

   
    let textDiv = document.createElement('div');


  
    function h2Full(fullName) {
        const h2 = document.createElement('h2');
        h2.textContent = fullName;
        return h2;
    }

    
    function h3Job(jobTitle) {
        const h3 = document.createElement('h3');
        h3.textContent = jobTitle;
        return h3;
    }

    
    function pBio(bio) {
        const p = document.createElement('p');
        p.textContent = bio;
        return p;
    }

    
    textDiv.appendChild(h2Full(fullName));
    textDiv.appendChild(h3Job(jobTitle));
    textDiv.appendChild(pBio(bio));
    

   
    section.appendChild(imageElemnt);
    section.appendChild(textDiv);


    
    document.body.appendChild(section);
    return section;
}


function generateCardArray(data) {
    const cards = [];
   
    data.forEach(item=>{
        const{id, fullName, jobTitle, bio, avatar}=item;
        const card=generateCard(id, fullName, jobTitle, bio, avatar);
        cards.push(card);
    })

    
    return cards;
}

const cardsArray = generateCardArray(team);

//Run a loop for the cardsArray and append its elements to content.
for (let card of cardsArray) {
    content.append(card);
}
//Modify Code above this line
