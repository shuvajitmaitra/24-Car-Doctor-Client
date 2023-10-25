import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { MdCancel } from "react-icons/md";

const BookingCart = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  
  useEffect(() => {
    fetch(`http://localhost:5000/orders?userId=${user?.uid}`)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [user]);
  return (
      <div className="overflow-x-auto">
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
                <th>
                  <MdCancel />
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
                  <button className="btn bg-[#FF3811] text-white btn-sm">
                    Pending
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
  );
};

export default BookingCart;
