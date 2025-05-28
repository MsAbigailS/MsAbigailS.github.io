import { List } from '../ui/List';
import { Tag } from '../ui/Tag';

export interface TagListProps {
    tags: string[];
};

export const TagList = ({
    tags = [
        'Tag1',
        'Tag2'
    ],
}: TagListProps) => {
    const dataId = 'tag-list';

    return (
        <List>
            <div id={dataId} className='flex flew-row flex-wrap gap-2 justify-center items-center'>
                {tags.map((tag, index) => (
                    <div key={index}>
                        <Tag label={tag} />
                    </div>
                ))}
            </div>
        </List>
    );
};
