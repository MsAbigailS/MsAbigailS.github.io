import { use, useRef, useEffect, useMemo, useState } from 'react'
export interface TestProps {
}

export const Test = ({
}: TestProps) => {
    const [tilt, setTilt] = useState<{ x: number; y: number }>()
    const size = 350

    let card = useRef<HTMLDivElement>(null)

    // let quad = useMemo(() => {
    //     return console.log(`rotateX(${currLoc})`)
    // }, [currLoc])

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!card.current) return

            // defining quad bounds
            const x = e.clientX - card.current.getBoundingClientRect().left
            const y = e.clientY - card.current.getBoundingClientRect().top
            const maxWidth = card.current.getBoundingClientRect().width
            const maxHeight = card.current.getBoundingClientRect().height

            // identify if mouse in bounds
            if (x > 0 && x < maxWidth && y > 0 && y < maxHeight) {
                if (x < maxWidth * 0.5 && y < maxHeight * 0.5) {
                    setTilt({ x: -30, y: 30 }) // top left
                } else if (x > maxWidth * 0.5 && y < maxHeight * 0.5) {
                    setTilt({ x: -30, y: -30 }) // top right
                } else if (x > maxWidth * 0.5 && y > maxHeight * 0.5) {
                    setTilt({ x: 30, y: -30 }) // bottom right
                } else if (x < maxWidth * 0.5 && y > maxHeight * 0.5) {
                    setTilt({ x: 30, y: 30 }) // bottom left
                }
            } else {
                // setCurrLoc(0)
                card.current.style.transform = `rotateX(0deg) rotateY(0deg)`
                return
            }

            // tilting or resetting
            card.current.style.transform = `rotateX(${tilt?.x}deg) rotateY(${tilt?.y}deg)`
            console.log(card.current.style.transform)
        }

        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }

    }, [tilt])

    const colors = ['bg-blue-500', 'bg-green-500', 'bg-orange-500']
    const bgColor = useMemo(() => {
        return colors[Math.floor(Math.random() * colors.length)]
    }, [])

    return (
        <div>
            <div ref={card} className={`inline-flex perspective group size-${size}
                transition-transform duration-500 preserve-3d
                bg-gradient-to-b from-red-400 to-yellow-300 rounded-lg shadow-lg shadow-amber-500
                border border-purple-500 `}
            >
                <img src="https://s.yimg.com/ny/api/res/1.2/izepqz_8HAPj6TsnMmt_JA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD04Mjg-/https://media.zenfs.com/en/parade_pets_articles_328/fa8131c8b28f9b9f3117d5138a96272d" />
            </div>
        </div>
    );
};
