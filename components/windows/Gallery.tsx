'use client'

import { LocationItem, locations, photosLinks } from "@/data/data";
import WindowControls from "../WindowControls";
import WindowWrapper from "../WindowWrapper";
import Image from "next/image";
import { useMemo, useState } from "react";
import useWindowStore from "@/store/window";

const Gallery = () => {
    const { openWindow } = useWindowStore();
    const images = useMemo(() => {
        const extractedImages: LocationItem[] = [];
        Object.values(locations).forEach((location) => {
            location.children?.forEach((item) => {
                if (item.imageUrl && item.name) {
                    extractedImages.push(item);
                }
                item.children?.forEach((subItem) => {
                    if (subItem.imageUrl && subItem.name) {
                        extractedImages.push(subItem);
                    }
                })
            })
        })
        return extractedImages;
    }, []);

    const handleOpen = (image: LocationItem) => {
        openWindow("imgfile", image);
    }

    console.log(images);
    const [activeTab, setActiveTab] = useState("All Photos");
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    }

    const filteredImages = useMemo(() => {
        return images.filter((image) => {
            return image.name.toLowerCase().includes(searchQuery.toLowerCase());
        })
    }, [images, searchQuery]);

    return (
        <div className="flex w-[700px] h-full flex-col bg-white">
            {/* macOS Photos Header */}
            <div id="window-header" className="relative flex items-center justify-between border-b border-gray-200/50 bg-[#f6f6f6]/95 px-4 py-2 backdrop-blur-md">
                <div className="flex items-center gap-6">
                    <WindowControls windowKey="photos" />
                </div>
                {/* macOS Segmented Control Tabs */}
                <div className="absolute left-1/2 flex -translate-x-1/2 rounded-lg bg-gray-200/50 p-0.5 mt-0.5">
                    {["Years", "Months", "Days", "All Photos"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-1 text-[11px] font-medium rounded-[6px] transition-all ${activeTab === tab
                                ? "bg-white shadow-sm text-gray-900"
                                : "text-gray-500 hover:text-gray-700"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <div className="flex items-center gap-4">
                    <div className="relative flex items-center">
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            className="h-6 w-44 rounded-md bg-gray-200/50 px-7 text-[12px] outline-none placeholder:text-gray-500 focus:bg-white focus:ring-1 focus:ring-blue-500"
                        />
                        <Image src="/icons/search.svg" alt="search" width={12} height={12} className="absolute left-2.5 opacity-50" />
                    </div>
                </div>
            </div>

            <div className="flex-1 overflow-auto bg-white px-6 py-8">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-8 flex items-end justify-between border-b border-gray-100 pb-4">
                        <div>
                            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">Photos</h1>
                            <p className="mt-1 text-sm font-medium text-gray-400">Personal Library</p>
                        </div>
                        <div className="flex items-center gap-3 text-sm font-semibold text-blue-500">
                            <button className="hover:opacity-70">Add Photos</button>
                            <div className="h-4 w-px bg-gray-200" />
                            <button className="hover:opacity-70">Select</button>
                        </div>
                    </div>

                    {filteredImages.length > 0 ? (
                        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                            {filteredImages.map((image) => (
                                <div
                                    key={image.imageUrl}
                                    onClick={() => handleOpen(image)}
                                    className="group relative aspect-square cursor-pointer overflow-hidden bg-gray-100 transition-transform active:scale-[0.98]"
                                >
                                    <Image
                                        src={image.imageUrl || ""}
                                        alt={image.name}
                                        fill
                                        className="object-cover transition-opacity group-hover:opacity-90"
                                    />
                                    <div className="absolute inset-0 ring-1 ring-inset ring-black/5" />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="flex h-64 flex-col items-center justify-center gap-2 text-gray-400">
                            <span className="text-5xl">🖼️</span>
                            <p className="text-base font-semibold">No Photos in {activeTab}</p>
                            <p className="text-xs">Try importing some memories!</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

const GalleryComponent = WindowWrapper("photos", Gallery);
export default GalleryComponent