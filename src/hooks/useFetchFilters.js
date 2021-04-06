import { useState } from 'react';

const useFetchFilters = () => {
    const [filters, setFilters] = useState([]);
    const [loadingFilters, setLoadingFilters] = useState(false);
    const [errorFilters, setErrorFilters] = useState(null);
    const fetchFilters = async api_url => {
        setLoadingFilters(true);
        const result = await fetch(api_url);
        const data = await result.json();
        try {
            setLoadingFilters(false);
            let newFilters = [];
            data.body.forEach(el => {
                const newFilter = {
                    id: el._id,
                    name: el.name,
                    selected: false
                };
                newFilters.push(newFilter);
            });
            setFilters(newFilters);
        } catch (error) {
            setLoadingFilters(false);
            setErrorFilters(error);
        }
    };
    return {
        filters,
        loadingFilters,
        errorFilters,
        fetchFilters
    };
};

export default useFetchFilters;