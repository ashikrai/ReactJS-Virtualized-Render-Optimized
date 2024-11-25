import { userData } from "../assets/interfaces/dataTypeDefinitions"
import "../assets/css/AccordionItem.css"

interface accordionItemType{
    accordionData: userData,
    onClick: any,
    index: number,
    isOpen: boolean
}
export default function AccordionItem({accordionData, onClick, index, isOpen}:accordionItemType) {
  return (
    <div className="accordionContainer">
        <div className={`accordionTitle ${isOpen ? "activeaccordionTitle" : ""}`} onClick={() => onClick(isOpen ? -1 : index)}>
            <div className="accordionIndex">
                {/* <DragIndicatorIcon /> */}
                {/* <p>{index+1}</p> */}
            </div>
            <div className="avatarContainer">
                <img alt="userImage" className="avatar" src={accordionData.fakerAvatar}/>
            </div>
            <p className="title">{accordionData.fakerUsername}</p>
            <div className="accordionTitleIcon">
                {isOpen ? "^": "v"}
            </div>
        </div>
        <div className={`accordionBody ${isOpen ? "show" : "hide"}`}>
            <p>{accordionData.fakerUsername}</p>
            <p>{accordionData.fakerUserId}</p>
            <p>{JSON.stringify(accordionData)}</p>
        </div>
    </div>
  )
}
