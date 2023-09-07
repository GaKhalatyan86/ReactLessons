import React from "react";

function ButtonList(onClickButton)
{
        return <div>
                   <button  className="btn btn-primary" name="inc" onClick={()=>onClickButton.onClickHandler(1)}>Increment</button>
                   <button  name="dec" className="btn btn-primary" onClick={()=>onClickButton.onClickHandler(-1)}>Decrement</button>
               </div>
}
export default ButtonList