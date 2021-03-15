import { useState } from 'react';
import { useParams } from 'react-router-dom';

import api from '../api';

function useFetchProjData() {
    const { projUrl } = useParams();
    const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    const [data, setData] = useState([]);
    const pag_url = `?pathname=${projUrl}`;
    const fetchData = async (api_url, endpoint) => {
        const final_url = api_url + endpoint;
        const response = await api(final_url);
        try {
            setLoading(false);
            setData(response);
        } catch (err) {
            setLoading(false);
            // setError(err);
        }
    }
    return {
        loading,
        data,
        pag_url,
        fetchData
    };
}

export default useFetchProjData;