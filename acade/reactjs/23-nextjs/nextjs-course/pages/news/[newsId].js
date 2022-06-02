import { useRouter } from 'next/router'

function DetailsPage() {
	const router = useRouter();

	console.log(router.query.newsId);
	
	return <h1>Details!</h1>;
}

export default DetailsPage;
