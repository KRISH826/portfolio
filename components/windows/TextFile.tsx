"use client"
import WindowWrapper from '../WindowWrapper';
import WindowControls from '../WindowControls';
import { LocationItem } from '@/data/data';
import useWindowStore from '@/store/window';
import Image from 'next/image';

const TextFile = () => {
    const { window } = useWindowStore();
    const data = window.txtfile.data as LocationItem | null;

    if (!data) return null;

    const { name, description, image, subtitle } = data;

    return (
        <>
            <div id="window-header">
                <WindowControls windowKey="txtfile" />
                <h2>{name}</h2>
            </div>
            <div className='space-y-5 bg-white p-5'>
                {
                    image && (
                        <div className='flex items-center gap-2'>
                            <Image src={image} alt={name} width={500} height={500} className='w-full h-64 object-cover rounded-md' />
                        </div>
                    )
                }
                {
                    subtitle && (
                        <h2 className='text-lg text-left font-medium'>{subtitle}</h2>
                    )
                }
                <div className='text-left'>
                    {description}
                </div>
            </div>
        </>
    )
}

const TextFileWindow = WindowWrapper("txtfile", TextFile);

export default TextFileWindow