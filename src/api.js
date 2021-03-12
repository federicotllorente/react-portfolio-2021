// Getting the data
async function api(api_url) {
    const result = await fetch(api_url);
    const data = await result.json();
    return data;
}

export default api;