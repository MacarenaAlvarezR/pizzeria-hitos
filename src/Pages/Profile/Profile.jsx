import {useContext} from 'react'
import './Profile.css'
import profilepic from '../../assets/img/chanel.png';
import { Navigate,useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const Profile = () => {
    const { user, logout } = useContext(UserContext);
    const navigate = useNavigate();

    if (!user) {
        return <Navigate to='/login' replace /> ;
    }
    const handleLogout = () => {
        logout();
        navigate("/"); 
    };

    return (
        <div className='container profile-container'>
            <h1>Perfil del usuario</h1>

            <div className='profile-header'>
                <img className='imgprofile' src={profilepic} alt='Foto de perfil' />
                <h2>{user.name || 'Usuario' }</h2>
            </div>

            <p><strong>Email:</strong> {user.email }</p>

            <button className='btn btn-danger' onClick={handleLogout }> Cerrar sesión </button>
        </div>
    )
}

export default Profile