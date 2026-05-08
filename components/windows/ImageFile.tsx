"use client"
import WindowWrapper from '../WindowWrapper';
import WindowControls from '../WindowControls';
import { LocationItem } from '@/data/data';
import Image from 'next/image';

const ImageFile = ({ data }: { data?: LocationItem | null }) => {
    if (!data) return (
        <>
            <div id="window-header">
                <WindowControls windowKey="imgfile" />
                <h2>Error</h2>
            </div>
            <div className='bg-red-100 p-5'>
                <p className='text-red-500'>No data found for this file.</p>
            </div>
        </>
    );

    const { name, imageUrl } = data;

    return (
        <>
            <div id="window-header">
                <WindowControls windowKey="imgfile" />
                <h2>{name}</h2>
            </div>
            <div className='bg-white p-4'>
                {imageUrl && (
                    <Image
                        src={imageUrl}
                        alt={name}
                        width={600}
                        height={400}
                        className='w-full max-h-[70vh] object-contain rounded-md'
                    />
                )}
            </div>
        </>
    )
}

const ImageFileWindow = WindowWrapper("imgfile", ImageFile);

export default ImageFileWindow
