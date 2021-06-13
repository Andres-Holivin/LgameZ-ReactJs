import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import {useState} from 'react'
import './ForumForm.css'
import AuthService from '../../configs/AuthService'

const ForumForm = ({exit, post}) =>{

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const InsertThread=()=>{
        let id=JSON.parse(localStorage.getItem('user')).userId
        AuthService.InsertThread(id.toString(),title,content)
        .then(alert("succes"))
        .catch(alert("error"))
    }
    return (
        <div className="container">
            <div style={{position:"absolute",marginLeft:"-30px",marginTop:"-15px"}} className="flex justify-end transform cursor-pointer hover:scale-125" onClick = {exit}>
                <FontAwesomeIcon size="3x" icon={['fas', 'times-circle']} />
            </div>
            <div className="form-input">
                <div className="flex flex-col justify-center p-4">
                    <div className="flex justify-center font-sans text-2xl font-bold">
                        Create A Post
                    </div>
                    <div className="flex justify-center text-lg">
                        Title
                    </div>
                    <div className="w-full">
                        <input style={{outline:"none"}} type="text" className="w-full h-8 rounded-lg" onChange={(e) => setTitle(e.target.value)}/>
                    </div>
                    <div className="flex justify-center text-lg">
                        Content
                    </div>
                    <div className="w-full">
                        <textarea style={{outline:"none"}} className="w-full rounded-lg h-14" onChange={(e) => setContent(e.target.value)} />
                    </div>
                    <div className="flex justify-center">
                        <input onClick={()=>InsertThread()} className="px-4 py-2 m-2 text-lg font-semibold text-white bg-blue-300 rounded-lg" type="submit" value="Post"/>
                    </div>
                </div>
               
            </div>
        </div>
    )
}



export default ForumForm
