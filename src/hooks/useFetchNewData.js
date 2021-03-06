import { useState, useCallback } from 'react';

const useFetchNewData = (api_projects, filters, setFilters) => {
    const [newData, setNewData] = useState([]);
    const [loadingNewData, setLoadingNewData] = useState(false);
    const [errorNewData, setErrorNewData] = useState(null);
    const [filtersSelected, setFiltersSelected] = useState([]);
    const fetchNewData = useCallback(async (api_url, filters) => {
        setLoadingNewData(true);
        let url = `${api_url}?technology=${filters[0]}`;
        if (filters.length == 0) url = api_url;
        if (filters.length >= 2) {
            for (let i = 1; i < filters.length; i++) {
                url = `${url},${filters[i]}`;
            }
        }
        const result = await fetch(url);
        const data = await result.json();
        try {
            setLoadingNewData(false);
            setNewData(data);
        } catch (error) {
            setLoadingNewData(false);
            setErrorNewData(error);
        }
    }, []); // I use useCallback() to memoize the data so the next time new data is fetched the App can perform better
    const handleSelectFilter = technologyId => {
        const allFiltersSelected = [filtersSelected, technologyId].flat();
        setFiltersSelected(allFiltersSelected);
        const notClickedFilters = filters.filter(el => el.id !== technologyId);
        const clickedFilter = filters.find(el => el.id === technologyId);
        const selectedFilter = {
            id: clickedFilter.id,
            name: clickedFilter.name,
            selected: true
        };
        setFilters([selectedFilter, notClickedFilters].flat());
        fetchNewData(api_projects, allFiltersSelected);
    };
    const handleDeselectFilter = technologyId => {
        const otherFiltersSelected = filtersSelected.filter(el => el !== technologyId);
        setFiltersSelected(otherFiltersSelected);
        const notClickedFilters = filters.filter(el => el.id !== technologyId);
        const clickedFilter = filters.find(el => el.id === technologyId);
        const deselectedFilter = {
            id: clickedFilter.id,
            name: clickedFilter.name,
            selected: false
        };
        setFilters([notClickedFilters, deselectedFilter].flat());
        fetchNewData(api_projects, otherFiltersSelected);
    };
    return {
        newData,
        loadingNewData,
        errorNewData,
        filtersSelected,
        handleSelectFilter,
        handleDeselectFilter
    };
};

export default useFetchNewData;