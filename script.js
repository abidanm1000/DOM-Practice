// let newNFT = {
//     bgColor: 'red',
//     name: 'dog',
//     owner: 'Abel'
// };

let dog = {
    name: "Shibe #5079",
    price: "0.09ETH",
    description: "Shiba Shelter is a collection of shibes on the Ethereum Blockchain",
    nft: "https://lh3.googleusercontent.com/BLAw9VE-D5PyYfu7u_KbxBIrl_j5jI8I4UAt8H-qTGRZ4FBaFWNKb0HHP5Uk1shKvmC5LGpfi1ivK8G2BDuZOE30TVS8J8W-WngOyIE=w600",
    backgroundColor: "#00FFFF",
    cardColor: "#FFC579",
    otherData: {
        owner: "Lance Toledo",
        daysLeft: "1 day left",
        profileImg: "https://lh3.googleusercontent.com/a-/AOh14GiBv7fSEkk1Kr_3jpQfHTuEHh6V1ehFsg_sLNg0=s40-c",
    }
}

let name = document.getElementById('name').innerHTML = dog.name;
let price = document.getElementById('price').innerHTML = dog.price;

let description = document.getElementById('description');
description.innerHTML = dog.description;
description.style.color = 'white';

let nft = document.getElementById('equilibrium').src = dog.nft;
let backgroundColor = document.querySelector("body").style.backgroundColor = dog.backgroundColor;
let cardColor = document.querySelector('.container').style.backgroundColor = dog.cardColor;
let owner = document.getElementById('owner').innerHTML = dog.otherData.owner;

let daysLeft = document.getElementById('daysLeft');
daysLeft.innerHTML = dog.otherData.daysLeft;
daysLeft.style.color = 'white';

let profileImg = document.getElementById('profileImg').src = dog.otherData.profileImg;

let title = document.querySelector('title').innerHTML = 'DOM Practice';

let bodyText = document.querySelector("#bodyText");
bodyText.innerHTML = 'DOM Practice';
bodyText.style.fontSize = '35px';
bodyText.style.textTransform = 'uppercase';
bodyText.style.fontWeight = '800';
bodyText.style.marginBottom = '10px';