export const getJsonData = async (endPoint, key) => {
    try {
        // setting headers options
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        };
        // getting user data
        const dataResponse = await fetch(`${endPoint}/${key}`, options);
        // checking for response status
        if (!dataResponse.ok) {
            console.error("Error: Could not get response");
            return [false, {}];
        }
        // getting data
        const data = await dataResponse.json();
        // checking for status
        if (data.status === 1) {
            return [true, data.data];
        } else {
            console.error(data.message);
            return [false, {}];
        }

    } catch (err) {
        console.error("Sorry... Something Went Wrong.");
        return [false, {}];
    }
};

export const getImgData = async (endPoint, key) => {
    try {
        // setting headers options
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        };
        // getting user data
        const dataResponse = await fetch(`${endPoint}/${key}`, options);
        // checking for response status
        if (!dataResponse.ok) {
            console.error("Error: Could not get response");
            return [false, {}];
        }

        const data = await dataResponse.blob();
        if (!data.message) {
            return [true, data];
        } else {
            console.error(data.message);
            return [false, {}];
        }

    } catch (err) {
        console.error("Sorry... Something Went Wrong.");
    }
};
