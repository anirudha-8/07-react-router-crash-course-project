import { useEffect, useState } from "react";

const GitHub = () => {
	const [data, setData] = useState({});

	useEffect(() => {
		fetch("https://api.github.com/users/anirudha-8")
			.then((res) => res.json())
			.then((userData) => {
				console.log(userData);
				setData(userData);
			});
	}, []);

	return (
		<>
			<div className="bg-gray-700 text-white text-center text-3xl p-4">
				GitHub Followers : {data.followers}
				<img
					src={data.avatar_url}
					alt="github avatar"
					className="w-96 rounded-full mx-auto my-4"
				/>
			</div>
		</>
	);
};
export default GitHub;
