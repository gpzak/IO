import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

class Login extends Component {

constructor(props) {
    super(props);

    this.ZmianaWCzasieRzeczywistynInput2 = this.ZmianaWCzasieRzeczywistynInput2.bind(this);
    //Aby Scope w funkcji ZmianaWCzasieRzeczywistynInput byl scopem klasy - nie funkcji

    this.state = {
        login:'',
        haslo:''
    }
}


KlikniecieSubmit2 = async (event) => {
    event.preventDefault();

    const OdpowiedzSerwera2 = await axios.post('/api/Uzytkownik/Logowanie', {
        login: this.state.login,
        haslo: this.state.haslo
    });

    this.setState({
        login:'',
        haslo:''
        
    });

    if(OdpowiedzSerwera2.data.zwracam_czy_poprawne===true)
    alert("Zostałeś zalogowany!")
    else
    alert("BŁĄD! Nie poprawne dane!")
} 


ZmianaWCzasieRzeczywistynInput2(event) 
{
  
    const target = event.target;
    const value = target.value;
    
    const state = {...this.state}

    state[target.name] = value;
    
   
    this.setState(state);
}

render() {
    return (
        <div>  
            <div id="BarLogow">
                <h3>Logowanie:</h3>
            </div>
            <div id="BarLogow2">
                <form onSubmit={this.KlikniecieSubmit2}> 
                    <label>Login: </label><br/>
                    <input type="text" name="login" value={this.state.login} required onChange={this.ZmianaWCzasieRzeczywistynInput2}/><br/>
                    <label>Hasło: </label><br/>
                    <input type="password" name="haslo" value={this.state.haslo} required onChange={this.ZmianaWCzasieRzeczywistynInput2}/><br/><br/>
                    <button id="zalo">Zaloguj się!</button>

                    <center><p>Nie masz konta? </p><Link to="/rejestracja">Zarejestruj się!</Link></center>
                    
                </form>
            </div>
        </div>
    );
  }
}

export default Login;