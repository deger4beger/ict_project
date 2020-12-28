import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import NotFound from "./components/Other/NotFound"
import Header from "./components/Header/Header"
import HomePage from "./components/MainBlock/HomePage/HomePage"
import Footer from "./components/Footer/Footer"
import About from "./components/MainBlock/About/About"
import Contacts from "./components/MainBlock/Contacts/Contacts"
import Team from "./components/MainBlock/Team/Team"
import Services from "./components/MainBlock/Services/Services"
import Order from "./components/MainBlock/Order/Order"
import Feedback from "./components/MainBlock/Feedback/Feedback.jsx"

function App() {
  return (
    <div>
    <Header />
    <div className="wrapper">
	  	<Switch>
	  		<Route exact path="/">
	  			<Redirect to="/homepage"/>
	  		</Route>
	        <Route path="/homepage" render={() =>
	            <HomePage />}/> 
	        <Route path="/about" render={() =>
	            <About />}/>  
	        <Route path="/contacts" render={() =>
	            <Contacts />}/>
	        <Route path="/team" render={() =>
	            <Team />}/>
	        <Route path="/services" render={() =>
	            <Services />}/> 
            <Route path="/order" render={() =>
	            <Order />}/>
	        <Route path="/feedback" render={() =>
	            <Feedback />}/>                        
	        <Route path="*" render={() =>
	            <NotFound />}/> 
	    </Switch>
	<Footer />     
    </div>   
    </div>
  );
}

export default App;
