// import React from 'react';
// import { useGlobalContext } from '../../context.';
import Book from "../BookList/Book";
import Loading from "../Loader/Loader";
// import coverImg from "../../images/cover_not_found.jpg";
import styles from '../../src/styles/BookList.module.css'

//https://covers.openlibrary.org/b/id/240727-S.jpg

const BookList = (props) => {
  // const {books, loading, resultTitle} = useGlobalContext();
  // const booksWithCovers = books.map((singleBook) => {
  //   return {
  //     ...singleBook,
  //     // removing /works/ to get only id
  //     id: (singleBook.id).replace("/works/", ""),
  //     cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg
  //   }
  // });

  if(props.loading) return <Loading />;
  
  return (
    <section className={styles.booklist}>
      <div className={styles.container}>
        <div className={styles["section-title"]}>
          <h2>{props.searchInput === "" ? "All Books" : `Search result for "${props.searchInput}"`}</h2>
        </div>
        <div className={`${styles['booklist-content']} ${styles['grid']}`}>
          {/* {
            booksWithCovers.slice(0, 30).map((item, index) => {
              return (
                <Book key = {index} {...item} />
              )
            })
          } */}
          
          {props.DATA.map((item)=>{
            return <Book key={item.book_id} {...item}/>
          })}
        </div>
      </div>
    </section>
  )
}

export default BookList