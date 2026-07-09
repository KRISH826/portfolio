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
            <div className='bg-white flex-1 min-h-0 max-h-[calc(100dvh-9rem)] overflow-y-auto no-scrollbar'>
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
                                <li>Boosted user engagement by 80% by leading end-to-end UI/UX development for high-traffic web applications using Angular, React (TypeScript), and Next.js, improving usability by 90% through user research and cross-functional collaboration.</li>
                                <li>Designed component-driven, scalable interfaces with Tailwind CSS and Chakra UI, cutting development cycles by 15% and increasing conversion metrics by 20%.</li>
                                <li>Orchestrated migration from a legacy codebase to React 18, eliminating 30% of legacy code and boosting maintainability by 25%.</li>
                                <li>Created WCAG 2.1-compliant, fully responsive interfaces following accessibility and performance best practices, reducing mobile bounce rates by 12%.</li>
                                <li>Developed REST APIs with Node.js and Express, improving API response times by 20%.</li>
                                <li>Conducted user research and usability testing, boosting collaboration efficiency by 95% while delivering pixel-perfect, responsive designs.</li>
                                <li>Collaborated on AWS cloud deployments, achieving 90% uptime and 75% scalability improvements.</li>
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
