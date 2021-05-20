import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import img from '../../assets/flaccid-anemone-6203188_1920.jpg'

const ForumItem=()=>{
    return(
        <>
            <div className="my-4 mx-36">
                <div style={{background:"rgb(255,255,250)",boxShadow:"1px 1px 10px grey"}} className="h-auto p-2 rounded-xl">
                    <div style={{gridTemplateColumns:"50px auto"}} className="grid grid-cols-2">
                        <div className="flex flex-col items-center gap-y-2">
                            <div><FontAwesomeIcon size="1x" icon={['fas', 'arrow-up']} /></div>
                            <div>53</div>
                            <div><FontAwesomeIcon size="1x" icon={['fas', 'arrow-down']} /></div>
                        </div>
                        <div style={{gridTemplateRows:"40px 100px 10px auto"}} className="grid grid-rows-4 mx-3">
                            <div className="flex items-center text-xl font-bold">hello</div>
                            <div className="overflow-hidden text-justify overflow-ellipsis">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum iaculis in libero et lobortis. Vestibulum a fringilla odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla convallis erat sit amet malesuada malesuada. Nam lacus purus, efficitur sed tincidunt ut, porta non dui. Nulla libero ex, lobortis in metus non, tristique pellentesque est. Cras sit amet risus sed augue viverra ultrices ut at orci. Nulla interdum ornare erat eget lacinia. Nullam vitae lacus eget velit fermentum laoreet. Aliquam nec felis maximus, fermentum orci id, congue augue. Proin finibus ac nulla scelerisque ornare. Sed facilisis tincidunt nulla ac dictum. Curabitur sed molestie orci. Proin commodo tortor vitae pharetra consectetur. Phasellus ut diam nisi.</div>
                            <hr className="mt-1 mr-2 border-gray-400 "/>
                            <div className="grid items-center grid-cols-3 my-2">                                
                                <div className="flex items-center ">
                                    <div style={{width:"40px",height:"40px",borderRadius:"50%",overflow:"hidden"}}>
                                        <img src={img} className="w-auto h-full "/>
                                    </div>
                                    <div className="ml-1 text-sm font-medium">Posted by hello</div>
                                </div>
                                <div className="flex justify-center text-sm font-medium">12hr ago</div>
                                <div className="flex items-center justify-end mr-3">
                                    <div><FontAwesomeIcon size="1x" icon={['far', 'comment']} /></div>
                                    <div className="ml-2 text-sm font-medium">50</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ForumItem;