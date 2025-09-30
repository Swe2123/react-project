'use client';

import FallingText from '@/components/FallingText';

export default function Hero() {
    return (
        <div className="w-full h-[400px]">
        <div className="max-w-5xl mx-auto">
            <FallingText
            text={`React Bits is a library of animated and interactive React components designed to streamline UI development and simplify your workflow.`}
            highlightWords={["React", "Bits", "animated", "components", "simplify"]}
            highlightClass="highlighted"
            trigger="hover"
            backgroundColor="transparent"
            wireframes={true}
            gravity={0.56}
            fontSize="2rem"
            mouseConstraintStiffness={0.9}
            />
        </div>
        </div>
    );
}