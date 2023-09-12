import './GenreSelect.css';

export const GenreSelect = ({ genres = [], onSelect }) => {
  const handleButtonClick=(event)=>{
    onSelect(event.target.value);
  }

  return (
    <div>
      <ul>
        {genres?.map((genre,index) =>{
        return(
          <li key={index}>
            <button  value={genre} onClick={handleButtonClick}>{genre}</button>
          </li>)}
          )}
      </ul>
    </div>
  );
};
