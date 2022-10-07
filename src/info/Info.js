import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"


/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Daniel",
    lastName: "Lanciotti",
    initials: "DL", // the example uses first and last, but feel free to use three or more if you like.
    position: " a Junior Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '🎮​',
            text: 'Tech Junkie'
        },
        {
            emoji: '🌎',
            text: 'Based in Argentina'
        },
        {
            emoji: "💼",
            text: "Looking for my First IT job"
        },
        {
            emoji: "📧",
            text: "daniellanciotti@gmail.com"
        }
    ],
    socials: [
       
        
        {
            link: "https://github.com/danlantuc",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/daniel-lanciotti-%F0%9F%87%A6%F0%9F%87%B7-3314aa48/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com/LanciottiDaniel",
            icon: "fa fa-twitter",
            label: 'twitter'
        },
        {
            link: "https://www.instagram.com/dannylanciotti/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Daniel and Welcome to my Portfolio. I'm trying to make my first steps in the IT industrie as a Junior Front End Developer. I've studied Full Stack development in UTN Argentina, Im very proficient and allways a team player. You should hire me!" ,
    skills:
        {
            proficientWith: ['Javascript', 'React', 'Node.js', 'Github', 'Bootstrap', 'Html5', 'Tailwindcss', 'Next.js'],
            exposedTo: ['Express.js', 'MongoDB' ]
        }
    ,
    hobbies: [
        {
            label: 'Motorcycles',
            emoji: '🏍️​'
        },
        {
            label: 'Sports',
            emoji: '🚴‍♂️​'
        },
        {
            label: 'videogames ',
            emoji: '🎮​'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Wallet App Project",
             //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/danlantuc/control-presupuesto", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Crypto Price Calculator Project ",
            
            source: "https://github.com/danlantuc/cotizador-cripto",
            image: mock2
        },
        {
            title: "Travel Agency SPA",
            
            source: "https://github.com/danlantuc/Travel-Agency",
            image: mock3
        },
        {
            title: "CRM Vet Project",
           
            source: "https://github.com/danlantuc/Control-Veterinaria",
            image: mock4
        },
        
    ]
}