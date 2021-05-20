import Crud from "../pages/templates/Crud";
import Home from "../pages/templates/Home";
import Login from "../pages/templates/Login";
import Register from "../pages/templates/Register";
import Forgot from "../pages/templates/Forgot";
import Catagoty from "../pages/templates/Catagory";
import Forum from "../pages/templates/Forum";
import News from "../pages/templates/News";
const router=[
    {
        Path:"/",
        Compenent:()=><Home/>
    },
    {
        Path:"/Crud",
        Compenent:()=><Crud/>
    },
    {
        Path:"/Login",
        Compenent:()=><Login/>
    },
    {
        Path:"/Register",
        Compenent:()=><Register/>
    },
    {
        Path:"/Forgot",
        Compenent:()=><Forgot/>
    },
    {
        Path:"/Catagoty",
        Compenent:()=><Catagoty/>
    },
    {
        Path:"/Forum",
        Compenent:()=><Forum/>
    },
    {
        Path:"/News",
        Compenent:()=><News/>
    }
]
export default router;

