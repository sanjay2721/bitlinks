'use client'
import React from 'react'
import { useState } from 'react'
import Link from 'next/link';
const shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setGenerated] = useState("")
    const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
                seturl("")
                setshorturl("")
                alert(result.message)
            })

            .catch((error) => console.error(error));
    }
    return (
        <div className='mx-auto max-w-lg bg-gray-100 my-16 p-8 rounded-lg flex flex-col gap-4' >
            <h1 className='font-bold text-xl' >Generate your short URLs</h1>
            <div className='flex flex-col gap-3' >
                <input type="text"
                    value={url}
                    className='px-4 py-2 bg-white focus:outline-gray-500 rounded-md'
                    placeholder='Enter the URL'
                    onChange={e => { seturl(e.target.value) }} />
                <input type="text"
                    value={shorturl}
                    className='px-4 py-2 bg-white focus:outline-gray-500 rounded-md'
                    placeholder='Enter your preferred short URL text'
                    onChange={e => { setshorturl(e.target.value) }} />
                <button onClick={generate} className='bg-gray-700 shadow-lg rounded-lg p-2 py-1 font-bold text-white my-4'>Generate</button>
            </div>
            {generated && <> <span className='font-bold text-lg'>Your Link </span><code><Link target="_blank" href={generated}>{generated}</Link> 
                </code></>}
        </div>
    )
}

export default shorten
