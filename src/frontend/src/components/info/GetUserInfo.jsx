

  export default function getInfo() {
    const fetchProfileData = async (identifier) => {
      const response = await fetch(`http://127.0.0.1:8000/api/profile/${identifier}/`, {
        method: "GET"
      });

      const profileData = await response.json();
      console.log(profileData);
    };
  const userData = JSON.parse(localStorage.getItem("user_data"));
  fetchProfileData(userData.identifier);
}