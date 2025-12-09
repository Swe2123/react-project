"use client";

import { useRouter, usePathname } from "next/navigation";

// arrows used to page across the site, mostly used for mobile access

const PaginationArrows = () => {
    const router = useRouter();
    const pathname = usePathname();

    // Define your page order
    const pages = [
        { path: "/", name: "Home" },
        { path: "/about", name: "About" },
        { path: "/description", name: "Description" },
        { path: "/projects", name: "Projects" },
        { path: "/qualifications", name: "Qualifications" },
    ];

    // Find current page index
    const currentIndex = pages.findIndex(page => page.path === pathname);

    const handlePrev = () => {
        if (currentIndex > 0) {
            router.push(pages[currentIndex - 1].path);
        }
    };

    const handleNext = () => {
        if (currentIndex < pages.length - 1) {
            router.push(pages[currentIndex + 1].path);
        }
    };

    return (
        <div className="fixed bottom-4 right-4 flex text-black gap-1 items-center z-50">
            <button 
                onClick={handlePrev} 
                disabled={currentIndex === 0}
                className="border border-solid px-2 py-1 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors"
            >
                &lt;
            </button>
            <button 
                onClick={handleNext}
                disabled={currentIndex === pages.length - 1}
                className="border border-solid px-2 py-1 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors"
            >
                    &gt;
            </button>
        </div>
    );
};

export default PaginationArrows;