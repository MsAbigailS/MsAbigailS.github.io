export interface TestProps {
}

export const Test = ({
}: TestProps) => {

    return (
        // <div
        //     className={`bg-zinc-950 shadow-xl rounded-md border border-slate-900 bg-no-repeat
        //         bg-[linear-gradient(225deg,transparent_25%,rgba(65,65,65,.1)_70%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] transition-[background-position_2s_ease] bg-[position:-100%_0,0_0] hover:bg-[position:150%_0,0_0] hover:duration-[1000ms]
        //         max-w-150 min-w-150 max-h-150 min-h-150`}
        // >
        // </div>
        <div className={`text-white min-w-150 min-h-150 flex justify-center items-center flex-col relative`}>
            <div id="cover"
                className=
                {`min-w-full min-h-full absolute bg-no-repeat
                    bg-[linear-gradient(225deg,transparent_25%,rgba(65,65,65,.1)_70%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] 
                    transition-[background-position_2s_ease] bg-[position:-100%_0,0_0] hover:bg-[position:150%_0,0_0] hover:duration-[1000ms]`}
            >
            </div>
            <div id="under" className={`bg-zinc-950 min-w-full min-h-150`}>
                UNDER
            </div>
        </div>
    );
};
