import { useEffect, useState } from "react";

const GitHub = () => {
	const [data, setData] = useState("");

	useEffect(() => {
		fetch("https://api.github.com/users/anirudha-8")
			.then((res) => res.json)
			.then((userData) => setData(userData));
	}, []);

	return (
		<div className="bg-gray-700 text-white text-center text-3xl">
			GitHub Followers : {data.name}
		</div>
	);
};
export default GitHub;
