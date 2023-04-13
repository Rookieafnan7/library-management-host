/* eslint-disable @next/next/no-img-element */
import styles from '../src/styles/Sidebar.module.css'
export default function SearchBar(props){
    return(
        <div className={styles.search}>
          <label>
            <img src="pics/11.png" alt="search" />
            <input type="text" placeholder="Search here" onKeyDown={(event)=>{
              if(event.key === 'Enter'){
                props.searchHandler(props.controlValue);
              }
            }} value = {props.controlValue} onChange={(e)=>{
              props.controlFunction(e.target.value);
            }}/>
            
          </label>
          {/* <Button onClick={props.searchHandler}/> */}
        </div>
    )
}