const data = [
  {
    id: 1,
    invoice: "SK-4TFR2H623W",
    user: "Teguh Muhammad Harits",
    email: "teguhcodedev3@gmail.com",
    total: "Rp. 168.000",
    status: "SUCCESS",
  },
  {
    id: 2,
    invoice: "SK-MFGFFP50D5",
    user: "Teguh Muhammad Harits",
    email: "teguhcodedev3@gmail.com",
    total: "Rp. 250.000",
    status: "EXPIRED",
  },
];

export default function TransactionTable() {
  return (
    <div className="bg-white rounded-xl shadow overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="p-3 text-left">NO</th>
            <th className="p-3 text-left">INVOICE</th>
            <th className="p-3 text-left">USER</th>
            <th className="p-3 text-left">TOTAL</th>
            <th className="p-3 text-left">STATUS</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border-t">
              <td className="p-3">{item.id}</td>
              <td className="p-3">{item.invoice}</td>
              <td className="p-3">
                <div className="font-medium">{item.user}</div>
                <div className="text-gray-500 text-xs">{item.email}</div>
              </td>
              <td className="p-3">{item.total}</td>
              <td className="p-3">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold
                  ${
                    item.status === "SUCCESS"
                      ? "bg-green-100 text-green-600"
                      : "bg-yellow-100 text-yellow-600"
                  }`}
                >
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
