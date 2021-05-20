import img from '../../assets/flaccid-anemone-6203188_1920.jpg'
import img2 from '../../assets/mountains-6207115_1920.jpg'
const NewsCard=()=>{
    return(
        <>
            <div className="flex flex-col items-center h-full mx-8 my-7 ">
                <div style={{boxShadow:"2px 2px 15px grey"}} className="p-3 bg-white rounded-xl">
                    <div style={{width:"100%",height:"250px",overflow:"hidden"}} className="flex justify-center">
                        <img src={img} className="w-auto h-full" />    
                    </div>
                    <div style={{gridTemplateRows:"20px 30px 100px 30px"}} className="grid grid-rows-4 mt-2">
                        <div className="text-xs font-medium text-blue-500">Catagory</div>
                        <div className="text-lg font-bold">Title</div>
                        <div className="overflow-hidden text-justify overflow-ellipsis">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum iaculis in libero et lobortis. Vestibulum a fringilla odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla convallis erat sit amet malesuada malesuada. Nam lacus purus, efficitur sed tincidunt ut, porta non dui. Nulla libero ex, lobortis in metus non, tristique pellentesque est. Cras sit amet risus sed augue viverra ultrices ut at orci. Nulla interdum ornare erat eget lacinia. Nullam vitae lacus eget velit fermentum laoreet. Aliquam nec felis maximus, fermentum orci id, congue augue. Proin finibus ac nulla scelerisque ornare. Sed facilisis tincidunt nulla ac dictum. Curabitur sed molestie orci. Proin commodo tortor vitae pharetra consectetur. Phasellus ut diam nisi.</div>
                        <div className="flex items-center justify-center font-medium text-green-500">Read More</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default NewsCard;