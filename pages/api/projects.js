export default async (req, res) => {
	console.log('/api/projects....')
	res.statusCode = 200
	res.setHeader('Content-Type', 'application/json')
	res.end(JSON.stringify({ name: 'Jhon Doe' }))
}