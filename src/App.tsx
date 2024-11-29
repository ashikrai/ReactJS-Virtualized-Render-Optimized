import { useEffect, useState } from 'react';
import { faker } from '@faker-js/faker';
import { userData } from './assets/interfaces/dataTypeDefinitions';

import Footer from './components/Footer'
import AccordionList from './components/AccordionList'
import { Badge, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import './assets/css/App.css'

import logo from "./assets/images/Behind_PXL_orgi_large.png"
import AccordionRenderSettings from './components/AccordionRenderSettings';
import { renderModes } from './assets/utils/constants';
import AccordionVirtualized from './components/AccordionVirtualized';
// import { render } from 'react-dom';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: -1,
      left: -1,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

function App() {
  const [userData, setUserData]= useState<userData[] | null>(null)
  let prevData: userData[] | null= null ;
  const [openLeftContent, setOpenLeftContent]= useState(true)
  const [dataSize, setDataSize]= useState(1000);
  const [renderMode, setRenderMode]= useState(renderModes.default);

  // Here we are creating a dataset of userData of size dataSize
  // After we create the dataset we update the state variable userData
  useEffect(() => {
    const tempData: userData[]= [];
    for(let i= 0; i < dataSize; i++)
      tempData.push(createRandomUser());
    setUserData(tempData)
    prevData= tempData;
  },[])

  useEffect(() => {
    const tempData: userData[]= [];
    console.log("Prev data is null "+(prevData == null))
    if(prevData != null){
      console.log("Prev Data Size "+prevData?.length)
      console.log("New Data Size "+dataSize)
      if(dataSize == prevData.length)
        return;
      if (dataSize < prevData.length){
        console.log("Creating slice")
        setUserData(prevData.slice(dataSize))
      }
      else{
        const diffSize= dataSize - prevData.length;
        console.log("Diff is "+diffSize)
        for(let i= 0; i < diffSize; i++)
          tempData.push(createRandomUser());
        console.log("Added "+tempData.length+" new Records")
        prevData= [...prevData, ...tempData]
        console.log("New Added size is "+prevData.length)
        setUserData((prevState) => ({
          ...prevState,
          ...tempData,
        }))
      }
    }else{
      for(let i= 0; i < dataSize; i++)
        tempData.push(createRandomUser());
      setUserData(tempData)
    }
  },[dataSize])

  // Here we are creating a random user data using faker library
  function createRandomUser():userData {
    return {
      fakerUserId: faker.string.uuid(),
      fakerUsername: faker.internet.username(), // before version 9.1.0, use userName()
      fakerEmail: faker.internet.email(),
      fakerAvatar: faker.image.avatar(),
      fakerPassword: faker.internet.password(),
      fakerBirthdate: faker.date.birthdate(),
      fakerRegisteredAt: faker.date.past(),
      fakerBio: faker.lorem.paragraphs({min: 3, max: 5}),
      fakerGender: faker.person.gender(),
      fakerZodiac: faker.person.zodiacSign(),
      fakerJobTitle: faker.person.jobTitle(),
      fakerJobDesc: faker.person.jobDescriptor(),
      fakerFinance:{
        fakerAccountNumber: faker.finance.accountNumber(),
        fakerAmount: faker.finance.amount({ min: 5, max: 10, dec: 2, symbol: '$' }),
        fakerCreditCardCVV: faker.finance.creditCardCVV(),
        fakerCreditCardIssuer: faker.finance.creditCardIssuer(),
        fakerCreditCardNumber: faker.finance.creditCardNumber(),
      },
    };
  }

  return (
    <div className='MainContainer'>
      <div className="Header">
        <h3 className="title">Learning React Virtualized</h3>
        <p className="title">Rendering Accordian <p className={renderMode===renderModes.optimized ? "showTitle" : "hideTitle"}>Virtualized</p> List</p>
      </div>
      <div className="Body">
        <div className={openLeftContent ? "leftBodyContentOpen": "leftBodyContentClose"}>
          <div className="LBC-HeaderContent" onClick={() => setOpenLeftContent(!openLeftContent)} >
            <Tooltip title={openLeftContent ? "Hide Setting" : "Open Setting"} placement="right-start">
              <StyledBadge
                className="logoContainer"
                overlap="circular"
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                variant="dot"
              >
                <img className="logo" alt="logo" src={logo}/>
              </StyledBadge>
            </Tooltip>
            <div className="LBC-HC-Text">
              <h3 style={{padding: "0%", lineHeight: "70%", margin: "0%"}}>React Virtualized</h3>
              <p style={{padding: "0%", margin: "0%"}}>Optimize React Renders</p>
            </div>
            <div className="BackArrowIcon">
              <ArrowBackIcon />
            </div>
          </div>
          <div className="leftBodyContent">
            <AccordionRenderSettings dataSize={dataSize} callback={setDataSize} renderMode={renderMode} callbackMode={setRenderMode} />
          </div>
        </div>
        <div className="rightBodyContent">
          <p 
            style={{
              margin: '0%', padding: '0%', 
              color: 'white', display: 'fixed', 
              fontSize: 'calc(10px + 0.1vw)'}}
          >
            Rendered {dataSize} items
          </p>
          {
            renderMode === renderModes.optimized ?
             <AccordionVirtualized data={userData}/>
            :
              <AccordionList data={userData}/>
          }
        </div>
      </div>
      <div className="Footer">
        <Footer />
      </div>

    </div>
  )
}

export default App
