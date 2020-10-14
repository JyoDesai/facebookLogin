import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FacebookLoginBtn from 'react-facebook-login';


export default class LoginFacebook extends Component{
    state ={
        auth: false,
        name: '',
        email: '',
        picture: ''
    }
    componentClicked = () => {
        console.log("Facebook button clicked");
    }
    responseFacebook = (response) => {
        console.log(response);
        if(response.status !== 'unknown')
        this.setState({
            auth: true,
            name: response.name,
            email: response.email,
            picture: response.picture.url
        })
    }
    render(){

        let facebookData;
        this.state.auth ?
        facebookData = (
            <div>
                {/* Hiiiiii!!! */}
                <img src={this.state.picture} alt={this.state.name} />
                <h2>Welcome {this.state.name}</h2>
            </div>
        ) :
        facebookData = (
            <FacebookLoginBtn
            appId="779391192631609"
            autoLoad={true}
            fields="name,email,picture"
            onClick={this.componentClicked}
            callback={this.responseFacebook} />
        )
    
        return(
            <div>
                { facebookData }
            </div>
        );
    }

}