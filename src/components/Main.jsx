import React from 'react';
import Footer from "./Footer";
import Chat from "./Chat";
// import ReactFullpage from '@fullpage/react-fullpage';
const bg =
    "https://drive.google.com/uc?export=download&id=1SP9wLCdgy12qBt1yIhyvLEtdHgxJJOEj";

const Main = () => {

    return (

        <>
            <section className="flex flex-col items-center justify-center w-screen h-screen max-h-screen py-4 bg-[url('https://drive.google.com/uc?export=download&id=17Cvl_BPQ-5u76mVBehLgV-l6CFZGc6re')] bg-cover bg-grayblue ">

                <div className="flex items-center justify-center w-full h-5/6">
                    <Chat />
                </div>
                <div className="z-40 flex items-end justify-end h-1/6 ">
                    <Footer />
                </div>
            </section>
        </>

    );


};


export default Main;