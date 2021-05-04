import Crud from "../pages/templates/Crud";
import Home from "../pages/templates/Home";
const router=[
    {
        Path:"/",
        Compenent:()=><Home/>
    },
    {
        Path:"/Crud",
        Compenent:()=><Crud/>
    }
]
export default router;

