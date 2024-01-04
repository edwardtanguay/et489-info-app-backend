import express from 'express';

const app = express();

const getPort = (): number => {
	return 5123;
}

app.get('/', (req, res) => {
	res.json({
		appName: 'et489-info-app-backend'
	})
})

app.listen(getPort(), () => {
	console.log(`listening at http://localhost:${getPort()}`);
})
