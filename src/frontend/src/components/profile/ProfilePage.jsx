import getInfo from "../info/GetUserInfo"
import "../../assets/style.css"


export default function ProfilePage() {
    getInfo();
    return (
        <>
        <div className="container">
            <h1 className="text-black font-bold underline">User profile</h1>
        </div>
        </>
    )
}