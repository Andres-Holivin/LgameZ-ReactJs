import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Login=()=>{
    return (
        <>
            <div className="flex items-center justify-center">
                <div className="p-10 px-24 mt-10 bg-white rounded-xl">
                    <div className="flex justify-center mb-5 text-4xl font-bold">
                        Login
                    </div>
                    <div className="flex-col">
                        <div><label for="Username">Username</label></div>
                        <div className="flex mb-1">
                            <div className="my-2 ml-1 mr-3"><FontAwesomeIcon size="1x" icon={['fas', 'user']} /></div>
                            <input className="outline-none w-60"  type="text" name="Username" id="Username" placeholder="Type your username"/>
                        </div>
                        <hr className="mt-0"/>
                    </div>
                    <div className="flex-col">
                        <div><label for="password">Password</label></div>
                        <div className="flex mb-1">
                            <div className="my-2 ml-1 mr-3"><FontAwesomeIcon size="1x" icon={['fas', 'lock']} /></div>
                            <input className="outline-none w-60" type="password" name="password" id="password" placeholder="Type your password"/>
                        </div>
                        <hr className="mt-0"/>
                    </div>
                    <div className="flex justify-end">
                        <a href="/Forgot">Forgot password?</a>
                    </div>
                    <div className="flex justify-center mt-5">
                        <input className="w-full p-2 font-semibold bg-gradient-to-r from-blue-300 via-green-300 to-blue-300 rounded-3xl" type="submit" value="Login"/>
                    </div>
                    <div className="flex justify-center mt-2">
                        <a href="/Register">Sing Up</a>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Login;