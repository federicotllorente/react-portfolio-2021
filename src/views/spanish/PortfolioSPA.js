import React from 'react';

import Project from '../../components/Project';
import NoMoreDataModal from '../../components/NoMoreDataModal';
import { NoProjectsError } from '../../components/ErrorMessages';

const PortfolioSPA = props => {
    const {
        language, filters, filtersSelected,
        handleDeselectFilter, handleSelectFilter,
        data, newData, loadingNewData,
        noMoreData, showingNoMoreDataModal,
        handleSeeMoreProjects, handleCloseNoMoreDataModal
    } = props;
    return (
        <div className="portfolio_wrapper">
            <h1>Portfolio</h1>
            <p>Si quieres ver todos mis proyectos, siéntete libre de visitar mi <a target="_blank" rel="noreferrer" href="https://github.com/federicotllorente">GitHub</a> y ver todos los repositorios que tengo allí!</p>
            <div className="portfolio_wrapper__filters">
                <h3>Filtros</h3>
                <p>Filtrar proyectos por las tecnologías utilizadas</p>
                <div>
                    {filters?.map(el => el.selected ? (
                        <button key={el.id} onClick={e => handleDeselectFilter(el.id)} className="selected">{el.name}</button>
                    ) : (
                        <button key={el.id} onClick={e => handleSelectFilter(el.id)}>{el.name}</button>
                    ))}
                </div>
            </div>
            <div className="project_wrapper">
                {(filtersSelected?.length == 0) && data.body?.map(el => (<Project key={el._id} data={el} />))}
                {(filtersSelected?.length >= 1) && newData.body?.map(el => (<Project key={el._id} data={el} />))}
                {(newData.body?.length == 0 && (filtersSelected?.length >= 1 && !loadingNewData)) && (
                    <NoProjectsError language={language} />
                )}
            </div>
            {((!noMoreData && data.body?.length >= 3) ||
                (data.body?.length !== 0 && data.body?.length % 4 == 0) ||
                (newData.body?.length !== 0 && newData.body?.length % 4 == 0)) && (
                    <div className="portfolio__see_more_button" onClick={handleSeeMoreProjects}>Ver más proyectos</div>
                )}
            {showingNoMoreDataModal && (
                <NoMoreDataModal
                    handleCloseNoMoreDataModal={handleCloseNoMoreDataModal}
                    language={language}
                />
            )}
        </div>
    );
};

export default PortfolioSPA;