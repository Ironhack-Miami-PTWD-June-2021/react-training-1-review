import React from 'react';

export default function IdCard({lastName, firstName, gender, height, birth, picture}) {
    // const {lastName, firstName, gender, height, birth, picture} = props;
    return (
        <div className="id-card">
            <img src={picture} alt="id card personal" />
            <div>
                <h3>First Name: { firstName }</h3>
                <h3>Last Name: { lastName }</h3>
                <h3>Gender: { gender }</h3>
                <h3>Height: { height }</h3>
                <h3>Birth: { birth.toDateString() }</h3>
            </div>
        </div>
    );
};