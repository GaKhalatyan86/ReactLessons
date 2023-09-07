import react from "react";

function GenreSelect(props)
{
    const Genres=['Action','Comedy','Drama','Fantasy']

    return(<>
             <nav className="navbar navbar-expand-lg navbar-light bg-light">
               <span className="navbar-brand">Genres</span>
                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                   </button>
                     <div className="collapse navbar-collapse" id="navbarNav">
                      <ul className="navbar-nav">
                       {Genres.map((data,i)=>
                         <li className="nav-item">
                           <button name={i} className="btn btn-light" Value={data} >{data}</button>
                         </li>
                       )}
                     </ul>
                     </div>
             </nav>

          </>)
}

export default GenreSelect