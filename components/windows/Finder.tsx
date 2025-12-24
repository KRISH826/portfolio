"use client"
import { LocationItem, locations } from '@/data/data';
import WindowControls from '../WindowControls';
import WindowWrapper from '../WindowWrapper';
import { Search } from 'lucide-react';
import Image from 'next/image';
import useLocationStore from '@/store/location';
import clsx from 'clsx';
import useWindowStore from '@/store/window';

const Finder = () => {
    const { setActiveLocation, activeLocation } = useLocationStore();
    const { openWindow } = useWindowStore();

    const openItem = (item: LocationItem) => {
        if (item.kind === "folder") {
            setActiveLocation(item);
        }
        if (item.fileType === "pdf") {
            openWindow("resume");
        }
        if (item.fileType === "url" && item.href && ['fig', 'url'].includes(item.fileType)) {
            window.open(item.href, "_blank");
        }

        if (item.fileType === "txt") {
            openWindow('txtfile', item);
        }

        if (item.fileType === "img") {
            openWindow('imgfile', item);
        }
    }

    const renderItem = (items: LocationItem[]) => {
        return items.map((item) => {
            return (
                <li className={clsx(activeLocation.id === item.id && "bg-blue-100")} key={item.id} onClick={() => setActiveLocation(item)}>
                    <Image width={20} height={20} src={item.icon} alt={item.name} />
                    <p className='text-sm font-medium truncate'>{item.name}</p>
                </li>
            )
        })
    }
    return (
        <>
            <div id='window-header'>
                <WindowControls windowKey="finder" />
                <Search className="icon" />
            </div>
            <div className='bg-white flex h-full'>
                <div className="sidebar">
                    <div>
                        <h3>Favourites</h3>
                        <ul>
                            {
                                renderItem(Object.values(locations))
                            }
                        </ul>
                    </div>
                    <div>
                        <h3>Works</h3>
                        <ul>
                            {
                                renderItem(locations.work.children || [])
                            }
                        </ul>
                    </div>
                </div>
                <ul className='content'>
                    {
                        activeLocation.children?.map((item) => (
                            <li key={item.id} className={item.position} onClick={() => openItem(item)}>
                                <Image width={100} height={100} src={item.icon} alt={item.name} />
                                <p className='text-sm font-medium truncate'>{item.name}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

const FinderComponent = WindowWrapper("finder", Finder);
export default FinderComponent;