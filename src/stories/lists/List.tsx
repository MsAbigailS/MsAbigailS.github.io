export interface ListProps {
    children: React.ReactNode;
}

export const List = ({
    children
}: ListProps) => {
    return (
        <div id="list">
            {children}
        </div>
    );
};

