import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StickerItem from '../StickerItem/StickerItem';

export default function StickersPage () {
    const apiURL = "https://61ec9caff3011500174d21ce.mockapi.io/stickers";

    const [stickers, setStickers] = useState();

    useEffect(() => {
        axios.get(apiURL)
        .then(resp => {
            setStickers(resp.data)
        })
    }, [])
    
    return (
        <div>
            {stickers ? stickers.map(item => (
                <StickerItem key={item.id} sticker={item}/>
            )) : <div>Loading</div>}
        </div>
    )
}