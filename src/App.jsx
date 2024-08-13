import { useState } from "react";
import questions from "./data";
import SingleQuestion from "./SingleQuestion";

const App = () => {
  const [queries, setQueries] = useState(questions)
  const [activeId, setActiveId] = useState(null)
  const [selectedQuery, setSelectedQuery] = useState(queries[0])
  const [toggleAnswer, setToggleAnswer] = useState(false)

 const displayAnswer = (id) => {
    const newActiveId = id === activeId ? null : id
    setActiveId(newActiveId)
  }
  return (
    <>
      {queries.map((query) => {
        return <SingleQuestion key={query.id} {...query} activeId={activeId} displayAnswer={displayAnswer} />
      })}
    </>
  )
  
};
export default App;
