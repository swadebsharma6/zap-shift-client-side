import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loading from "../../../components/Shared/Loading";

const PendingRiders = () => {
 const axiosSecure = useAxiosSecure();

  // Load pending riders
 

  const {data: riders = [], isPending, isLoading, refetch} = useQuery({
      queryKey: ['pending-riders'],
      queryFn: async()=>{
             const res = await axiosSecure.get("/riders/pending");
             return res.data;
      }
     
  })

  if(isPending){
      return <Loading/>
  }



  // Approve rider


const handleStatusChange = async (id, status, email) => {
  try {
    await axiosSecure.patch(`http://localhost:3000/riders/status/${id}`,
      { status , email} // body
    );

    // Reload data after update
    refetch();

  } catch (error) {
    console.error("Update failed:", error.response?.data || error.message);
  }
};


  if (isLoading) return <p className="text-center">Loading...</p>;

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-4">
        Pending Riders ({riders?.length})
      </h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {riders?.map((rider, index) => (
              <tr key={rider._id}>
                <td>{index + 1}</td>
                <td>{rider.name}</td>
                <td>{rider.email}</td>
                <td>{rider.phone}</td>

                <td>
                  <span className="badge badge-warning">
                    {rider.status}
                  </span>
                </td>

                <td className="space-x-2">
                  <button
                    onClick={() => handleStatusChange(rider._id, "approved", rider.email)}
                    className="btn btn-xs btn-success"
                  >
                    Approve
                  </button>

                  <button
                    onClick={() => handleStatusChange(rider._id, "rejected", rider.email)}
                    className="btn btn-xs btn-error"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {riders?.length === 0 && (
          <p className="text-center mt-4 text-gray-500">
            No pending riders
          </p>
        )}
      </div>
    </div>
  );
};

export default PendingRiders;
