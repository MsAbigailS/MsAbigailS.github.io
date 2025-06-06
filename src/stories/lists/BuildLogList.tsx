import { List } from '../ui/List';
import buildLog from "../../data/progress.json"
import type { BuildLog } from "../../types/buildlog";
import { BuildLogCard } from "../../stories/cards/BuildLogCard"
import { build } from 'vite';

export interface BuildLogListProps {
    log?: BuildLog[];
};

export const BuildLogList = ({
    log = buildLog
}: BuildLogListProps) => {
    const dataId = 'build-log-list';
    return (
        <List>
            <div
                id={dataId}
                className="flex flex-col-reverse items-center lg:w-[50%] w-full mx-auto max-w-screen-md"
            >
                {log.map((item, index) => (
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
