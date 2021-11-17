import orangeHoodie from '../assets/img1.png';
import blackHoodie from '../assets/img10.png';
import yellowHoodie from '../assets/img11.png';

import greyShirt from '../assets/img8.png';
import redShirt from '../assets/img14.png';
import blueShirt from '../assets/img15.png';


import blackPants from '../assets/img4.png';
import greyPants from '../assets/img5.png';
import whitePants from '../assets/img6.png';


export default {
    items: [
        {
            name: "Winter Hoodie",
            price: 240,
            sizes: ["S", "M", "L", "XL"],
            description: "",
            images: [
                {color: "orange", source: orangeHoodie},
                {color: "black", source: blackHoodie},
                {color: "yellow", source: yellowHoodie},
            ],
            category: "hoodies"
        },
        {
            name: "Summer Hoodie",
            price: 134,
            sizes: ["S", "M", "L", "XL"],
            description: "",
            images: [
                {color: "black", source: blackHoodie},
                {color: "orange", source: orangeHoodie},
                {color: "yellow", source: yellowHoodie},
            ],
            category: "hoodies"
        },
        {
            name: "Autum Hoodie",
            price: 150,
            sizes: ["S", "M", "L", "XL"],
            description: "",
            images: [
                {color: "yellow", source: yellowHoodie},
                {color: "orange", source: orangeHoodie},
                {color: "black", source: blackHoodie},
            ],
            category: "hoodies"
        },
        {
            name: "Chemic Shirt",
            price: 80.5,
            sizes: ["S", "M", "L", "XL"],
            description: "",
            images: [
                {color: "grey", source: greyShirt},
                {color: "red", source: redShirt},
                {color: "blue", source: blueShirt},
            ],
            category: "shirts"
        },
        {
            name: "Theatre Shirt",
            price: 80.5,
            sizes: ["S", "M", "L", "XL"],
            description: "",
            images: [
                {color: "red", source: redShirt},
                {color: "grey", source: greyShirt},
                {color: "blue", source: blueShirt},
            ],
            category: "shirts"
        },
        {
            name: "Plain Shirt",
            price: 80.5,
            sizes: ["S", "M", "L", "XL"],
            description: "",
            images: [
                {color: "blue", source: blueShirt},
                {color: "grey", source: greyShirt},
                {color: "red", source: redShirt},
            ],
            category: "shirts"
        },
        {
            name: "Coline Sweats",
            price: 58.5,
            sizes: ["S", "M", "L", "XL"],
            description: "",
            images: [
                {color: "black", source: blackPants},
                {color: "white", source: whitePants},
                {color: "grey", source: greyPants},
            ],
            category: "sweat pants"
        },
        {
            name: "Austria Sweats",
            price: 75.5,
            sizes: ["S", "M", "L", "XL"],
            description: "",
            images: [
                {color: "white", source: whitePants},
                {color: "black", source: blackPants},
                {color: "grey", source: greyPants},
            ],
            category: "sweat pants"
        },
        {
            name: "Melanin Sweats",
            price: 46.5,
            sizes: ["S", "M", "L", "XL"],
            description: "",
            images: [
                {color: "grey", source: greyPants},
                {color: "white", source: whitePants},
                {color: "black", source: blackPants},
            ],
            category: "sweat pants"
        },
    ],
    categories: ["hoodies", "shirts", "sweat pants"],
    users: [
        {
            id: 1,
            name: "Philip Cudjoe",
            email: "philip@gmail.com",
            password: "philipcudjoe"
        }
    ]
}