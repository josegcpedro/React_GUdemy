
const Events = () => {
  const HandleMyEvent = (e) => {
    console.log(e);
  }
  
    return (
    <div>
        <div>
            <button onClick={HandleMyEvent}>
                Clique aqui!
            </button>
            <button onClick={() => console.log("siuu")}>
                Clique aqui!!!
            </button>
        </div>
    </div>
  )
}

export default Events