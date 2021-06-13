import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from 'react-router-dom';
import AuthService from '../../configs/AuthService';
const Register=()=>{
    let history=useHistory() 
    const [startDate, setStartDate] = useState(new Date())
    const [FullName,setFullName]=useState()
    const [Username, setUsername] = useState()
    const [Email, setEmail] = useState()
    const [Password, setPassword] = useState()
    const [ConfirmPassword, setConfirmPassword] = useState()
    const [Alert, setAlert] = useState(false);
    const [Msg, setMsg] = useState("")
    const validation=()=>{
        var letter=/^[a-zA-Z\s]*$/;
        const emailval = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        let date= new Date();
        let dateNowMin10=new Date(date.setFullYear(date.getFullYear()-10));
        if(!letter.test(FullName)){
            setAlert(true);
            setMsg("Email only letter");
            return false;
        }
        if(!emailval.test(Email)){
            setAlert(true);
            setMsg("Wrong Email format");
            return false;
        }        
        if(startDate>dateNowMin10){
            setAlert(true);
            setMsg("Minimum age 10");
            return false;
        }
        if(Password!==ConfirmPassword){
            setAlert(true);
            setMsg("Password adn confirm password not same");
            return false;
        }
        return true;
    }
    const handelSubmit= async(e)=>{    
        e.preventDefault()
        if(validation()){
            let Date=startDate.getDay()+"/"+(startDate.getMonth()+1)+"/"+startDate.getFullYear();
            console.log(FullName.toString()+" "+Username.toString()+" "+Email.toString()+" "+Password.toString()+" "+Date)
            AuthService.register(FullName.toString(),Username.toString(),Email.toString(),Password.toString(),Date)
            .then((data)=>{
                setMsg(data);
                setAlert(true);
                // history.push("/Login")
                console.log("success "+data);
            }).catch(()=>{
                console.log("error")
            })
        }

    }
    return (        
        <>
            <form onSubmit={e=>{handelSubmit(e)}} className="flex items-center justify-center">
                <div className="p-10 px-24 my-10 bg-white rounded-xl">
                    <div className="flex justify-center mb-5 text-4xl font-bold">
                        Register
                    </div>
                    <div className="flex-col">
                        <div><label for="FullName">Full Name</label></div>
                        <div className="flex mb-1">
                            <div className="my-2 ml-1 mr-3"><FontAwesomeIcon size="1x" icon={['fas', 'id-card']} /></div>
                            <input 
                                className="outline-none w-60" 
                                type="text" name="FullName" id="FullName" placeholder="Type your Full Name"
                                onChange={e=>setFullName(e.target.value)}
                                required
                                />
                        </div>
                        <hr className="mt-0"/>
                    </div>
                    <div className="flex-col">
                        <div><label for="Username">Username</label></div>
                        <div className="flex mb-1">
                            <div className="my-2 ml-1 mr-3"><FontAwesomeIcon size="1x" icon={['fas', 'user']} /></div>
                            <input 
                                className="outline-none w-60"  
                                type="text" name="Username" id="Username" placeholder="Type your username"
                                onChange={e=>setUsername(e.target.value)}
                                required
                                />
                        </div>
                        <hr className="mt-0"/>
                    </div>
                    <div className="flex-couseHistoryl">
                        <div><label for="Email">Email</label></div>
                        <div className="flex mb-1">
                            <div className="my-2 ml-1 mr-3"><FontAwesomeIcon size="1x" icon={['fas', 'envelope']} /></div>
                            <input className="outline-none w-60"  onChange={e=>setEmail(e.target.value)} type="Email" name="Email" id="Email" placeholder="Type your Email" required/>
                        </div>
                        <hr className="mt-0"/>
                    </div>
                    <div className="flex-col">
                        <div><label >Birth Day Date</label></div>
                        <div className="flex items-center mb-1">
                            <div className="my-2 ml-1 mr-3"><FontAwesomeIcon size="1x" icon={['fas', 'calendar']} /></div>
                            <DatePicker
                                dateFormat="dd/MM/yyyy"
                                className="outline-none w-60"
                                selected={startDate}
                                onChange={date => setStartDate(date)}
                                isClearable
                                placeholderText="Input your Birth Day"
                            />
                        </div>
                        <hr className="mt-0"/>
                    </div>
                    <div className="flex-col">
                        <div><label for="password">Password</label></div>
                        <div className="flex mb-1">
                            <div className="my-2 ml-1 mr-3"><FontAwesomeIcon size="1x" icon={['fas', 'lock']} /></div>
                            <input 
                                className="outline-none w-60"
                                type="password" name="password" id="password" placeholder="Type your password"
                                onChange={e=>setPassword(e.target.value)}
                                required
                                />
                        </div>
                        <hr className="mt-0"/>
                    </div>
                    <div className="flex-col">
                        <div><label for="cfmpassword">Confirm Password</label></div>
                        <div className="flex mb-1">
                            <div className="my-2 ml-1 mr-3"><FontAwesomeIcon size="1x" icon={['fas', 'lock']} /></div>
                            <input 
                                className="outline-none w-60" 
                                type="password" name="cfmpassword" id="cfmpassword" placeholder="Type your password"
                                onChange={e=>setConfirmPassword(e.target.value)}
                                required
                                />
                        </div>
                        <hr className="mt-0"/>
                    </div>
                    <div className="flex justify-end">
                        <a href="/Forgot">Forgot password?</a>
                    </div>
                    <div className={`${Alert?"flex":"hidden"} gap-x-3 items-center justify-center  mt-3 bg-red-300 rounded-lg h-7`}>
                        <FontAwesomeIcon size="1x" icon={['fas', 'times-circle']}/>{Msg}
                    </div>
                    <div className="flex justify-center mt-5">
                        <input className="w-full p-2 font-semibold bg-gradient-to-r from-blue-300 via-green-300 to-blue-300 rounded-3xl" type="submit" value="Register"/>
                    </div>
                    <div className="flex justify-center mt-2">
                        <a href="/Login">Login</a>
                    </div>
                    <div className="items-center hidden p-2 my-3 bg-red-300 rounded">
                        hello
                    </div>
                </div>
            </form>
        </>
    );
}
export default Register;