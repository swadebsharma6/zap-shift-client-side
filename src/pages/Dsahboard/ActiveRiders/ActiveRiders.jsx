import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ActiveRiders = () => {
  const [search, setSearch] = useState("");
  const axiosSecure = useAxiosSecure();

  // Fetch active riders
  const {
    data: riders = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["activeRiders"],
    queryFn: async () => {
      const res = await axiosSecure.get("/riders/active");
      return res.data;
    },
  });

  const handleDeactivate = async (id) => {
    try {
      await axiosSecure.patch(`/riders/deactivate/${id}`);
      // Reload data
      refetch();
    } catch (error) {
      console.error(
        "Deactivate failed:",
        error.response?.data || error.message,
      );
    }
  };

  // Search filter
  const filteredRiders = riders.filter((rider) =>
    rider.name.toLowerCase().includes(search.toLowerCase()),
  );

  if (isLoading) {
    return <p className="text-center">Loading...</p>;
  }

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">
          Active Riders ({filteredRiders.length})
        </h2>

        <input
          type="text"
          placeholder="Search by name..."
          className="input input-bordered input-sm w-64"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead className="bg-base-200">
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
            {filteredRiders.map((rider, index) => (
              <tr key={rider._id}>
                <td>{index + 1}</td>
                <td>{rider.name}</td>
                <td>{rider.email}</td>
                <td>{rider.phone}</td>

                <td>
                  <span className="badge badge-success">{rider.status}</span>
                </td>

                <td>
                  <button
                    onClick={() => handleDeactivate(rider._id)}
                    className="btn btn-xs btn-warning"
                  >
                    Deactivate
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* No Data */}
        {filteredRiders.length === 0 && (
          <p className="text-center mt-5 text-gray-500">
            No active riders found
          </p>
        )}
      </div>
    </div>
  );
};

export default ActiveRiders;
