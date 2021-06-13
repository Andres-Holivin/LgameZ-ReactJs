import { Menu, Transition } from '@headlessui/react'
import AuthService from '../../configs/AuthService';
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const LogOut=(e)=>{
    e.preventDefault();
    console.log("a");
    AuthService.logout();
    window.location.reload();
}
const ProfileNav=(props)=>{
    return(
        <>
            <Menu.Item>                
                {({ active }) => (
                    <a href={props.href}
                        onClick={props.title=='LogOut'?e=>LogOut(e):""}
                        key={props.title}
                        className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                        )}
                    >
                        {props.title}
                    </a>
                )}
                
            </Menu.Item>
        </>
    ) 
}
export default ProfileNav;