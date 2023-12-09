import { StaticImageData } from "next/image"
import aboutOne from "@/public/aboutUs-sampleImg-one.svg"
import aboutSecond  from "@/public/aboutUs-sampleImg-second.svg"
import disclaimerImg  from "@/public/disclaimerImg.svg"
import privacyImg  from "@/public/privacyImg.svg"
import sdg1 from "@/public/sdg-01.png"
import sdg2 from "@/public/sdg-02.png"
import sdg3 from "@/public/sdg-03.png"
import sdg4 from "@/public/sdg-04.png"
import sdg5 from "@/public/sdg-05.png"
import sdg6 from "@/public/sdg-06.png"
import sdg7 from "@/public/sdg-07.png"
import sdg8 from "@/public/sdg-08.png"
import sdg9 from "@/public/sdg-09.png"
import sdg10 from "@/public/sdg-10.png"
import sdg11 from "@/public/sdg-11.png"
import sdg12 from "@/public/sdg-12.png"
import sdg13 from "@/public/sdg-13.png"
import sdg14 from "@/public/sdg-14.png"
import sdg15 from "@/public/sdg-15.png"
import sdg16 from "@/public/sdg-16.png"

import bg from "@/public/upcoming.svg"
export interface InfoType {
    info :String,
    image: StaticImageData
    }

export const aboutDescription:InfoType = {
        info : "The SDG Club is a vibrant community dedicated to promoting awareness and action for the United Nations' Sustainable Development Goals (SDGs). Comprising individuals from diverse backgrounds, the club serves as a hub for education, collaboration, and advocacy.",
        image: aboutOne
}
export const objectiveDescription:
InfoType = {
    info : "The Sustainable Development Goals (SDGs) aim to transform our world. They are a call to action to end poverty and inequality, protect the planet, and ensure that all people enjoy health, justice and prosperity. It is critical that no one is left behind.",
    image:aboutSecond
}
export const disclaimerDescription : InfoType = { 
    info : "Users are advised to verify information independently. Users are accountable for their contributions. The College isn't responsible for external links. Users grant a content license. The College reserves the right to moderates for compliance with guidlines.",
    image: disclaimerImg
}
export const privacyPolicyDescription : InfoType = { 
    info : "The SDG Club is a vibrant community dedicated to promoting awareness and action for the United Nations' Sustainable Development Goals (SDGs). Comprising individuals from diverse backgrounds, the club serves as a hub for education, collaboration, and advocacy.",
    image:privacyImg
}

export type CardType={
    name:String,
    image:StaticImageData
}[]

export const eventData:CardType = [
    {
        name:"Event Name",
        image:bg
    },
    {
        name:"Event Name",
        image:bg
    },
    {
        name:"Event Name",
        image:bg
    }
]
export const teamData:CardType = [
    {
        name:"Member Name",
        image:bg
    },
    {
        name:"Member Name",
        image:bg
    },
    {
        name:"Member Name",
        image:bg
    }
]

export type SDGGridType = {
    image:StaticImageData,
    title:String
    info:String
}
export const sdgGridData:SDGGridType[] =[
    {
        image:sdg1,
        title:"No Poverty",
        info:"lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ut perspiciatis distinctio sequi voluptatibus architecto, mollitia voluptates hic laborum error soluta totam reprehenderit, molestiae, dolor nesciunt facere exercitationem? Ducimus, dicta."
    },
    {
        image:sdg2,
        title:"Zero Hunger",
        info:"lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ut perspiciatis distinctio sequi voluptatibus architecto, mollitia voluptates hic laborum error soluta totam reprehenderit, molestiae, dolor nesciunt facere exercitationem? Ducimus, dicta."
    },
    {
        image:sdg3,
        title:"Good Health & Well-Being",
        info:"lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ut perspiciatis distinctio sequi voluptatibus architecto, mollitia voluptates hic laborum error soluta totam reprehenderit, molestiae, dolor nesciunt facere exercitationem? Ducimus, dicta."
    },
    {
        image:sdg4,
        title:"Quality Education",
        info:"lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ut perspiciatis distinctio sequi voluptatibus architecto, mollitia voluptates hic laborum error soluta totam reprehenderit, molestiae, dolor nesciunt facere exercitationem? Ducimus, dicta."
    },
    {
        image:sdg5,
        title:"Gender Equality",
        info:"lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ut perspiciatis distinctio sequi voluptatibus architecto, mollitia voluptates hic laborum error soluta totam reprehenderit, molestiae, dolor nesciunt facere exercitationem? Ducimus, dicta."
    },
    {
        image:sdg6,
        title:"Clean Water & Sanitation",
        info:"lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ut perspiciatis distinctio sequi voluptatibus architecto, mollitia voluptates hic laborum error soluta totam reprehenderit, molestiae, dolor nesciunt facere exercitationem? Ducimus, dicta."
    },
    {
        image:sdg7,
        title:"Affordable & Clean Energy",
        info:"lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ut perspiciatis distinctio sequi voluptatibus architecto, mollitia voluptates hic laborum error soluta totam reprehenderit, molestiae, dolor nesciunt facere exercitationem? Ducimus, dicta."
    },
    {
        image:sdg8,
        title:"Decent Work & Economic Growth",
        info:"lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ut perspiciatis distinctio sequi voluptatibus architecto, mollitia voluptates hic laborum error soluta totam reprehenderit, molestiae, dolor nesciunt facere exercitationem? Ducimus, dicta."
    },
    {
        image:sdg9,
        title:"Industry, Innovation and Infrastructure",
        info:"lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ut perspiciatis distinctio sequi voluptatibus architecto, mollitia voluptates hic laborum error soluta totam reprehenderit, molestiae, dolor nesciunt facere exercitationem? Ducimus, dicta."
    },
    {
        image:sdg10,
        title:"Reduced Inequalities",
        info:"lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ut perspiciatis distinctio sequi voluptatibus architecto, mollitia voluptates hic laborum error soluta totam reprehenderit, molestiae, dolor nesciunt facere exercitationem? Ducimus, dicta."
    },
    {
        image:sdg11,
        title:"No Sustainable Cities & Communities",
        info:"lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ut perspiciatis distinctio sequi voluptatibus architecto, mollitia voluptates hic laborum error soluta totam reprehenderit, molestiae, dolor nesciunt facere exercitationem? Ducimus, dicta."
    },
    {
        image:sdg12,
        title:"Responsible Consumption & Production",
        info:"lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ut perspiciatis distinctio sequi voluptatibus architecto, mollitia voluptates hic laborum error soluta totam reprehenderit, molestiae, dolor nesciunt facere exercitationem? Ducimus, dicta."
    },
    {
        image:sdg13,
        title:"Climate Action",
        info:"lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ut perspiciatis distinctio sequi voluptatibus architecto, mollitia voluptates hic laborum error soluta totam reprehenderit, molestiae, dolor nesciunt facere exercitationem? Ducimus, dicta."
    },
    {
        image:sdg14,
        title:"Life Below Water",
        info:"lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ut perspiciatis distinctio sequi voluptatibus architecto, mollitia voluptates hic laborum error soluta totam reprehenderit, molestiae, dolor nesciunt facere exercitationem? Ducimus, dicta."
    },
    {
        image:sdg15,
        title:"Life On land",
        info:"lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ut perspiciatis distinctio sequi voluptatibus architecto, mollitia voluptates hic laborum error soluta totam reprehenderit, molestiae, dolor nesciunt facere exercitationem? Ducimus, dicta."
    },
    {
        image:sdg16,
        title:"Peace, Justice & Strong Institutions",
        info:"lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ut perspiciatis distinctio sequi voluptatibus architecto, mollitia voluptates hic laborum error soluta totam reprehenderit, molestiae, dolor nesciunt facere exercitationem? Ducimus, dicta."
    },
    ] 
