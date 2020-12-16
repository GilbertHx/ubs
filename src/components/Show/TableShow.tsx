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
        <div className="showTable">
            { tableShows.length === 0 ? null : 
                <motion.table 
                initial={{ x: "-200%" }}
                animate={{  x: 0 }}
                exit={{  x: "200%"}}
                transition={{ type: "tween", delay:0.2}}
                >
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
                            <AnimatePresence key={show.show.id}>
                                <motion.tr
                                    initial={{ opacity: 0, y:-50 }}
                                    animate={{ opacity: 1, y: 0 }}
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
        </div>
    );
};

export default TableShow;