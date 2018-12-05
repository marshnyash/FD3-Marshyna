import React from 'react';
import { Link } from 'react-router';

import Paper from 'material-ui/lib/paper';

import './AboutPage.less';

const AboutPage = React.createClass({
    render() {
        return (
            <div className='AboutPage'>
                <Paper
                    zDepth={1}
                    className='AboutPage__content'
                >
                    <h2>This application is written based on 
                    Google Tasks API using Material Design concepts.</h2>
                </Paper>
            </div>
        );
    }
});

export default AboutPage;
