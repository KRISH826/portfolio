"use client"
import { navIcons, navLinks } from '@/data/data'
import useWindowStore from '@/store/window'
import dayjs from 'dayjs'
import Image from 'next/image'

const Navbar = () => {
    const openWindow = useWindowStore((state) => state.openWindow);
    return (
        <nav>
            <div>
                <Image src="/images/logo.svg" alt="logo" width={14} height={17} />
                <p className='font-semibold'>Krishnendu&apos;s Portfolio</p>
                <ul>
                    {navLinks.map(({ name, id, type }) => (
                        <li key={id}>
                            <span className='cursor-pointe' onClick={() => openWindow(type)}>{name}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                {
                    navIcons.map((item) => (
                        <Image key={item.id} src={item.img} alt={item.id.toString()} className='icon-hover cursor-pointer' width={16} height={16} />
                    ))
                }
                <time className='font-normal!'>{dayjs().format('ddd MMM D h:mm A')}</time>
            </div>
        </nav>
    )
}

export default Navbar