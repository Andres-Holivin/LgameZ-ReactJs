import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import RouterObject from'../configs/RouterObject';
const Routers =()=>{
    return(
        <Router>
            <Switch>
                {
                    RouterObject?
                    RouterObject.map((data,id)=>
                        <Route 
                        key={id} 
                        path={data.Path} 
                        exact 
                        children={<data.Compenent/>}/>
                    )
                    :""
                }
            </Switch>
        </Router>
    )
}
export default Routers;