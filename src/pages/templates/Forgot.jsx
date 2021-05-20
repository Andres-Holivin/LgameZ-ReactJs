import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Forgot=()=>{
    return(
        <>
            <div className="flex items-center justify-center">
                <div className="p-10 px-24 mt-10 bg-white rounded-xl">
                    <div className="flex justify-center mb-5 text-4xl font-bold">
                        Forgot Password
                    </div>
                    <div className="flex-col">
                        <div><label for="Username">Email</label></div>
                        <div className="flex mb-1">
                            <div className="my-2 ml-1 mr-3"><FontAwesomeIcon size="1x" icon={['fas', 'envelope']} /></div>
                            <input className="outline-none" size="40" type="text" name="Username" id="Username" placeholder="Input your email"/>
                        </div>
                        <hr className="mt-0"/>
                    </div>                 
                    <div className="flex justify-center mt-5">
                        <input className="w-full p-2 font-semibold bg-gradient-to-r from-blue-300 via-green-300 to-blue-300 rounded-3xl" type="submit" value="Send"/>
                    </div>
                    <div className="flex justify-center">
                        <a href="/Login">Login</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Forgot;