import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loading from "../../../components/Shared/Loading";



const PaymentHistory = () => {

      const {user} = useAuth();
      const axiosSecure = useAxiosSecure();

      const {isPending, data: payments =[]} = useQuery({
            queryKey: ['payments', user?.email],
            queryFn: async()=>{
                  const res = await axiosSecure.get(`/payments?email=${user.email}`);

                  return res.data;
            }
      });

      if(isPending){
            return <Loading/>
      }

      return (
            <div className="p-6">
      <h2 className="text-2xl font-bold mb-5">
        💳 Payment History ({payments?.length})
      </h2>

      <div className="overflow-x-auto bg-base-100 rounded-xl shadow">
        <table className="table table-zebra w-full">
          {/* Head */}
          <thead className="bg-base-200">
            <tr>
              <th>#</th>
              <th>Parcel ID</th>
              <th>Email</th>
              <th>Amount</th>
              <th>Method</th>
              <th>Transaction ID</th>
              <th>Paid Date</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {payments?.map((pay, index) => (
              <tr key={pay._id}>
                <th>{index + 1}</th>
                <td>{pay.parcelId}</td>
                <td>{pay.email}</td>
                <td className="font-semibold">৳{pay.amount}</td>
                <td>
                  <span className="badge badge-success">
                    {pay.paymentMethod}
                  </span>
                </td>
                <td className="text-xs">{pay.transactionId}</td>
                <td>
                  {new Date(pay.paid_at).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Empty State */}
        {payments?.length === 0 && (
          <p className="text-center py-10 text-gray-400">
            No payment records found 😔
          </p>
        )}
      </div>
    </div>
      );
};

export default PaymentHistory;