export async function loader(){
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
}


const SingleLoader = () => {
  return (
    <div>SingleLoader</div>
  )
}

export default SingleLoader