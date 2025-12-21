import { navIcons } from '@/data/data'
import dayjs from 'dayjs'
import Image from 'next/image'
import Link from 'next/link'

const navList = [
    {
        name: 'Home',
        href: '/'
    },
    {
        name: 'Portfolio',
        href: '/portfolio'
    },
    {
        name: 'Contact',
        href: '/contact'
    }
]

const Navbar = () => {
    return (
        <nav>
            <div>
                <Image src="/images/logo.svg" alt="logo" width={14} height={17} />
                <p className='font-semibold'>Krishnendu&apos;s Portfolio</p>
                <ul>
                    {navList.map((item) => (
                        <li key={item.name}>
                            <Link href={item.href}>{item.name}</Link>
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