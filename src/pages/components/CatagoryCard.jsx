import img from '../../assets/flaccid-anemone-6203188_1920.jpg'
const CatagoryCard=()=>{
    return(
        <>
            <div style={{boxShadow:"5px 5px 5px grey"}} className="relative m-4 hover:opacity-100">
                <img className="block" src={img} title="world"/>
                <div 
                    style={{textAlign:"",background:"rgba(0, 0, 0, 0.2)"}} 
                    className="absolute bottom-0 w-full h-full p-2 text-white">
                        <div className="flex items-end justify-start h-full p-4 text-xl font-semibold break-words w-44">
                            hello world sayur bayam
                        </div>
                </div>
            </div>
        </>
    )
}
export default CatagoryCard;