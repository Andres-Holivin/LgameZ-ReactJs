import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ForumItem from "../components/ForumItem";
const Forum=()=>{
    return(
        <>
            <div className="flex items-center justify-between mx-24 my-4">
                <div>
                    <input style={{backgroundColor:"#56DF4B",boxShadow:"5px 5px 10px grey"}} className="px-3 py-2 font-medium text-white rounded-lg hover:bg-green-400 " type="submit" value="Create New"/>
                </div>
                <div className="">
                    <input className="p-1 mr-2 rounded-lg outline-none focus:ring-2 focus:ring-offset-blue-300" placeholder="Search by Title"/>
                    <a><FontAwesomeIcon size="1x" icon={['fas', 'search']} /></a>
                </div>
            </div>
            <div className="text-xl font-semibold mx-36">
                Sort
            </div>
            <div className="grid grid-cols-1">
                <ForumItem/>
                <ForumItem/>
                <ForumItem/>
                <ForumItem/>
                <ForumItem/>
                <ForumItem/>
                <ForumItem/>                
            </div>
            <div>
                hello
            </div>
        </>
    )
}
export default Forum;