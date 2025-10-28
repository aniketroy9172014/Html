const users= [
    {
        name: "Samantha Rodriguez",
        bio: "UX/UI Designer passionate about accessibility and minimalist design principles.",
        social: {
            insta: "samantha.designs",
            fb: "SamanthaRodriguezDesign",
            x: "SamRodUX"
        }
    },
    {
        name: "Ethan Clark",
        bio: "Senior Data Scientist specializing in machine learning models for predictive analytics.",
        social: {
            insta: "ethan_clark_ds",
            fb: "EthanClarkDataScience",
            x: "EthanClarkML"
        }
    },
    {
        name: "Priya Singh",
        bio: "Professional chef and food blogger, focused on plant-based Indian fusion cuisine.",
        social: {
            insta: "priya_kitchen_magic",
            fb: "PriyaSinghFoodie",
            x: "PriyaFusion"
        }
    },
    {
        name: "Marcus Jones",
        bio: "Freelance photographer and travel enthusiast, currently documenting remote landscapes.",
        social: {
            insta: "marcus.captures",
            fb: "MarcusJonesPhoto",
            x: "MarcusTravelPics"
        }
    },
    {
        name: "Liam O'Connell",
        bio: "Cybersecurity consultant and ethical hacker, providing penetration testing services.",
        social: {
            insta: "liam_cyber_sec",
            fb: "LiamOCSecurity",
            x: "LiamOHacks"
        }
    }
]


function shuffle(){
    const random= Math.floor(Math.random()*5)
    const user= users[random]

    for(let key in user){
        if(key=== "social"){
            for(let keyitem in user.social){
                document.getElementById(`${keyitem}`).textContent= user.social[keyitem]
            }
        }
        else{
            document.getElementById(`${key}`).textContent= user[key]
        }
    }

}