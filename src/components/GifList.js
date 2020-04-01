import React from 'react'

export default function GifList(props) {
        return (
            <ul>
                {props.gifs.map(gif => {
                    const { images: { original: { url }} } = gif;
                    return <li><img src={url} /></li>
                 })}
            </ul>
        )
}