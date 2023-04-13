/* eslint-disable @next/next/no-img-element */
// import React from 'react';
import Link from 'next/link';
// import "./BookList.css";
import styles from '../../src/styles/BookList.module.css'
const Book = (book) => {
  return (
    <Link href = {`/book-copy/${book.book_id}`} >
    <div className={`${styles['book-item']} ${styles['flex']} ${styles['flex-column']} ${styles['flex-sb']}`}>
      <div className={`${styles['book-item-img']}`}>
        <img src = {book.image} alt = "cover" />
      </div>
      <div className={`${styles["book-item-info"]} ${styles["text-center"]}`}>
        
          <div className={`${styles["book-item-info-item"]} ${styles["title"]} ${styles["fw-7"]} ${styles["fs-15"]}`}>
            <span>{book.name}</span>
          </div>
        

        <div className={`${styles['book-item-info-item']} ${styles['author']} ${styles['fs-12']}`}>
          <span className={`${styles["text-capitalize"]} ${styles['fw-7']}`}>Author: </span>
          <span>{book.author}</span>
        </div>
        <div className={`${styles['book-item-info-item']} ${styles['author']} ${styles['fs-12']}`}>
          <span className={`${styles["text-capitalize"]} ${styles['fw-5']}`}>Book ID: </span>
          <span>{book.book_id}</span>
        </div>
        {/* <div className='book-item-info-item edition-count fs-15'>
          <span className='text-capitalize fw-7'>Total Editions: </span>
          <span>{book.edition_count}</span>
        </div>

        <div className='book-item-info-item publish-year fs-15'>
          <span className='text-capitalize fw-7'>First Publish Year: </span>
          <span>{book.first_publish_year}</span>
        </div> */}
      </div>
    </div>
    </Link>
  )
}

export default Book