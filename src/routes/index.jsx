import { Switch, Route } from "react-router-dom"
import FruitsPage from "../pages/FruitsPage"

const Routes = () =>{
    return (
        <Switch>
            <Route path="/">
                <FruitsPage />
            </Route>
        </Switch>
    )
}

export default Routes;