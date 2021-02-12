import React, { ChangeEvent } from 'react';
import Social from './misc/SocialLink';
import './Footer.css';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import {
    Restore as RestoreIcon,
    AccessAlarm as FavoriteIcon,
    LocationOn as LocationOnIcon,
} from '@material-ui/icons';

const onChangeVarState = (
    state: string,
    setState: React.Dispatch<React.SetStateAction<string>>
) => (event: ChangeEvent<{}>, newState: string) => {
    setState(newState);
};

export default function Footer() {
    const [value, setValue] = React.useState('Recents');

    return (
        <BottomNavigation
            onChange={onChangeVarState(value, setValue)}
            value={value}
        >
            <BottomNavigationAction
                label="Recents"
                value="Recents"
                icon={<RestoreIcon />}
            />
            <BottomNavigationAction
                label="Favorites"
                value="Fav"
                icon={<FavoriteIcon />}
            />
            <BottomNavigationAction
                label="Nearby"
                value="Nearby"
                icon={<LocationOnIcon />}
            />
        </BottomNavigation>
    );
    // return (
    //     <div className="para icon-box">
    //         <Social name="Gitlab" url="https://gitlab.com/chrisvrose" picUrl="./static/projects/gitlab-white-small.svg" />
    //         <Social name="Github" url="https://github.com/chrisvrose" picUrl="./static/projects/GitHub-Mark-Light-64px.png" />
    //     </div>
    // );
}
