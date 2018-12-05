import React from 'react';

import RaisedButton from 'material-ui/lib/raised-button';
//import Button from '@material-ui/core/Button';

import './LoginPage.less';

const LoginPage = React.createClass({
    render() {
        return (
            <div className='LoginPage'>
                <div className='LoginPage__banner'>
                    <div className='LoginPage__text'>
                        <h1>Organise your life!</h1>
                        <p>Create your tasks!</p>
                        <RaisedButton
                            variant="contained" 
                            color="primary"
                            className='LoginPage__button'
                            label='Log in with Google'
                            onClick={this.props.onLogIn}
                        />
                    </div>
                    <img
                        src='img/EOCD_4.jpg'
                        className='LoginPage__image'
                    />
                </div>
            </div>
        );
    }
});

export default LoginPage;
