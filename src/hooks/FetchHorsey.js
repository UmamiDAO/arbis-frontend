import  {useEffect, useState} from 'react'
// access API and return strategy addressIn

const FetchHorsey = (addressIn) => {
    const [horsey, setHorsey] = useState([]);
    useEffect(async () => {
    let horseyFetch = await fetch('https://horseysauce.xyz');

    horseyFetch = await horseyFetch.json();
    if (addressIn == "stArbis")
    {setHorsey(horseyFetch.stArbis)} else{
    const horseyStrategy = horseyFetch.strategies.find(({ address }) => 
    address === addressIn );
    setHorsey(horseyStrategy);
    }
    
   }, []);
   return horsey;
}

export default FetchHorsey;
