const Filter = ({searchValue,handleChange}) => {
  return(
      <div>
          filter shown with <input 
          value={searchValue} 
          onChange={handleChange}/>
      </div>
  )
}
export default Filter