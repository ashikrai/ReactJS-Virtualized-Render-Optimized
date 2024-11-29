import {useState} from "react"
import { userData } from "../assets/interfaces/dataTypeDefinitions"
import "../assets/css/AccordionItem.css"
import DragIndicator from "@mui/icons-material/DragIndicator"
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import { Avatar, Box, Tab, Tabs } from "@mui/material";
import PropTypes from 'prop-types';

interface accordionItemType{
    accordionData: userData,
    onClick: (index:number)=>void,
    index: number,
    isOpen: boolean
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
}
  
CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
  
function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}

  
export default function AccordionItem({accordionData, onClick, index, isOpen}:accordionItemType) {
    const [activeTab, setActiveTab] = useState(0);

    const handleChange = (_: React.SyntheticEvent, newValue: number) => {
        setActiveTab(newValue);
    };
  
    return (
        <div className="accordionContainer" style={{width: `${isOpen ? "100%": "30%"}`}}>
        {/* <div className="accordionContainer" style={{width: `${isOpen ? "100%": "30%"}`, order: `${isOpen ? (3 * (Math.floor(index/3)))-1: index}`}}> */}
            <div className={`accordionTitle ${isOpen ? "activeaccordionTitle" : ""}`} onClick={() => onClick(isOpen ? -1 : index)}>
                <div className="accordionIndex">
                    <DragIndicator className="icon"/>
                    <p>{index+1}</p>
                </div>
                {/* { isOpen? null
                : */}
                    <div className={`avatarContainer`}>
                        <img alt="userImage" className="avatar" src={accordionData.fakerAvatar}/>
                    </div>
                {/* } */}
                    <p className="title">{accordionData.fakerUsername} </p>
                <div className="accordionTitleIcon">
                    <ExpandCircleDownIcon className={isOpen ? "arrowUpIcon" : "arrowDownIcon"}/>
                </div>
            </div>
            {isOpen ?
                <div className={`accordionBody ${isOpen ? "show" : "hide"}`}>
                    <div className="profile">
                        <Avatar src={accordionData.fakerAvatar} className="avatar"/>
                        <div>
                            <h2>{accordionData.fakerUsername}</h2>
                            <p>{accordionData.fakerUserId}</p>
                            <p>{accordionData.fakerEmail}</p>
                        </div>
                        <div>
                            <h2>Occupation</h2>
                            <p>{accordionData.fakerJobTitle}</p>
                            <p>{accordionData.fakerJobDesc}</p>
                        </div>
                    </div>
                    <div className="ProfileTab">
                        <Box sx={{ width: '100%' }}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs value={activeTab} onChange={handleChange} aria-label="User Profile Tab">
                                    <Tab className="TabTitle" label="Personal" {...a11yProps(0)} />
                                    <Tab className="TabTitle" label="Finance" {...a11yProps(1)} />
                                    {/* <Tab label="Others" {...a11yProps(2)} /> */}
                                </Tabs>
                            </Box>
                            <CustomTabPanel value={activeTab} index={0}>
                                <table className="profileTable">
                                    <tbody>
                                        <tr className="row">
                                            <td className="tag">User ID</td>
                                            <td className="value">{accordionData.fakerUserId}</td>
                                        </tr>
                                        <tr className="row">
                                            <td className="tag">Email</td>
                                            <td className="value">{accordionData.fakerEmail}</td>
                                        </tr>
                                        <tr className="row">
                                            <td className="tag">User Name</td>
                                            <td className="value">{accordionData.fakerUsername}</td>
                                        </tr>
                                        <tr className="row">
                                            <td className="tag">Birthday</td>
                                            <td className="value">{accordionData.fakerBirthdate.toLocaleDateString()}</td>
                                        </tr>
                                        <tr className="row">
                                            <td className="tag">Registered Date</td>
                                            <td className="value">{accordionData.fakerRegisteredAt.toLocaleDateString()}</td>
                                        </tr>
                                        <tr className="row">
                                            <td className="tag">Gender</td>
                                            <td className="value">{accordionData.fakerGender}</td>
                                        </tr>
                                        <tr className="row">
                                            <td className="tag">Zodiac</td>
                                            <td className="value">{accordionData.fakerZodiac}</td>
                                        </tr>
                                        <tr className="row">
                                            <td className="tag">Bio</td>
                                            <td className="value">{accordionData.fakerBio}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </CustomTabPanel>
                            <CustomTabPanel value={activeTab} index={1}>
                                <table className="profileTable">
                                    <tbody>
                                        <tr className="row">
                                            <td className="tag">Bank Acc No</td>
                                            <td className="value">{accordionData.fakerFinance.fakerAccountNumber}</td>
                                        </tr>
                                        <tr className="row">
                                            <td className="tag">Amount</td>
                                            <td className="value">{accordionData.fakerFinance.fakerAmount}</td>
                                        </tr>
                                        <tr className="row">
                                            <td className="tag">Credit Card Issuer</td>
                                            <td className="value">{accordionData.fakerFinance.fakerCreditCardIssuer}</td>
                                        </tr>
                                        <tr className="row">
                                            <td className="tag">Card Number</td>
                                            <td className="value">{accordionData.fakerFinance.fakerCreditCardNumber}</td>
                                        </tr>
                                        <tr className="row">
                                            <td className="tag">Card CVV</td>
                                            <td className="value">{accordionData.fakerFinance.fakerCreditCardCVV}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </CustomTabPanel>
                            <CustomTabPanel value={activeTab} index={2}>
                                Item Three
                            </CustomTabPanel>
                        </Box>
                    </div>
                </div>
            :null}
        </div>
    )
}
