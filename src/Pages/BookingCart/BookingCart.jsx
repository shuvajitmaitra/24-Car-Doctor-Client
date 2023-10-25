import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { MdCancel } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const BookingCart = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const handleConfirm = (id) => {
    fetch(`http://localhost:5000/orders/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = bookings.filter((booking) => booking._id !== id);
          const confirmed = bookings.find((booking) => booking._id === id);
          confirmed.status = "confirm";
          console.log(confirmed.status);
          const newBooking = [confirmed, ...remaining];
          setBookings(newBooking);
        }
      });
  };
  useEffect(() => {
    fetch(`http://localhost:5000/orders?userId=${user?.uid}`)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
      });
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to cancel the order?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/orders/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              toast.success("Deleted Successfully !", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
              const remaining = bookings.filter(
                (booking) => booking._id !== id
              );
              setBookings(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="overflow-x-auto py-10">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Service Name</th>
            <th>Price</th>
            <th>Order Date</th>
            <th>Working Status</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {bookings.map((booking) => (
            <tr key={booking._id}>
              <th className="text-4xl">
                <MdCancel
                  onClick={() => handleDelete(booking._id)}
                  className="cursor-pointer"
                />
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <img
                    src={booking.img}
                    className="rounded w-24 h-24"
                  />

                  <div className="font-bold">{booking.title}</div>
                </div>
              </td>
              <td>
                <p>{booking.price}</p>
              </td>
              <td>{booking.confirmDate}</td>
              <th>
                {booking.status === "confirm" ? (
                  <p className=" w-fit text-center px-2 bg-green-500 text-white py-1 rounded">
                    Confirmed
                  </p>
                ) : (
                  <button
                    onClick={() => handleConfirm(booking._id)}
                    className="btn bg-[#FF3811] text-white btn-sm"
                  >
                    Pending
                  </button>
                )}
              </th>
            </tr>
          ))}
        </tbody>
        {/* foot */}
        <ToastContainer />
      </table>
    </div>
  );
};

export default BookingCart;
