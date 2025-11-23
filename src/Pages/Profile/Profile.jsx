import React from 'react'
import './Profile.css'
import profilepic from '../../assets/img/chanel.png'
const Profile = () => {
    return (
        <div className='container profile-container'>
            <h1>Perfil del usuario</h1>
            <div className='profile-header'>
                <img className='imgprofile' src={profilepic} alt='Foto de perfil' />
                <h2>Macarena Alvarez</h2>
            </div>
            <p><strong>Email:</strong> macarenalvarez@gmail.com</p>

            <button className='btn btn-danger'> Cerrar sesión </button>
        </div>
    )
}

export default Profile