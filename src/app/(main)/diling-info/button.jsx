import React from 'react'

const button = () => {

    const LikeButton = () => {
        const [count, setCount] = useState(0);
        const [colorIndex, setColorIndex] = useState(0);
    
        const colors = ['bg-purple-600', 'bg-blue-600', 'bg-green-600', 'bg-yellow-600', 'bg-orange-600', 'bg-red-600'];
    
        const increment = () => {
            setCount(count + 1);
            setColorIndex((colorIndex + 1) % colors.length);
        };
    
        return (
            <div className='flex flex-col items-center justify-center gap-6'>
                <div className='flex justify-center mt-3 text-2xl bg-black text-white w-[100%]'>LikeButton</div>
                <button
                    className={`w-[150px] h-[50px] ${colors[colorIndex]} rounded-3xl border border-black`}
                    onClick={increment}
                >
                    {count} Likes
                </button>
            </div>
        );
    };
}
export default button