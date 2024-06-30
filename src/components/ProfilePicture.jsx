

export default function ProfilePicture(){

    const imageUrl = './assets/profile.jpeg'

    const handleClick = (e) => e.target.style.display = "none";


    return(
        <img onClick={ (e) => handleClick(e)} src={imageUrl}></img>
    );
}