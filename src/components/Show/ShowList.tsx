import React, { useEffect, useRef } from 'react';
import { ShowType } from '../../types/Shows';
import noImage from '../../images/no-image.png';
import { motion } from 'framer-motion';
import './ShowList.scss';


interface ShowListProps {
  shows: ShowType[],
  addShowToTable(show: ShowType): void,
}

const ShowList: React.FC<ShowListProps> = ({shows, addShowToTable}) => {

    const hasRendered = useRef(false)
    useEffect(() => {
        hasRendered.current =true;
        
    }, [])

  return (
        <div className="cardRow">
            {shows.map((show, i) => (
                <motion.div 
                    variants={{
                        hidden: {
                            opacity: 0,
                        },
                        visible: (i) => ({
                            opacity: 1,
                            transition: {
                                type: 'tween',
                                delay: i * 0.05,
                                stiffness: 100
                            }
                        })
                    }}
                    initial={ hasRendered.current ? "visible" : "hidden" }
                    animate="visible"
                    custom={i}
                    key={show.show.id} 
                    className="card"
                >
                    <div onClick={() => addShowToTable(show)}>
                        {
                            show.show.rating.average && <span className="average-txt" >{show.show.rating.average}</span>
                        }
                    
                        {show.show.image && show.show.image.medium ? 
                            <img className="show-cover-img" src={show.show.image.medium} />  :
                            <img className="show-cover-img" src={noImage} />
                        }
                        <div className="card-body">
                            <p className="card-title">{show.show.name}</p>
                            <p className="show-genres">{ 
                                show.show.genres.map((genre, i) => [
                                    i > 0 && ", ",
                                    <span key={i}>{genre}</span>
                            ])}</p>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default ShowList;