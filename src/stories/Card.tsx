import './card.css';

export interface CardProps {
    /** Is this the principal call to action on the page? */
    primary?: boolean;
    /** What background color to use */
    backgroundColor?: string;
    /** What title to include */
    title?: string;
}

export const Card = ({
    primary = false,
    backgroundColor,
    title,
    ...props
}: CardProps) => {
    return (
        <div
            className={`rounded-lg p-5 m-2 justify-center items-center flex min-w-80 min-h-80 max-w-80 max-h-80 shadow-md`}
            style={{ backgroundColor }}
        >
            <div
                className={`font-bold text-lg`}>
                {title}
            </div>
        </div>
    );
};
