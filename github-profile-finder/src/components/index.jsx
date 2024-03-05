import { useEffect } from "react";
import { useState } from "react";
import UserData from "./UserData";

const GitHubProfileFinder = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchGitHubUserData = async (username) => {
    setLoading(true);
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();

    if (data) {
      setUserData(data);
      setLoading(false);
      setUsername("");
    }
  };

  const handleSubmit = () => {
    fetchGitHubUserData(username);
  };

  useEffect(() => {
    fetchGitHubUserData();
  }, []);

  if (loading) {
    return <h1>Loading, Please Wait.....</h1>;
  }

  return (
    <>
      <div className="github-profile-container">
        <div className="input-wrapper">
          <input
            type="text"
            name="search by username"
            placeholder="Enter Username..."
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <button onClick={handleSubmit}>Search</button>{" "}
        </div>
        {userData !== null ? <UserData user={userData} /> : null}
      </div>
    </>
  );
};

export default GitHubProfileFinder;
