import { useEffect } from "react";
import { SVG } from '../ui/SVG'

export interface RouteItem {
    text: string;
    route: string;
    nav: (route: string) => void;
}

export interface StickyHeaderProps {
    /** Which items to include as routes */
    routes: RouteItem[];
}

export const StickyHeader = ({
    routes
}: StickyHeaderProps) => {

    useEffect(() => {
        if (routes.length > 5) {
            console.log("WARNING: Provided more routes than able to show.");
        }
    }, []);

    return (
        <div
            className="fixed justify-between items-center
            p-6 
            inset-x-8 top-10 z-9999
            border border-b-5 border-gray-900  
            shadow-sm shadow-gray-900
            bg-[#122647]
            rounded-full
            text-white
            flex"
        >
            <div id="left" className="hidden md:flex justify-center items-center pl-2 pr-2">
                <SVG
                    svg="darkMode"
                />
                <p className="font-manrope font-semibold pl-2 pr-2 select-none">
                    Abigail
                </p>
            </div>
            <div
                className="flex 
                *:pl-2 *:pr-2 
                *:mr-2 *:ml-2
                md:justify-end
                w-full items-center justify-center
                font-manrope 
                *:rounded-full *:border *:hover:bg-[#0f1825]
                *:hover:cursor-pointer *:hover:border
                *:border-transparent"
            >
                {routes.map(({ text, route, nav }) => (
                    <div
                        key={text}
                        onClick={() => { nav?.(route); console.log('clicked') }}
                    >
                        {text}
                    </div>
                ))}
            </div>
        </div >
    );
};
