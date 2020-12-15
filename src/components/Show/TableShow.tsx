import React from 'react';
import { ShowType } from '../../types/Shows';
import "./TableShow.scss";
import { AnimatePresence, motion } from 'framer-motion';


interface TableShowProps {
  tableShows: ShowType[],
  removeShowToTable(show: ShowType): void,
}

const TableShow: React.FC<TableShowProps> = ({tableShows, removeShowToTable}) => {
  return (
        <>
            { tableShows.length === 0 ? null : 
                <motion.table 
                initial={{ width: 0 }}
                animate={{ width: "50%" }}
                exit={{ width: 0 }}
                className="showTable">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Language</th>
                            <th>Genres</th>
                            <th>Rating</th>
                            <th>Network</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        tableShows.map(show => (
                            <AnimatePresence key={show.show.id} >
                                <motion.tr
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onClick={() => removeShowToTable(show)}>
                                    <td>{show.show.name && show.show.name}</td>
                                    <td>{show.show.type}</td>
                                    <td>{show.show.language}</td>
                                    <td>
                                        {
                                            show.show.genres.map((genre, i) => [
                                                i > 0 && ", ",
                                                <span key={i}>{genre}</span>])
                                        }
                                    </td>
                                    <td>{show.show.rating.average}</td>
                                    <td>{show.show.network &&  show.show.network.name}</td>
                                </motion.tr>
                            </AnimatePresence>
                        ))
                    }
                    </tbody>
                </motion.table>
            }
        </>
    );
};

export default TableShow;