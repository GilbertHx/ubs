import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { SHOWS } from '../constants';
import { AppState } from '../reducers';
import { ShowType } from '../types/Shows';
import Search from './Search/SearchContainer';
import ShowList from './Show/ShowList';
import TableShow from './Table/TableShow';
import '../styles/main.scss';
import { motion } from 'framer-motion';
import Loading from './Loading/Loading';


function ShowContainer() {

    const { shows, tableShows, error, isLoading }= useSelector((state: AppState) => state);

    const dispatch = useDispatch();

    const addShowToTable = (show: ShowType) => {
        if (tableShows.findIndex(x => x.show.id === show.show.id) === -1) {
            dispatch({type: SHOWS.ADD_SHOW_TO_TABLE, payload: show})
        } else {
            console.log("AlreadyAdded", show)
        }
    }

    const removeShowToTable = (show: ShowType) => {
        dispatch({type: SHOWS.REMOVE_SHOW_FROM_TABLE, payload: show})
    }

    return (
        <>
            <Search />
            {error && <div className="error">Oh no, an error occured!</div>}
            {
                isLoading ? <Loading /> :
                <div className="mainRow">
                    {
                        tableShows.length === 0 ? 
                        <div className="shows-full-area">
                            <ShowList shows={shows} addShowToTable={addShowToTable}/>
                        </div>
                        : 
                        <>
                            <TableShow tableShows={tableShows} removeShowToTable={removeShowToTable}/>
                            <motion.div className="shows-area"
                                initial={{ x: 50 }}
                                animate={{ x: 0 }}
                                exit={{ x: 50 }}
                                transition={{ type: "tween"}}
                            >
                                <ShowList shows={shows} addShowToTable={addShowToTable}/>
                            </motion.div>
                        </>
                    }
                </div>
            }
            
        </>
    );
}

export default ShowContainer