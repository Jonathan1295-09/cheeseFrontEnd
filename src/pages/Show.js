import { useLoaderData, Form } from "react-router-dom";

function Show(props) {
  const cheese = useLoaderData();

  return (
    <div className="person">
      <h1>{cheese.name}</h1>
      <h2>{cheese.img}</h2>
      <img src={cheese.country} alt={cheese.name} />

    <h2>Update {cheese.name}</h2>
    <Form action={`/update/${cheese._id}`} method="post">
        <input type="text" name="name" placeholder="cheese name" defaultValue={cheese.name}/>
        <input type="text" name="country" placeholder="cheese origin" defaultValue={cheese.country}/>
        <input type="text" name="image" placeholder="cheese image" defaultValue={cheese.image}/>
        <input type="submit" value="Update Cheese"/>
    </Form>
    <h2>Delete cheese</h2>
    <Form action={`/delete/${cheese._id}`} method="post">
        <input type="submit" value="Delete cheese"/>
    </Form>
    </div>
  );
}

export default Show;