import { StaticImageData } from "next/image"
import aboutOne from "@/public/aboutUs-sampleImg-one.svg"
import aboutSecond  from "@/public/aboutUs-sampleImg-second.svg"
import disclaimerImg  from "@/public/disclaimerImg.svg"
import privacyImg  from "@/public/privacyImg.svg"

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