import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import img from '../../assets/user.jpg'
const ForumItem=(props)=>{                
    return(
        <>
            <div className="my-4 mx-36" key={props.id}>
                <div style={{background:"rgb(255,255,250)",boxShadow:"1px 1px 10px grey"}} className="h-auto p-2 rounded-xl" >
                    <div style={{gridTemplateColumns:"auto"}} className="grid grid-cols-1">
                        <div style={{gridTemplateRows:"40px 100px 10px auto"}} className="grid grid-rows-4 mx-3">
                            <div className="flex items-center text-xl font-bold">{props.title}</div>
                            <div className="overflow-hidden text-justify overflow-ellipsis">{props.desc}</div>
                            <hr className="mt-1 mr-2 border-gray-400 "/>
                            <div className="grid items-center grid-cols-3 my-2">                                
                                <div className="flex items-center ">
                                    <div style={{width:"40px",height:"40px",borderRadius:"50%",overflow:"hidden"}}>
                                        <img src={img} className="w-auto h-full "/>
                                    </div>
                                    <div className="ml-1 text-sm font-medium">Posted by {props.user}</div>
                                </div>
                                <div className="flex justify-center text-sm font-medium">{props.createOn}</div>
                                <div className="flex items-center justify-end mr-3">
                                    <div><FontAwesomeIcon size="1x" icon={['far', 'comment']} /></div>
                                    <div className="ml-2 text-sm font-medium">{props.replay}</div>
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