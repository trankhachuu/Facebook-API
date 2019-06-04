import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

class Facebook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn : false, 
            userID : '', 
            name : '', 
            email : '', 
            picture : ''
        }
    }

    responseFacebook = (reposive) => {
        this.setState({
            isLoggedIn : true, 
            userID : reposive.userID, 
            name : reposive.name, 
            email : reposive.email, 
            picture : reposive.picture.data.url
        })
        console.log(reposive)
    }

    componentClicked = () => {
        console.log("Click")
    }
    
    render() {
        let fbContent;
        if (this.state.isLoggedIn) {
            fbContent = (<div style={{width : '1000px', margin : 'auto', background : "#f4f4f4", padding : "20px"}}>
                <img src={this.state.picture} alt={this.state.name} style={{width : '300px', height : '300px'}}/>
                <h2>Tên facebook của tôi là :  {this.state.name}</h2>
                <h3> Email : {this.state.email}</h3>
            </div>);
        }else{
            fbContent = (<FacebookLogin
                appId="1330867277068025"
                autoLoad={true}
                fields="name,email,picture"
                callback={this.responseFacebook}
                onClick = {this.componentClicked}
                cssClass="my-facebook-button-class"
                scope="public_profile,user_friends,user_actions.books"
                icon="fa-facebook"
            />);
        }
        return (
            <div>
                {fbContent} 
            />
            </div>
        );
    }
}

export default Facebook;