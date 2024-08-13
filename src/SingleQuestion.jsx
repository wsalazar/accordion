import { useState } from "react";

const SingleQuestion = ({id, title, info, activeId, displayAnswer}) => {
 const isActive = id === activeId
  return (
    <div>
     <article key={id}>
      <h4>{title}</h4>
      {isActive && <p>{info}</p>}
      <button className="btn" onClick={() => displayAnswer(id)}>Display Answer</button>
     </article>
    </div>
  )
}
export default SingleQuestion