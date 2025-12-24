import { ChevronLeft, ChevronRight, Copy, PanelLeft, Plus, Search, Share, ShieldHalf } from 'lucide-react';
import WindowControls from '../WindowControls';
import WindowWrapper from '../WindowWrapper';

const Safari = () => {
    return (
        <>
            <div id='window-header'>
                <WindowControls windowKey="safari" />
                <PanelLeft className='ml-10 icon' />
                <div className='flex items-center ml-5 gap-2'>
                    <ChevronLeft className='icon' />
                    <ChevronRight className='icon' />
                </div>
                <div className='flex-1 flex-center gap-3'>
                    <ShieldHalf className='icon' />
                    <div className='search'>
                        <Search className='icon' />
                        <input type="text" placeholder='Search or enter website name' className='flex-1 focus:outline-0' />
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Share className='icon' />
                    <Plus className='icon' />
                    <Copy className='icon' />
                </div>
            </div>
            <div className='bg-white p-4'>
                <div>
                    <h2 className='text-2xl font-bold text-blue-500'>My Experiences</h2>
                </div>
            </div>
        </>
    )
}

const SafariWindow = WindowWrapper("safari", Safari);

export default SafariWindow