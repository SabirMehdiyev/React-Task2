import React from 'react'
import Name from './Name'
import Email from './Email'
import Address from './Address'
import PersonalInfo from './PersonalInfo'
import "./Profile.css"

const Profile = () => {
    return (
        <div className='all'>
            <Email email="Email : sabirmextiev05@gmail.com" />
            <Name name="Name : Sabir" />
            <Address Address="Address : Hesenbey Zerdabi 3166" />
            <PersonalInfo age="Age : 20" info="Experience : ------------ " phone="Phone : +994558528134" />
        </div>
    )
}

export default Profile