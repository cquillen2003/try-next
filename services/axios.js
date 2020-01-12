import axios from 'axios';

console.log('Creating axios instance')
console.log('NODE_ENV: ', process.env.NODE_ENV) //How is this working in the browser?
var baseUrl;
if (process && process.env && process.env.NODE_ENV && process.env.NODE_ENV === 'development') {
	baseUrl = 'http://localhost:3000'
}
else {
	baseUrl = 'https://try-next.now.sh'
}


export default axios.create({
	baseURL: baseUrl
});
