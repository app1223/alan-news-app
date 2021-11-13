import React, { createRef, useEffect, useState } from 'react';
import Images from '../images/img.png';

function ArticleCards({article:{urlToImage,url, description, publishedAt, source, title } ,i,activeArticle}) {
    const [elRefs, setElRefs] = useState([]);
    const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);

        useEffect(() => {
            window.scroll(0, 0);

            setElRefs((refs) => Array(20).fill().map((_, j) => refs[j] || createRef()));
        }, []);

        useEffect(() => {
        if (i === activeArticle && elRefs[activeArticle]) {
            scrollToRef(elRefs[activeArticle]);
        }
        }, [i, activeArticle, elRefs]);
    return (
    <div ref={elRefs[i]} className= "relative group h-full ">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt "></div>
        <div className={activeArticle===i ? " relative rounded-b-lg border-b-[20px] border-blue-700 bg-black flex flex-col h-full justify-between p-2 items-center  leading-none": " relative  bg-black flex flex-col h-full justify-between p-2 items-center border-b-[20px] border-black rounded-b-lg leading-none"}>
            <a href={url} target='_blank' rel='noreferrer'>
                    <img loading="lazy" src={urlToImage ? urlToImage : Images} className="h-60 w-full object-cover" alt="articleImage" />
                <div className=" flex justify-between items-center my-2">
                    <p className="text-gray-400">{(new Date(publishedAt)).toDateString()}</p>
                    <p className="text-gray-400">{source.name}</p>
                </div>
                    <h2 className="font-semibold text-lg">{title}</h2>
                    <p className="my-2">{description}</p>
             </a>
                <div className="flex justify-between items-center w-full">
                    <a className="bg-blue-700 p-2 text-white rounded-md" href={url} target='_blank' rel='noreferrer'>Learn More</a>
                    <p>{i+1}</p>
                </div> 
        </div>
    </div>
    )
}

export default ArticleCards
