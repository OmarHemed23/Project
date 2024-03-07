import profile from '../images/profile.jpg';

const ProfilePic = ({className=''}) => {
    return (
        <>
         <img src={profile} alt="user-profile-pic" className={'' + className} />
        
        </>
    );
};

export default ProfilePic;