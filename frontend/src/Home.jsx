import React, { useState, useEffect } from 'react';
import './style.css';
import {
    Github,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Download,
    Code2,
    User,
    Briefcase,
    GraduationCap,
    Globe,
    Languages
} from 'lucide-react';

const Portfolio = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll effects
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(id);
        }
    };

    const navItems = [
        { id: 'home', label: 'Home', icon: <User size={18} /> },
        { id: 'skills', label: 'Skills', icon: <Code2 size={18} /> },
        { id: 'experience', label: 'History', icon: <Briefcase size={18} /> },
        { id: 'education', label: 'Education', icon: <GraduationCap size={18} /> },
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-teal-500/30">
            {/* Background Gradient Orbs - Nordic Aurora Theme */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-teal-600/20 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px]"></div>
            </div>

            {/* Navigation */}
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800' : 'bg-transparent'}`}>
                <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="text-xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                        JM.
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollTo(item.id)}
                                className={`flex items-center space-x-2 text-sm font-medium transition-colors ${
                                    activeSection === item.id ? 'text-teal-400' : 'text-slate-400 hover:text-white'
                                }`}
                            >
                                <span>{item.label}</span>
                            </button>
                        ))}
                    </div>

                    {/* Mobile Nav Toggle */}
                    <div className="md:hidden">
                        <button className="text-slate-300">Menu</button>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-20 space-y-32">

                {/* Hero Section */}
                <section id="home" className="min-h-[80vh] flex flex-col justify-center animate-fade-in-up">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-900/30 border border-teal-800 text-teal-300 text-xs font-semibold tracking-wide uppercase">
                                Available for work
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                                Hi, I'm <span className="text-white">Jari Mol</span>
                                <span className="block text-3xl md:text-4xl mt-2 text-slate-400 font-normal">Web Developer</span>
                            </h1>
                            <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
                                Dedicated web developer tailored for front-end and back-end technologies.
                                Passionate about continuous learning and creating innovative, user-friendly solutions.
                            </p>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <button
                                    onClick={() => scrollTo('contact')}
                                    className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-medium transition-all shadow-lg shadow-teal-500/20 flex items-center space-x-2"
                                >
                                    <Mail size={18} />
                                    <span>Contact Me</span>
                                </button>
                                <button className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg font-medium transition-all flex items-center space-x-2">
                                    <Download size={18} />
                                    <span>Resume</span>
                                </button>
                            </div>

                            <div className="flex items-center space-x-6 pt-4 text-slate-500">
                                <a href="#" className="hover:text-teal-400 transition-colors"><Github size={24} /></a>
                                <a href="#" className="hover:text-teal-400 transition-colors"><Linkedin size={24} /></a>
                            </div>
                        </div>

                        {/* Glass Card Profile Stats */}
                        <div className="relative">
                            <div className="relative bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-8 shadow-2xl">
                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="p-3 bg-teal-500/10 rounded-lg text-teal-400">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-medium">Location</h3>
                                            <p className="text-slate-400">Veldhoven, Netherlands</p>
                                            <p className="text-xs text-slate-500 mt-1">Hoogepat 54, 5502HD</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-medium">Phone</h3>
                                            <p className="text-slate-400">06 12443024</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="p-3 bg-sky-500/10 rounded-lg text-sky-400">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-medium">Email</h3>
                                            <p className="text-slate-400">jmol577@hotmail.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                                            <User size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-medium">Personal Details</h3>
                                            <p className="text-slate-400">Nationality: Dutch</p>
                                            <p className="text-slate-500 text-sm">Born: 28/11/2006</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section id="skills" className="scroll-mt-24">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Technical Skills</h2>
                        <div className="h-1 w-20 bg-teal-500 rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <SkillCard
                            title="HTML"
                            level="Skillful"
                            icon={<Globe className="text-orange-500" />}
                            progress={90}
                        />
                        <SkillCard
                            title="CSS"
                            level="Skillful"
                            icon={<Code2 className="text-blue-500" />}
                            progress={85}
                        />
                        <SkillCard
                            title="JavaScript"
                            level="Beginner"
                            icon={<Code2 className="text-yellow-400" />}
                            progress={40}
                        />
                        <SkillCard
                            title="WordPress"
                            level="Experienced"
                            icon={<Globe className="text-blue-400" />}
                            progress={75}
                        />
                        <SkillCard
                            title="C#"
                            level="Beginner"
                            icon={<Code2 className="text-purple-500" />}
                            progress={30}
                        />
                    </div>

                    <div className="mt-12">
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
                            <Languages className="text-teal-400" />
                            <span>Languages</span>
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-slate-900/50 border border-slate-800 p-4 rounded-xl flex justify-between items-center">
                                <span className="font-medium text-white">Dutch</span>
                                <span className="px-3 py-1 bg-teal-500/10 text-teal-400 rounded-full text-sm">Native Speaker</span>
                            </div>
                            <div className="bg-slate-900/50 border border-slate-800 p-4 rounded-xl flex justify-between items-center">
                                <span className="font-medium text-white">English</span>
                                <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm">Very Good Command</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Experience & Education Grid */}
                <div className="grid lg:grid-cols-2 gap-12">

                    {/* History Section */}
                    <section id="experience" className="scroll-mt-24">
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold text-white mb-4 flex items-center space-x-3">
                                <Briefcase className="text-cyan-400" />
                                <span>Employment History</span>
                            </h2>
                        </div>

                        <div className="relative border-l border-slate-800 ml-3 space-y-8">
                            <TimelineItem
                                date="Jan 2023 — Present"
                                title="Evening Operations"
                                subtitle="Seabourne Logistics, Eindhoven"
                                description="Managing logistics and operational tasks efficiently during evening shifts."
                                current
                            />
                        </div>
                    </section>

                    {/* Education Section */}
                    <section id="education" className="scroll-mt-24">
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold text-white mb-4 flex items-center space-x-3">
                                <GraduationCap className="text-teal-400" />
                                <span>Education</span>
                            </h2>
                        </div>

                        <div className="relative border-l border-slate-800 ml-3 space-y-8">
                            <TimelineItem
                                date="Aug 2022 — Present"
                                title="SintLucas, Eindhoven"
                                subtitle="Web Development"
                                description="Currently studying at SintLucas, focusing on modern web development practices and technologies."
                                current
                            />
                            <TimelineItem
                                date="Aug 2018 — May 2022"
                                title="VMBO-GT, Yuverta"
                                subtitle="Secondary Education"
                                description="Completed secondary education with a focus on general theoretical learning."
                            />
                        </div>
                    </section>
                </div>

                {/* Footer */}
                <footer id="contact" className="border-t border-slate-800 pt-12 text-center">
                    <h2 className="text-2xl font-bold text-white mb-6">Let's Work Together</h2>
                    <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                        I am currently pursuing studies but am eager to contribute technical expertise to dynamic projects.
                    </p>
                    <a
                        href="mailto:jmol577@hotmail.com"
                        className="inline-flex items-center space-x-2 text-teal-400 hover:text-teal-300 font-medium text-lg transition-colors"
                    >
                        <Mail />
                        <span>jmol577@hotmail.com</span>
                    </a>
                    <div className="mt-12 text-slate-600 text-sm pb-8">
                        © {new Date().getFullYear()} Jari Mol. All rights reserved.
                    </div>
                </footer>

            </main>
        </div>
    );
};

// Sub-components for cleaner code

const SkillCard = ({ title, level, icon, progress }) => (
    <div className="group bg-slate-900/50 hover:bg-slate-800/60 border border-slate-800 hover:border-teal-500/30 transition-all duration-300 p-6 rounded-xl">
        <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-slate-950 rounded-lg group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider bg-slate-950 px-2 py-1 rounded">
        {level}
      </span>
        </div>
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden">
            <div
                className="h-full bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    </div>
);

const TimelineItem = ({ date, title, subtitle, description, current }) => (
    <div className="ml-8 relative">
        <div className={`absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-slate-950 ${current ? 'bg-teal-500 shadow-[0_0_15px_rgba(20,184,166,0.5)]' : 'bg-slate-700'}`}></div>
        <span className="text-xs font-semibold text-teal-400 mb-1 block uppercase tracking-wider">{date}</span>
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <h4 className="text-slate-400 font-medium mb-2">{subtitle}</h4>
        <p className="text-slate-500 leading-relaxed text-sm">
            {description}
        </p>
    </div>
);

export default Portfolio;