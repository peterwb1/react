const apiRequest = async (url = '', optionsObj = null, errMes = null) => {
    try {
        const response = await fetch(url, optionsObj);
        if (!response.ok) throw Error('Please reload the page'); 
        return await response.json();
    } catch (err) {
        errMes = err.message;
    } finally {
        return errMes;
    }
}

export default apiRequest; 