import React from 'react';
import Social from './misc/SocialLink';
import './Footer.css';

export default class Footer extends React.Component {
    render() {
        return (
            <div className="para icon-box">
                <Social name="Gitlab" url="https://gitlab.com/chrisvrose" picUrl="./static/projects/gitlab-white-small.svg" />
                <Social name="Github" url="https://github.com/chrisvrose" picUrl="./static/projects/GitHub-Mark-Light-64px.png" />
            </div>
        );
    }
}