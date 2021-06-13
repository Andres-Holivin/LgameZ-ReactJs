import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';
import { useHistory  } from 'react-router-dom';
import AuthService from '../../configs/AuthService';
const Login=()=>{
    let history=useHistory()           
    const [Username, setUsername] = useState();
    const [Password, setPassword] = useState();
    const [Alert, setAlert] = useState(false);
    const [Msg, setMsg] = useState("")
    const Validation=()=>{
        if(Username&&Password)return true;        
        else{
            setMsg("Username and password can't empty");
            setAlert(true);
            return false;
        }
    }
    const Login= async (e)=>{
        e.preventDefault();
        if(Validation()){
            AuthService.login(Username,Password)
            .then((data)=>{
                setMsg(data);
                setAlert(true);
                if(data=="Login in as "+Username){    
                    history.push("/")
                    window.location.reload();
                }
                console.log("success "+data);
            }).catch(()=>{
                console.log("error")
            })
        }
              
    }
    return (
        <div>
            <form onSubmit={e=>Login(e)} className="flex items-center justify-center">
                <div className="p-10 px-24 mt-10 bg-white rounded-xl">
                    <div className="flex justify-center mb-5 text-4xl font-bold">
                        Login
                    </div>
                    <div className="flex-col">
                        <div><label for="Username">Username</label></div>
                        <div className="flex mb-1">
                            <div className="my-2 ml-1 mr-3"><FontAwesomeIcon size="1x" icon={['fas', 'user']} /></div>
                            <input onChange={e=>setUsername(e.target.value)} className="outline-none w-60"  type="text" name="Username" id="Username" placeholder="Type your username"/>
                        </div>
                        <hr className="mt-0"/>
                    </div>
                    <div className="flex-col">
                        <div><label for="password">Password</label></div>
                        <div className="flex mb-1">
                            <div className="my-2 ml-1 mr-3"><FontAwesomeIcon size="1x" icon={['fas', 'lock']} /></div>
                            <input onChange={e=>setPassword(e.target.value)} className="outline-none w-60" type="password" name="password" id="password" placeholder="Type your password"/>
                        </div>
                        <hr className="mt-0"/>
                    </div>
                    <div className="flex justify-end">
                        <a href="/Forgot">Forgot password?</a>
                    </div>
                    <div className={`${Alert?"flex":"hidden"} gap-x-3 items-center justify-center  mt-3 bg-red-300 rounded-lg h-7`}>
                        <FontAwesomeIcon size="1x" icon={['fas', 'times-circle']}/>{Msg}
                    </div>
                    <div className="flex justify-center mt-7">
                        <input className="w-full p-2 font-semibold transform hover:scale-110 bg-gradient-to-r from-blue-300 via-green-300 to-blue-300 rounded-3xl" type="submit" value="Login"/>
                    </div>
                    <div className="flex justify-center mt-2">
                        <a href="/Register">Sign Up</a>
                    </div>
                </div>
            </form>
        </div>
    );
}
export default Login;