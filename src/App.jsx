

function App() {
  
function handleClick(){
  alert('your button is clicked')
}

const handleRemove = (num)=> {
  alert(num+100);
}

  return (
    <>
      <h1>Explore react world</h1>
      <button onClick={handleClick}>click me</button>
      <button onClick={handleRemove}>Remove</button>
      <button onClick={()=>handleRemove(100)} >Add</button>
      <button onClick={()=>{alert('you click monir button')}}>Munir</button>
    </>
  )
}

export default App
