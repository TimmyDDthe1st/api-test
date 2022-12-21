const superTest = require('supertest');

const baseURL = 'http://localhost:8080';
const exampleEndPoint = '/example';

describe('/example', () => {
	test('should return 200', () => {
		superTest(baseURL)
			.get(exampleEndPoint)
			.expect(200)
			.end((err, res) => {
				if (err) throw err;
			});
	})
	test('should return an object with the key example', () => {
		superTest(baseURL)
			.get(exampleEndPoint)
			.expect(200)
			.end((err, res) => {
				if (err) throw err;
				expect(res.body[0]).toHaveProperty('example');
			});
	})
	test('key should have a string value of This is your data from controller', () => {
		superTest(baseURL)
			.get(exampleEndPoint)
			.expect(200)
			.end((err, res) => {
				if (err) throw err;
				expect(res.body[0].example).toBe('This is your data from controller');
			});
	})
})
