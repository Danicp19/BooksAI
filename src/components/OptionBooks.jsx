import { useState, useEffect } from "react";
import parseBookOptions from "@utils/parsebookopt";
const OptionBooks = ({ bot, message }) => {
    const [width, setWidth] = useState(700);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const books = parseBookOptions(message.content);
    console.log(books)
    return (
        <div className="flex items-center justify-center p-4 font-semibold shadow-sm rounded-2xl bg-red bg-opacity-20 drop-shadow shadow-grayblue ">
            {width > 600 ? (
                <div>
                    <img src={bot} className="w-12 h-12 mr-2 rounded-full" />
                    <div>
                        <h1 className="py-2 text-xl">{message.content.split("|")[0]}</h1>
                        <table className="bg-light rounded-xl ">
                            <thead>
                                <tr className="bg-lightred">
                                    <th className="px-2">Name</th>
                                    <th className="px-2">Description</th>
                                    <th className="px-2">Language</th>
                                </tr>
                            </thead>
                            <tbody>
                                {books.map((book) => (
                                    <tr key={book.name}>
                                        <td className="p-2 text-xl">{book.name}</td>
                                        <td className="p-2 px-4">{book.description}</td>
                                        <td className="p-2">{book.language}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <h2 className="py-2 text-xl">{message.content.split("\n")[7]}</h2>
                    </div>
                </div>
            ) : (
                <div>
                    <img src={bot} className="w-12 h-12 mr-2 rounded-full" />
                    <div>
                        <h1 className="py-2 text-xl">{message.content.split("|")[0]}</h1>
                        <div className="bg-light rounded-xl ">
                            {books.map((book) => (
                                <div key={book.name}>
                                    <h1 className="p-2 text-xl">{book.name}</h1>
                                    <p className="p-2 px-4">description: {book.description}</p>
                                    <p className="p-2">language: {book.language}</p>
                                    <hr />
                                </div>
                            ))}
                            <h2 className="py-2 text-xl">{message.content.split("\n")[7]}</h2>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
export default OptionBooks;