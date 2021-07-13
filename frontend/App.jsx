import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


// components
//import sampleform from './Components/Vithursan/sampleform';
//import UserRegister from './Components/Vithursan/UserRegister';
//import ResearchRegister from './Components/Vithursan/ResearchRegister';
import ResearchRegister from './Components/Vithursan/ResearchRegister';
import WorkshopRegister from './Components/Vithursan/WorkshopRegister';
import UserNavBar from './Components/Vithursan/UserNavBar';
import RegisterHome from './Components/Vithursan/RegisterHome';
import GetResearch from './Components/Vithursan/GetResearch';


export default class App extends React.Component {
constructor(props) {
 super(props);
 }


 render() {
    return <Router>
        <UserNavBar/><br/><br/>
        <Switch>
        <Route path='/' exact={true} component={RegisterHome}/>
        <Route path='/research' exact={true} component={ResearchRegister}/>
        <Route path='/workshop' exact={true} component={WorkshopRegister}/>
        <Route path='/get' exact={true} component={GetResearch}/>
        </Switch>
    </Router>
   
 
 }
}
