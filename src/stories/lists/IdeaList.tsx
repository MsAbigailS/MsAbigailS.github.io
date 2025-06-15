
import { List } from '../ui/List';
import type { Idea } from '../../types/ideas';
import ideasData from '../../data/ideas.json';
export interface IdeaListProps {
    ideas?: Idea[];
    limit?: number;
    status?: Idea["status"][];
}

export const IdeaList = (
    {
        ideas = ideasData as Idea[],
        limit = ideasData.length,
        status = ['In Progress']
    }: IdeaListProps) => {

    return (
        limit > ideas.length ? (
            <div className="text-white p-4">
                <p>Limit exceeds number of ideas</p>
            </div>
        ) : (
            <List>
                <div>
                    {ideas
                        .filter((idea) => status.includes(idea.status as 'Completed' | 'In Progress' | 'Closed'))
                        .slice(0, limit)
                        .map((idea, index) => (
                            <div key={index} className="pb-2 pt-2">
                                <div className="p-6">
                                    <h3 className="text-white border-b-2 text-xl font-semibold">{idea.title}</h3>
                                    <p className="text-gray-600">Status: {idea.status}</p>
                                </div>
                            </div>
                        ))
                    }
                    <div className="p-6">
                        <h3 className="text-white font-manrope">... and everything else along the way</h3>
                    </div>
                </div>
            </List>
        )
    )
};
