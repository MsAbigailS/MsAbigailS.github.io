import { List } from '../ui/List';
import buildLog from "../../data/progress.json"
import { BuildLogCard } from "../../stories/cards/BuildLogCard"
import { build } from 'vite';

export interface BuildLogListProps {

};

export const BuildLogList = ({
}: BuildLogListProps) => {
    const dataId = 'build-log-list';

    return (
        <List>
            <div
                id={dataId}
                className="flex flex-col-reverse items-center lg:w-[50%] w-full mx-auto max-w-screen-md"
            >


                {buildLog.map((item, index) => (
                    <div
                        key={index}
                        className={`m-6`}
                    >
                        <h1 className={"italic text-lg"}>{item.date}</h1>
                        <BuildLogCard
                            buildItem={item}
                        />
                    </div>
                ))}
            </div>
        </List >
    );
};
