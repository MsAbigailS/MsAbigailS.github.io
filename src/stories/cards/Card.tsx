export interface CardProps {
    children: React.ReactNode;
}

export const Card = ({ children }: CardProps) => {
    return (
        <div data-id="card" className={`h-full w-full`}>
            {children}
        </div>
    );
};
