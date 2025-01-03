import axios from 'axios';

// const UNSPLASH_CLIENT_ID = '690920';
const UNSPLASH_ACCESS_KEY = 'iCjZZO9W-sv_-Jw_YppVONVOooy0nQps-svg1yk1dmQ';
// const UNSPLASH_SECRET_KEY = 'b9WM6cTxV1cjYMZW7CvuqA4S4oHtZJvwwejWdpqR1nk';
const baseURL = 'https://api.unsplash.com';

export const fetchDataWithTopic = async (topic, perPage = 15, page = 1) => {
		const response = await axios.get(`${baseURL}/search/photos`, {
			params: {
				query: topic,
				per_page: perPage,
				page,
				orientation: 'landscape',
			},
			headers: {
				Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`
			}
		});
		return response.data.results;
};
