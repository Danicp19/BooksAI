import React from 'react';
import Footer from "./Footer";
import Chat from "./Chat";

const Main = () => {

    return (

        <>
            <div className="flex flex-col items-center justify-center w-screen h-screen max-h-screen py-4 bg-[url('/fondo.jpg')] bg-cover bg-grayblue ">

                <div className="flex items-center justify-center w-full h-5/6">
                    <Chat />
                </div>
                <div className="z-40 flex items-end justify-end h-1/6 ">
                    <Footer />
                </div>
            </div>
        </>

    );


};


export default Main;