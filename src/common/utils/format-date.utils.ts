const formatDate = (date: Date): string => {
	const day = date.getDate();
	const month = date.getMonth() + 1;
	const year = date.getFullYear();

	return `${day}.${month}.${year}`;
};

export const toIsoString = (date: Date): string => {
	return date.toISOString().split('T')[0];
};

export default formatDate;
