import { Link, useLoaderData, Form } from "react-router-dom";

function Index(props) {
  // GET THE DATA FROM OUR LOADER
  const cheese = useLoaderData();

  return (
    <div>
        <h2>Create a new cheese log</h2>
        <Form action="/create" method="post">
            <input type="text" name="name" placeholder="cheese name"/>
            <input type="text" name="country" placeholder="cheese origin"/>
            <input type="text" name="image" placeholder="cheese image"/>
            <input type="submit" value="Create cheese"/>
        </Form>
      {cheese.map((cheese, index) => {
        return (
          <div key={cheese._id} className="person">
            <Link to={`/${cheese._id}`}>
              <h1>{cheese.name}</h1>
            </Link>
            <img src={cheese.image} alt={cheese.name} />
            <h3>{cheese.country}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Index;