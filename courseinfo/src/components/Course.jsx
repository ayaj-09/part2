const Course = ({course}) => {
    return(
      <div>
        <Header title = {course.name}/>
        <Content parts = {course.parts} />
        <Total parts = {course.parts}/>
      </div>
      
    )
  }
  
  const Header = ({title})=>{
    return (
      <h1>{title}</h1>
    )
  }
  
  const Content = ({parts}) =>{
    return parts.map((p)=><Part key = {p.id} detail = {p}/>) 
  }
  
  const Part = ({detail})=>{
    return(
      <p>{detail.name} {detail.exercises}</p>
    )
  }
  
  const Total = ({parts}) => {
    return <p><b>total of {parts.reduce((a,b)=>a+b.exercises,0)} exercises</b></p>
  }

export default Course