import { ChevronLeft, ChevronRight, Copy, PanelLeft, Plus, Search, Share, ShieldHalf } from 'lucide-react';
import WindowControls from '../WindowControls';
import WindowWrapper from '../WindowWrapper';

const Safari = () => {
    console.log("Safari component rendering attempt");
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
            <div className='bg-white h-full overflow-y-auto no-scrollbar'>
                <div className='max-w-4xl mx-auto p-10 space-y-12'>

                    {/* Experience Section */}
                    <div className='space-y-8'>
                        <div className='group'>
                            <div className='flex justify-between items-baseline mb-2'>
                                <h2 className='text-3xl font-bold text-gray-900'>SentientGeeks</h2>
                                <span className='text-base font-semibold text-gray-900'>Jan 2021 - Present</span>
                            </div>
                            <h3 className='text-xl italic font-medium text-gray-700 mb-4'>UI Developer and Frontend Engineer</h3>
                            <ul className='space-y-2 text-gray-800 leading-relaxed list-disc list-outside ml-5 marker:text-gray-900'>
                                <li>Led end-to-end UI/UX development for high-traffic web applications using Angular, React (with TypeScript), and Next.js, including UI design, from wireframing to frontend implementation.</li>
                                <li>Architected scalable, component-driven interfaces with Tailwind CSS and Chakra UI, reducing development cycles by 15% and increasing conversion metrics by 20%.</li>
                                <li>Conducted user research, usability testing, and A/B testing while collaborating with cross-functional teams to deliver pixel-perfect, responsive designs.</li>
                                <li>Spearheaded migration from legacy codebase to modern React framework, reducing technical debt, improving maintainability, and streamlining debugging processes.</li>
                                <li>Designed and refined fully responsive web interfaces with CSS3, following accessibility and performance best practices, ensuring flawless user experiences across all devices.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className='pt-10 border-t border-gray-100 flex justify-center text-gray-400 text-sm'>
                        <p>© 2025 Krishnendu Sekhar Panja. Designed with <span className='text-red-400'>♥</span> in Next.js</p>
                    </div>

                </div>
            </div>
        </>
    )
}

const SafariWindow = WindowWrapper("safari", Safari);

export default SafariWindow