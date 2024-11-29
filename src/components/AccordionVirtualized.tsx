import { userData } from '../assets/interfaces/dataTypeDefinitions';

import "../assets/css/AccordionVirtualized.css"

interface accordionDatatype{
    data: userData[] | null;
}
export default function AccordionVirtualized({data}:accordionDatatype) {
  return (
    <div className="accordionListContainer">
      <h1>Accordion Virtualized</h1>
      <p>{JSON.stringify(data)}</p>
    </div>
  )
}
