import React, { useState } from "react";

export default function StickerItem ({sticker}) {
    
  /*   let styles = {
        color: "red",
        position: "absolute",
        left: sticker.left,
        top: sticker.top,
        height: sticker.height,
        width: sticker.width,
    } */

    const [style, setStyle] = useState({
        left: sticker.left,
        top: sticker.top,
        position: "absolute"
    })
    const [scrolls, setScrolls] = useState({
        diffX: 0,
        diffY: 0,
    })

    const [draggingItem, setDraggingItem] = useState(false);

    function dragStart (e) {
       setScrolls({
           diffX: e.screenX - e.currentTarget.getBoundingClientRect().left,
           diffY: e.screenY - e.currentTarget.getBoundingClientRect().top
       })
       setDraggingItem(true)
    }

    function dragging(e) {
        if(draggingItem){
            let left = e.screenX - scrolls.diffX;
            let top = e.screenY - scrolls.diffY;
    
            setStyle({ 
                ...style, 
                left: left + "px",
                top: top + "px",
            })
        }
    }

    function dragEnd () {
        setDraggingItem(false)
    }

    return (
        <div style={style} onMouseDown={(e) => dragStart(e)} onMouseMove={(e) => dragging(e)} onMouseUp={(e) => dragEnd()}>
            {sticker.description}
        </div>
    )
}