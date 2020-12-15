import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { SHOWS } from '../../constants';
import { AppState } from '../../reducers';
import { ShowType } from '../../types/Shows';
import './Show.scss';
import Search from '../Search/SearchContainer';
import ShowList from './ShowList';
import TableShow from './TableShow';
import '../../styles/main.scss';
import { AnimatePresence, motion } from 'framer-motion';


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
        <div>
        <Search />
        {
            isLoading ? <div>isLoading</div>:
            <div className="mainRow">
                
                {
                    tableShows.length === 0 ? 
                    <div className="shows-full-area">
                        <ShowList shows={shows} addShowToTable={addShowToTable}/>
                    </div>
                    : 
                    <>
                        <motion.div className="shows-area"
                        initial={{ width: "100%" }}
                        animate={{ width: "50%" }}
                        exit={{ width: "50%" }}>
                            <ShowList shows={shows} addShowToTable={addShowToTable}/>
                        </motion.div>
                        <AnimatePresence>
                            <TableShow tableShows={tableShows} removeShowToTable={removeShowToTable}/>
                        </AnimatePresence>
                    </>
                    
                }
                    
                {/* {error && <div className="error">{JSON.stringify(error)}</div>} */}
            </div>
        }
            
        </div>
    );
}

export default ShowContainer