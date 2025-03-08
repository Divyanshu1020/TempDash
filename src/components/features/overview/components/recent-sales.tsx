
import { Code, Facebook, Github, Globe, Video } from "lucide-react";

export function RecentSales() {
  return (
    <div>
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Top Channels
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="pb-3 text-xs font-normal text-gray-400 text-left">
                  SOURCE
                </th>
                <th className="pb-3 text-xs font-normal text-gray-400 text-right">
                  VISITORS
                </th>
                <th className="pb-3 text-xs font-normal text-gray-400 text-right">
                  REVENUES
                </th>
                <th className="pb-3 text-xs font-normal text-gray-400 text-right">
                  SALES
                </th>
                <th className="pb-3 text-xs font-normal text-gray-400 text-right">
                  CONVERSION
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-50">
                <td className="py-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center">
                      <Github className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-800">Github.com</span>
                  </div>
                </td>
                <td className="py-2 text-right text-gray-800">2.4K</td>
                <td className="py-2 text-right text-green-500">$3,877</td>
                <td className="py-2 text-right text-gray-800">267</td>
                <td className="py-2 text-right text-blue-400">4.7%</td>
              </tr>
              <tr className="border-b border-gray-50">
                <td className="py-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                      <Facebook className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-800">Facebook</span>
                  </div>
                </td>
                <td className="py-4 text-right text-gray-800">2.2K</td>
                <td className="py-4 text-right text-green-500">$3,426</td>
                <td className="py-4 text-right text-gray-800">249</td>
                <td className="py-4 text-right text-blue-400">4.4%</td>
              </tr>
              <tr className="border-b border-gray-50">
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center">
                      <Globe className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-800">Google (organic)</span>
                  </div>
                </td>
                <td className="py-4 text-right text-gray-800">2.0K</td>
                <td className="py-4 text-right text-green-500">$2,444</td>
                <td className="py-4 text-right text-gray-800">224</td>
                <td className="py-4 text-right text-blue-400">4.2%</td>
              </tr>
              <tr className="border-b border-gray-50">
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-300 flex items-center justify-center">
                      <Video className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-800">Vimeo.com</span>
                  </div>
                </td>
                <td className="py-4 text-right text-gray-800">1.9K</td>
                <td className="py-4 text-right text-green-500">$2,236</td>
                <td className="py-4 text-right text-gray-800">220</td>
                <td className="py-4 text-right text-blue-400">4.2%</td>
              </tr>
              <tr>
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                      <Code className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-800">Indiehackers.com</span>
                  </div>
                </td>
                <td className="py-4 text-right text-gray-800">1.7K</td>
                <td className="py-4 text-right text-green-500">$2,034</td>
                <td className="py-4 text-right text-gray-800">204</td>
                <td className="py-4 text-right text-blue-400">3.9%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
