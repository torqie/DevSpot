import React, { Component } from 'react'

class ProfileButton extends Component {

    render() {
        const isProfileOn = window.location.href.includes("profile");
        let link;
        if (isProfileOn) {
            link = <a href="/">RETURN HOME</a>
        } else {
            link = <a href={`/profile/${localStorage.getItem("userId")}`}>VIEW MY PROFILE</a>;
        }
        return (
            <div>
                {link}
            </div>
        )
    }
}
export default ProfileButton;
