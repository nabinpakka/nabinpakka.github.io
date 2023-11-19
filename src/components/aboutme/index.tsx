import React from 'react';
import { useEffect } from 'react';
import { activeSkillProgress } from '@app/utility';
export default function AboutMe() {
    useEffect(() => {
        window.addEventListener('scroll', activeSkillProgress);
    });
    return (
        <>
            <div className="ef-1" />
            <div className="ef-2" />
            <div className="container">
                <div className="about-me">
                    <div className="row align-items-start">
                        <div className="col-lg-7 pb-lg-0 py-5 pb-4">
                            <div className="section-heading">
                                <h3 className="bg-gradient-to-r from-blue-800 to-indigo-900 bg-clip-text text-transparent">
                                    <span className="">ABOUT ME</span>
                                </h3>
                            </div>
                            <div className="about-me-text">
                                <h3>
                                    I&apos;m <span className="">Nabin</span> and
                                </h3>
                                <h5 className="leading-[50px]">
                                    <span className="font-black">
                                        turning ideas into real life <span className="text-blue-400">products</span> is my calling.
                                    </span>
                                </h5>
                                <p className="">
                                    I&apos;m passionate about building fast, secure, and robust applications that improves the lives of those around me. I&apos;m a resourceful developer with more than two years of professional experience in Spring-boot, and Machine Learning. I&apos;m proficient in
                                    using different tools and languages to deliver robust and user-friendly web applications.
                                </p>
                                <div className="row mb-5 pt-2">
                                    <div className="col-auto">
                                        <div className="a-count">
                                            <span className="count">4+</span>
                                            <div className="a-count-text">
                                                Projects <br />
                                                Completed.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="a-count">
                                            <span className="count">5+</span>
                                            <div className="a-count-text">
                                                Juniors <br /> Trained.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="section-heading mt-5">
                                <h3 className="bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">
                                    <span>Work Experience</span>
                                </h3>
                            </div>
                            <div className="resume-box mb-5">
                                <ul>
                                    <li className="bg-gradient-to-r from-blue-50 to-cyan-50">
                                        <div className="icon overflow-hidden rounded-full">
                                            <img src="assets/img/ull.jpeg" alt="ULL" />
                                        </div>
                                        <span className="time">March 2023 - Present</span>
                                        <h5>Graduate Research Assistant - University of Louisiana at Lafayette</h5>
                                        <ul className="!list-disc">
                                            <li className="!mt-1 !border-none !bg-transparent !p-0">Modifying, developing, and memory mapping of ML/DL models for NSF project</li>
                                            <li className="!mt-1 !border-none !bg-transparent !p-0">Training and maintaining servers for ML/DL training.</li>
                                            <li className="!mt-1 !border-none !bg-transparent !p-0">Working as a system administrator for my lab.</li>
                                            <li className="!mt-1 !border-none !bg-transparent !p-0">Building dataset and knowledge graph for NEWS.</li>
                                        </ul>
                                    </li>
                                    <li className="bg-gradient-to-r from-blue-50 to-cyan-50">
                                        <div className="icon overflow-hidden rounded-full">
                                            <img src="assets/img/sireto_technology_logo.jpeg" alt="sireto" />
                                        </div>
                                        <span className="time">April 2021 - Dec 2022</span>
                                        <h5>Software Developer - Sireto Technology</h5>
                                        <ul className="!list-disc">
                                            <li className="!mt-1 !border-none !bg-transparent !p-0">Authored and maintained 4+ web applications for foreign clients and some in-house productions.</li>
                                            <li className="!mt-1 !border-none !bg-transparent !p-0">Designed and implemented database and microservices architecture for 2 web application.</li>
                                            <li className="!mt-1 !border-none !bg-transparent !p-0">Implemented CI/CD using Jenkins and Gitlab-ci.</li>
                                            <li className="!mt-1 !border-none !bg-transparent !p-0">Ensured that the backend functionality and security of the developed applications met at least 80% of users&apos; expectations.</li>
                                            <li className="!mt-1 !border-none !bg-transparent !p-0">Refactored and reverse engineered two existing projects to follow modern and maintainable architecture.</li>
                                            <li className="!mt-1 !border-none !bg-transparent !p-0">Cooperated with three foreign organizations&apos; teams to provide end-to-end solutions for clients.</li>
                                            <li className="!mt-1 !border-none !bg-transparent !p-0">Optimized the codebase, resulting in an increase in performance by 50%.</li>
                                        </ul>
                                    </li>
                                    <li className="bg-gradient-to-r from-blue-50 to-cyan-50">
                                        <div className="icon overflow-hidden rounded-full">
                                            <img src="assets/img/sireto_technology_logo.jpeg" alt="sireto" />
                                        </div>
                                        <span className="time">April 2020 - March 2021</span>
                                        <h5>Associate Software Developer - Sireto Technology</h5>
                                        <ul className="!list-disc">
                                            <li className="!mt-1 !border-none !bg-transparent !p-0">Developed a new backend version from legacy code for user assistant for Daimler.</li>
                                            <li className="!mt-1 !border-none !bg-transparent !p-0">Design and implement database for the new backend system.</li>
                                            <li className="!mt-1 !border-none !bg-transparent !p-0">Synchronized old database and new database to update data.</li>
                                            <li className="!mt-1 !border-none !bg-transparent !p-0">Deployment to client server through CI/CD using Jenkins.</li>
                                        </ul>
                                    </li>
                                    <li className="bg-gradient-to-r from-blue-50 to-cyan-50">
                                        <div className="icon overflow-hidden rounded-full">
                                            <img src="assets/img/sireto_technology_logo.jpeg" alt="sireto" />
                                        </div>
                                        <span className="time">Jun 2019 - Dec 2019</span>
                                        <h5>Software Developer Internship - Sireto Technology</h5>
                                        <ul className="!list-disc">
                                            <li className="!mt-1 !border-none !bg-transparent !p-0">
                                                Joined the team as a #4 employee as a developer intern, working directly with the team to analyze the project&apos;s source code to find functionality issues and learn techniques to handle them.
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <hr />
                            <div className="section-heading mt-5">
                                <h3 className="bg-gradient-to-r from-deep-purple-500 to-indigo-600 bg-clip-text text-transparent">
                                    <span>Education</span>
                                </h3>
                            </div>
                            <div className="resume-box mb-5">
                                <ul>
                                    <li className="bg-gradient-to-r from-green-50 to-teal-50">
                                        <div className="icon overflow-hidden rounded-full">
                                            <img src="assets/img/ull.jpeg" alt="lambton" />
                                        </div>
                                        <span className="time">2023 - Present</span>
                                        <h5>Graduate Degree in Computer Science</h5>
                                        <h6>University of Louisiana at Lafayette, LA, USA</h6>
                                    </li>
                                    <li className="bg-gradient-to-r from-orange-50 to-red-50">
                                        <div className="icon overflow-hidden rounded-full">
                                            <img src="assets/img/tu_logo.jpeg" alt="ants" />
                                        </div>
                                        <span className="time">2016 - 2021</span>
                                        <h5>Bachelor of Electronics and Communication Engineering</h5>
                                        <h6>Institute of Engineering, Thapathali Campus, Kathmandu, Nepal</h6>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-5 sticky-lg-top ps-xl-5 px-4 py-5 md:px-0">
                            <div className="row align-items-start about-content gap-3">
                                <div className="col-12">
                                    <div className="section-heading">
                                        <h3 className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                                            <span>SKILLS</span>
                                        </h3>
                                    </div>
                                    <div className="title-01 mb-0">
                                        <span>Proficient</span>
                                    </div>
                                    <div className="skills mb-4 flex flex-wrap items-center gap-2">
                                        <h6 className="inline-flex items-center rounded-md bg-[#F2E050] px-2 py-1 text-xs font-medium ring-1 ring-inset ring-[#F2E050]/10">Spring Boot</h6>
                                        <h6 className="inline-flex items-center rounded-md bg-[#F2E050] px-2 py-1 text-xs font-medium ring-1 ring-inset ring-[#F2E050]/10">Bash Scripting</h6>
                                        <h6 className="inline-flex items-center rounded-md bg-[#4475C0] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-[#4475C0]/10">React.js</h6>
                                        <h6 className="inline-flex items-center rounded-md bg-[#7745BC] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-[#7745BC]/10">React-Native</h6>
                                        <h6 className="inline-flex items-center rounded-md bg-[#7745BC] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-[#7745BC]/10">Flask Api</h6>
                                    </div>
                                    <div className="title-01 mb-0">
                                        <span>Languages</span>
                                    </div>
                                    <div className="skills mb-4 flex flex-wrap items-center gap-2">
                                        <h6 className="inline-flex items-center rounded-md bg-[#D93A32] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-[#D93A32]/10">Java</h6>
                                        <h6 className="inline-flex items-center rounded-md bg-[#4A77AB] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-[#4A77AB]/10">Python</h6>
                                        <h6 className="inline-flex items-center rounded-md bg-[#8A42A7] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-[#8A42A7]/10">Kotlin</h6>
                                        <h6 className="inline-flex items-center rounded-md bg-[#8A42A7] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-[#8A42A7]/10">Bash</h6>
                                        <h6 className="inline-flex items-center rounded-md bg-[#245696] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-[#245696]/10">JavaScript</h6>
                                        <h6 className="inline-flex items-center rounded-md bg-[#245696] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-[#245696]/10">C++</h6>
                                    </div>
                                    <div className="title-01 mb-0">
                                        <span>Web Technologies</span>
                                    </div>
                                    <div className="skills mb-4 flex flex-wrap items-center gap-2">
                                        <h6 className="inline-flex items-center rounded-md bg-[#F2E050] px-2 py-1 text-xs font-medium ring-1 ring-inset ring-[#F2E050]/10">Restful APIs</h6>
                                        <h6 className="inline-flex items-center rounded-md bg-[#4FACCA] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-[#4FACCA]/10">Tailwind</h6>
                                        <h6 className="inline-flex items-center rounded-md bg-[#4990F7] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-[#4990F7]/10">Material UI</h6>
                                        <h6 className="inline-flex items-center rounded-md bg-[#E45A61] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-[#E45A61]/10">Ant Design</h6>
                                        <h6 className="inline-flex items-center rounded-md bg-[#99CBEE] px-2 py-1 text-xs font-medium ring-1 ring-inset ring-[#99CBEE]/10">Webpack</h6>
                                        <h6 className="inline-flex items-center rounded-md bg-[#419285] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-[#419285]/10">Fast API</h6>
                                        <h6 className="inline-flex items-center rounded-md bg-[#CB5434] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-[#CB5434]/10">HTML</h6>
                                        <h6 className="inline-flex items-center rounded-md bg-[#2E49D5] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-[#2E49D5]/10">CSS</h6>
                                        <h6 className="inline-flex items-center rounded-md bg-[#ef4444] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-[#ef4444]/10">Server-side rendering (SSR)</h6>
                                    </div>
                                    <div className="title-01 mb-0">
                                        <span>Mobile Technologies</span>
                                    </div>
                                    <div className="skills mb-4 flex flex-wrap items-center gap-2">
                                        <h6 className="inline-flex items-center rounded-md bg-[#6EDB8C] px-2 py-1 text-xs font-medium ring-1 ring-inset ring-[#6EDB8C]/10">Android</h6>
                                        <h6 className="inline-flex items-center rounded-md bg-[#49A1CD] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-[#49A1CD]/10">React Native</h6>
                                        <h6 className="inline-flex items-center rounded-md bg-[#75C0EB] px-2 py-1 text-xs font-medium ring-1 ring-inset ring-[#75C0EB]/10">Flutter</h6>
                                    </div>
                                    <div className="title-01 mb-0">
                                        <span>Databases & tools</span>
                                    </div>
                                    <div className="skills mb-4 flex flex-wrap items-center gap-2">
                                        <h6 className="inline-flex items-center rounded-md bg-[#3E6389] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-[#3E6389]/10">PostgreSQL</h6>
                                        <h6 className="inline-flex items-center rounded-md bg-[#6BAD4E] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-[#6BAD4E]/10">MongoDB</h6>
                                        <h6 className="inline-flex items-center rounded-md bg-[#942821] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-[#942821]/10">MySQL</h6>
                                        <h6 className="inline-flex items-center rounded-md bg-[#942821] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-[#942821]/10">SPARQL</h6>
                                    </div>
                                    <div className="title-01 mb-0">
                                        <span>Others</span>
                                    </div>
                                    <div className="skills mb-4 flex flex-wrap items-center gap-2">
                                        <h6 className="inline-flex items-center rounded-md bg-[#D6593E] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-[#D6593E]/10">Git</h6>
                                        <h6 className="inline-flex items-center rounded-md bg-[#488FDF] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-[#488FDF]/10">Docker</h6>
                                        <h6 className="inline-flex items-center rounded-md bg-[#488FDF] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-[#D14E3E]/10">Test Driven Development</h6>
                                        <h6 className="inline-flex items-center rounded-md bg-[#fb7185] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-[#fb7185]/10">Design Patterns</h6>
                                        <h6 className="inline-flex items-center rounded-md bg-[#DA4539] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-[#DA4539]/10">Jenkins</h6>
                                        <h6 className="inline-flex items-center rounded-md bg-[#499EDF] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-[#499EDF]/10">Portainer</h6>
                                        <h6 className="inline-flex items-center rounded-md bg-[#121212] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-[#121212]/10">CI/CD</h6>
                                        <h6 className="inline-flex items-center rounded-md bg-[#121212] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-[#D14E3E]/10">Figma</h6>
                                        <h6 className="inline-flex items-center rounded-md bg-[#e879f9] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-[#e879f9]/10">Third party integrations</h6>
                                        <h6 className="inline-flex items-center rounded-md bg-[#a855f7] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-[#a855f7]/10">Code optimization</h6>
                                        <h6 className="inline-flex items-center rounded-md bg-[#06b6d4] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-[#06b6d4]/10">Clean code</h6>
                                        <h6 className="inline-flex items-center rounded-md bg-[#f59e0b] px-2 py-1 text-xs font-medium ring-1 ring-inset ring-[#f59e0b]/10">Code debugging</h6>
                                        <h6 className="inline-flex items-center rounded-md bg-[#F2E050] px-2 py-1 text-xs font-medium ring-1 ring-inset ring-[#F2E050]/10">Language integrated query (LINQ)</h6>
                                        <h6 className="inline-flex items-center rounded-md bg-[#88C0E0] px-2 py-1 text-xs font-medium ring-1 ring-inset ring-[#88C0E0]/10">Entity Framework</h6>
                                        <h6 className="inline-flex items-center rounded-md bg-[#D14E3E] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-[#D14E3E]/10">Google Maps</h6>
                                        <h6 className="inline-flex items-center rounded-md bg-[#673EA9] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-[#673EA9]/10">Google Forms</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
