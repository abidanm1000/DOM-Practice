let original = {
    name: "Equilibrium #3429",
    price: "0.041ETH",
    description: "Our Equilibrium collection promotes balance and calm",
    descriptionColor: 'rgb(172, 165, 165)',
    nft: "images/image-equilibrium.jpg",
    backgroundColor: "hsl(217,54%,11%)",
    cardColor: "hsl(216, 50%, 16%)",
    otherData: {
        owner: "Abidan Martinez",
        daysLeft: "3 days left",
        daysLeftColor: 'white',
        profileImg: "images/profile avatar.jpg",
    },
    buttonColor: 'white',
    buttonBackgroundColor: 'hsl(215, 26%, 23%)'
}

let dog = {
    name: "Shibe #5079",
    price: "0.09ETH",
    description: "Shiba Shelter is a collection of shibes on the Ethereum Blockchain",
    descriptionColor: 'white',
    nft: "https://lh3.googleusercontent.com/BLAw9VE-D5PyYfu7u_KbxBIrl_j5jI8I4UAt8H-qTGRZ4FBaFWNKb0HHP5Uk1shKvmC5LGpfi1ivK8G2BDuZOE30TVS8J8W-WngOyIE=w600",
    backgroundColor: "#00FFFF",
    cardColor: "#FFC579",
    otherData: {
        owner: "Lance Toledo",
        daysLeft: "1 day left",
        daysLeftColor: 'rgb(172, 165, 165)',
        profileImg: "https://lh3.googleusercontent.com/a-/AOh14GiBv7fSEkk1Kr_3jpQfHTuEHh6V1ehFsg_sLNg0=s40-c",
    },
    buttonColor: 'hsl(215, 26%, 23%)',
    buttonBackgroundColor: 'white'
}

let name = document.getElementById('name');
let price = document.getElementById('price');
let description = document.getElementById('description');
let nft = document.getElementById('equilibrium');
let backgroundColor = document.querySelector("body");
let cardColor = document.querySelector('.container');
let owner = document.getElementById('owner');
let daysLeft = document.getElementById('daysLeft');
let profileImg = document.getElementById('profileImg');
let title = document.querySelector('title');
let bodyText = document.querySelector("#bodyText");
let toggle = document.getElementById('toggle');
let toggleOn = false;

title.innerHTML = 'DOM Practice';
    
bodyText.innerHTML = 'DOM Practice';
bodyText.style.fontSize = '35px';
bodyText.style.textTransform = 'uppercase';
bodyText.style.fontWeight = '800';
bodyText.style.marginBottom = '10px';
bodyText.style.color = 'white';


function flip(object) {
    name.innerHTML = object.name;

    price.innerHTML = object.price;
    
    description.innerHTML = object.description;
    description.style.color = object.descriptionColor;

    nft.src = object.nft;

    backgroundColor.style.backgroundColor = object.backgroundColor;

    cardColor.style.backgroundColor = object.cardColor;

    owner.innerHTML = object.otherData.owner;

    
    daysLeft.innerHTML = object.otherData.daysLeft;
    daysLeft.style.color = object.otherData.daysLeftColor;

    profileImg.src = object.otherData.profileImg;

    toggle.style.color = object.buttonColor;
    toggle.style.backgroundColor = object.buttonBackgroundColor;
}

toggle.addEventListener('click', () => {
    if (toggleOn === false) {
        flip(dog)
        toggleOn = true;
    } else if (toggleOn === true) {
        flip(original)
        toggleOn = false;
    }
});