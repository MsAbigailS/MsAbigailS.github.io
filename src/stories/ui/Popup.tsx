import { useEffect } from 'react'
import React from 'react';
import { preview } from 'vite';

export interface PopupProps {

}

export const Popup = ({

}: PopupProps) => {

    // placing popup in the center of the screen
    useEffect(() => {

    }, [])

    return (
        <div
            id="popup"
            className={`fixed z-1000 border-white border-2 min-w-screen min-h-screen field-sizing-fixed`}
        >
            popup
        </div>
    );
};
