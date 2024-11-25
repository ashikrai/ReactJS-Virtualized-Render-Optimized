import { useState } from "react";
import AccordionItem from "./AccordionItem";
import {userData} from "../assets/interfaces/dataTypeDefinitions"

interface accordionDatatype{
    data: userData[] | null;
}

export default function AccordionList({data}:accordionDatatype) {
    const [activeaccordion, setActiveaccordion]= useState<number>(-1);

    const onClickFunction= (index:number) => {
        setActiveaccordion(index)
    }

    return (
        <div>
            {data && data.map((user:userData,index:number)=>(
                <div key={index}>
                    <AccordionItem onClick={onClickFunction} isOpen={index === activeaccordion} index={index} accordionData={user} />
                </div>
            ))
            }
        </div>
    )
}