import getInfo from "../info/GetUserInfo"


export default function ProfilePage() {
    getInfo();
    return (
        <div>
            <h1>profilePage component</h1>
        </div>
    )
}