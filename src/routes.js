import React from "react";
import { Switch, Route} from "react-router-dom";

//import the components
import Main from "./components/main";

const Routes = () => (

        <Switch>
            <Route exact path="/" component={Main} />
        </Switch>

)

export default Routes;
