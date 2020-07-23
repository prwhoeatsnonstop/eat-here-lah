import React from "react";
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import Landing from "./routes/Landing";
import Home from "./routes/Home";
import UpdatePage from "./routes/UpdatePage";
import RestaurantDetailPage from "./routes/RestaurantDetailPage";
import { RestaurantsContextProvider } from "./context/RestaurantsContext";

const App = () => {
    return (
        <RestaurantsContextProvider>
            <div className="container">
                <Router>
                    <Switch>
                        <Route 
                            exact path="/" 
                            component={Landing}
                        />
                         <Route 
                            exact path="/restaurants" 
                            component={Home}
                        />
                        <Route 
                            exact path="/restaurants/:id/update" 
                            component={UpdatePage}
                        />
                        <Route 
                            exact path="/restaurants/:id" 
                            component={RestaurantDetailPage}
                        />
                    </Switch>
                </Router>
            </div>
        </RestaurantsContextProvider>
    )
}

export default App;