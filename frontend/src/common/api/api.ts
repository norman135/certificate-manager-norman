const baseUrl: string = 'http://localhost:5062';

const getAllItems = async (endpoint: string): Promise<any> => {
	try {
		const response = await fetch(`${baseUrl}/${endpoint}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (!response.ok) {
			throw new Error('Failed to fetch all data');
		}

		return await response.json();
	} catch (error) {
		console.error('Error:', error);
	}
};

const getItem = async (endpoint: string, id: string): Promise<any> => {
	try {
		const response = await fetch(`${baseUrl}/${endpoint}/${id}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (!response.ok) {
			throw new Error('Failed to fetch data');
		}

		return await response.json();
	} catch (error) {
		console.error('Error:', error);
	}
};

const addItem = async (endpoint: string, data: any): Promise<any> => {
	try {
		const response = await fetch(`${baseUrl}/${endpoint}`, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (!response.ok) {
			throw new Error('Failed to add data');
		}

		return await response.json();
	} catch (error) {
		console.error('Error:', error);
	}
};

const updateItem = async (
	endpoint: string,
	id: string,
	data: any,
): Promise<any> => {
	try {
		const response = await fetch(`${baseUrl}/${endpoint}/${id}`, {
			method: 'PUT',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (!response.ok) {
			throw new Error('Failed to update data');
		}

		return await response.json();
	} catch (error) {
		console.error('Error:', error);
	}
};

const deleteItem = async (endpoint: string, id: string): Promise<any> => {
	try {
		const response = await fetch(`${baseUrl}/${endpoint}/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (!response.ok) {
			throw new Error('Failed to delete data');
		}

		return await response.json();
	} catch (error) {
		console.error('Error:', error);
	}
};

export { getAllItems, getItem, addItem, updateItem, deleteItem };
