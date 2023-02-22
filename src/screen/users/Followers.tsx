import { useOutletContext } from "react-router-dom";

interface IFollowersContext {
  nameOfMyUser: string;
}

const Followers = () => {
  const { nameOfMyUser } = useOutletContext<IFollowersContext>();
  return <div>Here are {nameOfMyUser}'s Followers</div>;
};
export default Followers;
