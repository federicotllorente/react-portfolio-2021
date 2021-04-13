import { useState } from 'react';

import api from '../api';

function useFetchData() {
    const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [noMoreData, setNoMoreData] = useState(false);
    const [showingNoMoreDataModal, setShowingNoMoreDataModal] = useState(false);
    const pag_url = `?_page=${currentPage}&_limit=3`;
    const fetchData = async (api_url, endpoint) => {
        const final_url = api_url + endpoint;
        const response = await api(final_url);
        try {
            setLoading(false);
            setCurrentPage(currentPage + 1);
            setData(response);
        } catch (err) {
            setLoading(false);
            // setError(err);
        }
    };
    const fetchNextData = async (api_url, endpoint) => {
        setLoading(true);
        const final_url = api_url + endpoint;
        const response = await api(final_url);
        try {
            setLoading(false);
            if (response.body.length == 0) {
                setNoMoreData(true);
                setShowingNoMoreDataModal(true);
            } else if (response.body.length < 3) {
                setNoMoreData(true);
                setCurrentPage(currentPage + 1);
                const allData = [data.body, response.body].flat();
                const newDataObj = {
                    error: response.error,
                    body: allData
                };
                setData(newDataObj);
            } else {
                setCurrentPage(currentPage + 1);
                const allData = [data.body, response.body].flat();
                const newDataObj = {
                    error: response.error,
                    body: allData
                };
                setData(newDataObj);
            }
        } catch (err) {
            setLoading(false);
            // setError(err);
        }
    };
    return {
        loading,
        data,
        noMoreData,
        showingNoMoreDataModal,
        setShowingNoMoreDataModal,
        fetchData,
        fetchNextData,
        pag_url
    };
};

export default useFetchData;