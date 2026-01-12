import StatCard from "../components/StatCard";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Course" value="15" color="blue" />
        <StatCard title="Course Selesai" value="1" color="green" />
        <StatCard title="Belum Selesai" value="14" color="orange" />
        <StatCard title="Sertifikat" value="1" color="purple" />
      </div>

      {/* Progress */}
      <div className="bg-white p-5 rounded-xl shadow">
        <div className="flex justify-between mb-2">
          <span className="font-medium">Overall Completion</span>
          <span className="text-blue-600 font-semibold">6.7%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-green-500 h-3 rounded-full"
            style={{ width: "6.7%" }}
          />
        </div>
      </div>
    </div>
  );
}
