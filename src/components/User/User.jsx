import { useParams } from "react-router-dom";

const User = () => {
	const { userId } = useParams();
	return <div>User: {userId}</div>;
};
export default User;
