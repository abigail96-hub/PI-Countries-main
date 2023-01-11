import React from 'react'
import s from './Pagination.module.css'

export default function Pagination({ countriesPerPage, allCountries, paginado, currentPage}) {

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(allCountries / countriesPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className={s.bar}>
            <ul>
                {/* <button className={s.prev} onClick={e => handlePrev(e)} disabled={currentPage - 1 === 0 ? true : false}> Prev </button> */}
                {pageNumbers &&
                    pageNumbers.map(number => (
                        <li key={number}>
                            <button id={s.number} className={currentPage === number ? s.active : null} onClick={() => paginado(number)}> {number} </button>
                        </li>
                    ))
                }
                {/* <button className={s.next} onClick={e => handleNext(e)} disabled={currentPage >= pageNumbers.length ? true : false}> Next </button> */}
            </ul>
        </div>
    )
}