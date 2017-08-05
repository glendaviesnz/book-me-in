import React from 'react';
import styled from 'styled-components';

const ProfileWrapper = styled.div`
    display: flex;
    align-items: center;
`
const UserPhoto = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 10px;
`
const MiniProfile = ({ photoURL, name }) => {

    return (
        <ProfileWrapper className="fadeIn">
            <div>{name}</div>
            <UserPhoto src={photoURL} />
        </ProfileWrapper>
    );

}

export default MiniProfile;