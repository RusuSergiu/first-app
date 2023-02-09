import React from 'react'
import '../style.css'
import ProfilePicture from '../images/profile-pic.png'
import MailIcon from '../images/mail-icon.png'
import LinkedInIcon from '../images/linkedin-icon.png'


export default function Info() {
    return (
        <div>
            <img src = {ProfilePicture} alt = 'profile-picture' className = 'profile-picture' />
            <h1 className = 'profile-name'>Rusu Sergiu</h1>
            <h4 className = 'profile-job'>Frontend Developer</h4>
            <h5 className = 'profile-website'>rususergiu.website</h5>
            <div className = 'info-buttons'>
                <button className = 'mail-title'><img src = {MailIcon} alt = 'mail-icon' className = 'mail-icon' />Email</button>
                <button className = 'LinkedIn-title'><img src = {LinkedInIcon} alt = 'LinkedIn-icon' className = 'LinkedIn-icon' />LinkedIn</button>
            </div>
        </div>
    )
}