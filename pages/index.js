import axios from '../services/axios';

function HomePage(props) {
	console.log('HomePage props...', props)
	return (
		<div>
			<div>Welcome to Next.js and Zeit!</div>
			<br/>
			<div>Data from API: { props.data.name }</div>
		</div>
	)
}

async function getInitialProps() {
	console.log('HomePage.getInitialProps...')
	var res = await axios.get('/api/projects');

	return {
		data: res.data
	}
}

HomePage.getInitialProps = getInitialProps

export default HomePage
