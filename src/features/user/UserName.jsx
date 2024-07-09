import { useSelector } from "react-redux";

function UserName() {
  const { username } = useSelector((store) => store.user);

  if (!username) return null;

  return (
    <div className="hidden px-4 text-sm font-semibold capitalize sm:block">
      {username}
    </div>
  );
}

export default UserName;
