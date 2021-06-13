import img from "../../assets/flowers-6206279_1920.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const CardHome =()=>{
  const x=3;
  const rating=[];
  const createRating=()=>{
    for(let i=0;i<5;i++){
      (i<x)?
      (rating.push(<div key={i.toString()} className=""><FontAwesomeIcon color="#FFFA47" size="1x" icon={['fas', 'star']} /></div>))
      :rating.push(<div key={i.toString()}className=""><FontAwesomeIcon size="1x" icon={['far', 'star']} /></div>)
    }
    return rating;   
  }
  return(
    <>
      <div style={{boxShadow:"0px 0px 10px 1px rgba(0,0,0,0.6)",borderRadius:"5px",width:"30vw"}} className="flex flex-col items-center w-56 h-64 bg-gray-300 ">
        <div className="h-40 px-3 pt-3">        
          <img className="w-full h-full" src={img} alt="gbr"/>
        </div>
        <div className="flex flex-col items-start w-full px-3">
          <div className="font-sans text-2xl font-bold">Titles</div>
          <div className="flex flex-row">
            {createRating()}
          </div>
          <div>Price</div>
        </div>
      </div>      
    </>
  )
}
export default CardHome;
