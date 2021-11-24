import React, {useState} from "react";
import classes from "../../Common/Paginator/Paginator.module.css";

let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, amountItemsPerPage=10}) => {
    
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pagesArr = [];

    for(let i=1; i<=pagesCount; i++){
        pagesArr.push(i)
    }
    
    let amountPages = Math.ceil(totalItemsCount / amountItemsPerPage);
    let [currentSegmentOfPages, setCurrentSegmentOfPages] = useState(1);
    let leftPosition = (currentSegmentOfPages - 1) * amountItemsPerPage + 1;
    let rightPosition = currentSegmentOfPages * amountItemsPerPage;
    
    return(
        <div className={classes.pagination}>
            {currentSegmentOfPages > 1 && <button onClick={() => { setCurrentSegmentOfPages(
                currentSegmentOfPages - 1)
            }}>prev</button>}
        
            {pagesArr
                .filter(page => page >= leftPosition && page <= rightPosition)
                .map(page => {
                    return (
                        <span className={currentPage === page ? classes.selected : undefined} key={"10"}
                              onClick={(e) => onPageChanged(page)}>
                             {page}
                         </span>
                    )
                })}
            {amountPages > currentSegmentOfPages && <button onClick={() => {setCurrentSegmentOfPages(
                currentSegmentOfPages + 1
            )}}>next</button>}
        </div>
    )
}

export default Paginator;