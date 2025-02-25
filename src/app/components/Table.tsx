import { Fame } from "@/types";

interface FameDataProps {
    fames: Fame[]
  }

const Table = ({fames}:FameDataProps) => {

    const isFame = fames.length > 0 ? true : false;

    console.log(fames, "this is table data");
    return (
        <div>   
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs uppercase bg-gray-50 bg-orange dark:text-white text-black">
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
                        {isFame ? (fames.map((fame, index)=> {
                            return (
                                <tr key={index} className="odd:bg-white odd:dark:bg-black odd:text-black odd:dark:text-white even:bg-black even:dark:bg-white even:text-white even:dark:text-black">
                                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
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
                        })) : (
                            <tr className="dark:bg-white dark:text-black bg-black text-white">
                               <td colSpan={6} className="text-center text-[30px] py-10">Oops! No fame is avaliable yet. Come back tomorrow. </td>                               
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table;