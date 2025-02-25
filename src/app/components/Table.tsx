import { Fame } from "@/types";

interface FameDataProps {
    fames: Fame[]
  }

const Table = ({fames}:FameDataProps) => {

    console.log(fames, "this is table data");
    return (
        <div>   
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-orange dark:text-white">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Description
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Stock
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {fames.map((fame, index)=> {
                            return (
                                <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {fame.name}
                                    </th>
                                    <td className="px-6 py-4">
                                        {fame.biography}
                                    </td>
                                    <td className="px-6 py-4">
                                        {fame.sku}
                                    </td>
                                    <td className="px-6 py-4">
                                        ${fame.price}
                                    </td>
                                    <td className="px-6 py-4">
                                        <a href="#" className="font-medium text-orange hover:underline">Add to Cart</a>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table;