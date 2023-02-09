import React from 'react'
import '../style.css'
import FacebookIcon from '../images/facebook-icon.png'
import InstagramIcon from '../images/instagram-icon.png'
import TwitterIcon from '../images/twitter-icon.png'
import GithubIcon from '../images/github-icon.png'

export default function Footer() {
    return (
        <footer>
            <img src = {TwitterIcon} alt = 'twitter-icon' className = 'twitter-icon' />
            <img src = {FacebookIcon} alt = 'facebook-icon' className = 'facebook-icon' />
            <img src = {InstagramIcon} alt = 'instagram-icon' className = 'instagram-icon' />
            <img src = {GithubIcon} alt = 'github-icon' className = 'github-icon' />
        </footer>
    )
}