const UserData = ({ user }) => {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    name,
    login,
    created_at,
  } = user;

  // Check if created_at is a valid date string
  const createdDate = created_at ? new Date(created_at) : null;

  return (
    <>
      <div className="user-container">
        <div className="user-info">
          <div className="user-img">
            <img src={avatar_url} className="avatar" alt="User-image" />
          </div>
          <div className="user-name">
            <a href={`https://github.com/${login}`}>{name}</a>
          </div>
        </div>
        <div className="user-data">
          {createdDate && ( // Render only if createdDate is valid
            <p>
              Joined Date:{" "}
              {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
                month: "short",
              })} ${createdDate.getFullYear()}`}
            </p>
          )}
          <p>Followers: {followers}</p>
          <p>Following: {following}</p>
          <p>Public Repositories: {public_repos}</p>
        </div>
      </div>
    </>
  );
};

export default UserData;
