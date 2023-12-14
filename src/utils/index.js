import dayJs from 'dayjs';

export const BASE_URL =
	process.env.NODE_ENV === 'development'
		? 'http://localhost:8000'
		: process.env.BACKEND_URL;

export const formatDate = (date) => {
	return dayJs(date).format('MMM D, YYYY h:mm A');
};
