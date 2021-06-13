import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios';
import { useEffect, useState } from 'react';
import AuthService from '../../configs/AuthService';
import ForumItem from "../components/ForumItem";
import ForumForm from './ForumForm';
const Forum=()=>{
    const [Data, setData] = useState()
    const [form_active, activate_form] = useState(false)
    useEffect(() => {       
        const getData=async()=>{
            let x=AuthService.getForum()
            let y=await x
            setData(y.data.Forum)
        }
        getData()
    }, [])
    const GetReplay=()=>{
        if(Data!=null){
            console.log(Data)            
            let res=[];
            for(let i=0;i<Data.length;i++){
                res.push(<ForumItem 
                        
                        createOn={Data[i].create_on}
                        desc={Data[i].description}
                        id={Data[i].threadid}
                        title={Data[i].title}
                        user={Data[i].user_in}
                        replay={Data[i].replay.length}
                        />)
            }
            return res
        }
    }
    return(
        <>
            {form_active ? (
                    <ForumForm exit={()=>activate_form(false)}>
                    </ForumForm>
                ) : '' }
            <div className="flex items-center justify-between mx-24 my-4">
                <div>
                    <input onClick={() => activate_form(true)} style={{backgroundColor:"#56DF4B",boxShadow:"5px 5px 10px grey"}} className="px-3 py-2 font-medium text-white rounded-lg hover:bg-green-400 " type="submit" value="Create New"/>
                </div>
                <div className="">
                    <input className="p-1 mr-2 rounded-lg outline-none focus:ring-2 focus:ring-offset-blue-300" placeholder="Search by Title"/>
                    <a><FontAwesomeIcon size="1x" icon={['fas', 'search']} /></a>
                </div>
            </div>
            <div className="grid grid-cols-1">
                {GetReplay()}
            </div>
        </>
    )
}
export default Forum;