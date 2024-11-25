import { useEffect, useState } from 'react';
import './assets/css/App.css'
import AccordionList from './components/AccordionList'
import Footer from './components/Footer'
import { fa, faker } from '@faker-js/faker';
import { userData } from './assets/interfaces/dataTypeDefinitions';

function App() {
  const [userData, setUserData]= useState<userData[] | null>(null)
  const dataSize= 100;
  useEffect(() => {
    const tempData: userData[]= [];
    for(let i= 0; i < dataSize; i++)
      tempData.push(createRandomUser());
    setUserData(tempData)
  },[])

  function createRandomUser():userData {
    return {
      fakerUserId: faker.string.uuid(),
      fakerUsername: faker.internet.username(), // before version 9.1.0, use userName()
      fakerEmail: faker.internet.email(),
      fakerAvatar: faker.image.avatar(),
      fakerPassword: faker.internet.password(),
      fakerBirthdate: faker.date.birthdate(),
      fakerRegisteredAt: faker.date.past(),
      fakerBio: faker.lorem.paragraphs({min: 5, max: 14}),
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
      <div className="Header"></div>
      <div className="Body">
        <h1>Learning React-Virtualized</h1>
        <AccordionList data={userData}/>
      </div>
      <div className="Footer">
        <Footer />
      </div>

    </div>
  )
}

export default App
