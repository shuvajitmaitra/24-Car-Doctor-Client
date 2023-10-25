import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Checkout = () => {
  const service = useLoaderData();
  const { title, price, img } = service;
  const { user } = useContext(AuthContext);
  const date = new Date().toLocaleDateString();

  console.log(user);
  const handleOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const date = form.date.value;
    const price = form.price.value;

    // console.log(name, email, date,price, user.uid);
    const order = {
      userId: user?.uid,
      name,
      email,
      title,
      img,
      confirmDate: date,
      price,
    };
    console.log(order);
    fetch("http://localhost:5000/orders", {
        method: "POST",
        headers: {
            'content-type': "application/json"
        },
        body: JSON.stringify(order)
    })
    .then(res=> res.json())
    .then(data => {
        console.log(data);
        alert("Order Confirm Successfully")
    })
  };
  return (
    <div>
      <h2>Confirm Order.......</h2>
      <h2>{title}</h2>
      <form
        onSubmit={handleOrder}
        className="card-body grid grid-cols-1 md:grid-cols-2 gap-6 md:p-16 max-w-4xl  mx-auto bg-zinc-200 rounded-lg"
      >
        <div className="form-control">
          <input
            type="text"
            name="name"
            defaultValue={user?.displayName}
            placeholder="Your Name"
            className="input rounded capitalize"
            required
          />
        </div>
        <div className="form-control">
          <input
            type="email"
            name="email"
            defaultValue={user?.email}
            placeholder="Your Email"
            className="input rounded"
            required
          />
        </div>
        <div className="form-control">
          <input
            type="text"
            name="date"
            defaultValue={date}
            className="input rounded"
            required
          />
        </div>
        <div className="form-control">
          <input
            type="text"
            name="price"
            defaultValue={"$" + price}
            placeholder="Due Amount"
            className="input rounded"
            required
          />
        </div>

        <div className="form-control mt-6 md:col-span-2">
          <button
            type="submit"
            className="btn bg-[#FF3811] rounded hover:text-black text-white text-lg font-medium capitalize"
          >
            Order Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
