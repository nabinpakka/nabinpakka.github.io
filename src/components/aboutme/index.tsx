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
                                        I turn ideas into deployable <span className="text-blue-400">products</span>.
                                    </span>
                                </h5>
                                <p className="">
                                    I bridge the gap between applied machine learning and robust software engineering. With more than two years of experience in Spring Boot backend development and machine learning research,
                                    I bring both academic rigor and industry practicality. I build intelligent, secure,
                                    and scalable systems—ranging from ML-powered applications to enterprise-grade microservices—that deliver real-world impact.
                                </p>
                                <div className="row mb-5 pt-2">
                                    <div className="col-auto">
                                        <div className="a-count">
                                            <span className="count">6+</span>
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
                                        <span className="time">May 2023 - Present</span>
                                        <h5>Graduate Research Assistant - University of Louisiana at Lafayette</h5>
                                        <ul className="!list-disc">
                                            <li className="!mt-1 !border-none !bg-transparent !p-0">Refining the traffic light control algorithm to effectively maximize throughput by leveraging frame prediction.</li>
                                            <li className="!mt-1 !border-none !bg-transparent !p-0">Optimized CBAM-ConvNeXt to have 40% fewer parameters, achieving 97% foliage disease classification accuracy.</li>
                                            <li className="!mt-1 !border-none !bg-transparent !p-0">Developed a framework to generate diseased foliage datasets with customizable disease rate, boosting performance by
                                                5%+ when pretrained on the generated and fine-tuned on natural datasets compared to training on natural alone.</li>
                                            <li className="!mt-1 !border-none !bg-transparent !p-0">Supervised undergraduate students during an ML summer bootcamp, guiding their research projects to completion.</li>
                                            <li className="!mt-1 !border-none !bg-transparent !p-0">Peer Reviewer for Computers and Electronics in Agriculture (Elsevier) and Frontiers in Plant Science.</li>
                                            <li className="!mt-1 !border-none !bg-transparent !p-0">Improved the performance of an online scheduling algorithm for deep learning training by 50% through algorithmic
                                                redesign and distributed training.</li>
                                            <li className="!mt-1 !border-none !bg-transparent !p-0">Engineered a hybrid BERT-Graph model by integrating graph-based and LLM architectures over a news knowledge
                                                graph, achieving 71% accuracy in news topic classification.</li>
                                            <li className="!mt-1 !border-none !bg-transparent !p-0"> Evaluated memory footprints of ML models on a heterogeneous GPU cluster to design an optimized scheduling strategy
                                                for efficient resource utilization, reducing batch training time by 30%.</li>
                                            <li className="!mt-1 !border-none !bg-transparent !p-0">Managed HPC infrastructure for ML/DL workloads on NVIDIA Titan RTX, RTX 3090, and RTX 6000 Ada GPUs.</li>
                                        </ul>
                                    </li>
                                    <li className="bg-gradient-to-r from-blue-50 to-cyan-50">
                                        <div className="icon overflow-hidden rounded-full">
                                            <img src="assets/img/ull.jpeg" alt="ULL" />
                                        </div>
                                        <span className="time">Jan. 2023 - Apr. 2023</span>
                                        <h5>Graduate Teaching Assistant - University of Louisiana at Lafayette</h5>
                                        <ul className="!list-disc">
                                            <li className="!mt-1 !border-none !bg-transparent !p-0">Mentored and supported 50+ students in completing semester-long projects on relational databases and SQL.</li>
                                            <li className="!mt-1 !border-none !bg-transparent !p-0">Assessed assignments and projects; delivered personalized, actionable feedback to enhance student learning.</li>
                                            <li className="!mt-1 !border-none !bg-transparent !p-0">Collaborated with professor to design assessments, prepare instructional materials, and deliver classroom sessions.
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="bg-gradient-to-r from-blue-50 to-cyan-50">
                                        <div className="icon overflow-hidden rounded-full">
                                            <img src="assets/img/sireto_technology_logo.jpeg" alt="sireto" />
                                        </div>
                                        <span className="time">Apr. 2019 - Dec. 2022</span>
                                        <h5>Software Developer - Sireto Technology</h5>
                                        <ul className="!list-disc">
                                            <li className="!mt-1 !border-none !bg-transparent !p-0">Collaborated with designers, developers, clients, and project managers to deliver on time high-quality product, boosting
                                                client satisfaction by 30% via regular code reviews, sprint planning, on-call support, design reviews, and bug tracking.</li>
                                            <li className="!mt-1 !border-none !bg-transparent !p-0">Designed secure schemas and optimized sensitive data handling with normalization, caching, and encryption-at-rest.</li>
                                            <li className="!mt-1 !border-none !bg-transparent !p-0">Set up CI/CD pipelines to automate testing and deployment, cutting manual effort by 40% and ensuring high quality.</li>
                                            <li className="!mt-1 !border-none !bg-transparent !p-0">Led backend security and system design using Zuul as a proxy server, ensuring the integrity and availability of critical
                                                financial web applications under sustained high traffic loads.</li>
                                            <li className="!mt-1 !border-none !bg-transparent !p-0">Spearheaded migration of two legacy codebases from Java to Kotlin, accelerating overall development speed by 50%.</li>
                                            <li className="!mt-1 !border-none !bg-transparent !p-0">Developed a machine learning enhanced real-time network intrusion detection system for Linux servers.</li>
                                            <li className="!mt-1 !border-none !bg-transparent !p-0">Learned cryptographic algorithms and security vulnerabilities in Ethereum smart contracts written in Solidity.</li>
                                        </ul>
                                    </li>
                                    {/*<li className="bg-gradient-to-r from-blue-50 to-cyan-50">*/}
                                    {/*    <div className="icon overflow-hidden rounded-full">*/}
                                    {/*        <img src="assets/img/sireto_technology_logo.jpeg" alt="sireto" />*/}
                                    {/*    </div>*/}
                                    {/*    <span className="time">April 2020 - March 2021</span>*/}
                                    {/*    <h5>Associate Software Developer - Sireto Technology</h5>*/}
                                    {/*    <ul className="!list-disc">*/}
                                    {/*        <li className="!mt-1 !border-none !bg-transparent !p-0">Developed a new backend version from legacy code for user assistant for Daimler.</li>*/}
                                    {/*        <li className="!mt-1 !border-none !bg-transparent !p-0">Design and implement database for the new backend system.</li>*/}
                                    {/*        <li className="!mt-1 !border-none !bg-transparent !p-0">Synchronized old database and new database to update data.</li>*/}
                                    {/*        <li className="!mt-1 !border-none !bg-transparent !p-0">Deployment to client server through CI/CD using Jenkins.</li>*/}
                                    {/*    </ul>*/}
                                    {/*</li>*/}
                                    {/*<li className="bg-gradient-to-r from-blue-50 to-cyan-50">*/}
                                    {/*    <div className="icon overflow-hidden rounded-full">*/}
                                    {/*        <img src="assets/img/sireto_technology_logo.jpeg" alt="sireto" />*/}
                                    {/*    </div>*/}
                                    {/*    <span className="time">Jun 2019 - Dec 2019</span>*/}
                                    {/*    <h5>Software Developer Internship - Sireto Technology</h5>*/}
                                    {/*    <ul className="!list-disc">*/}
                                    {/*        <li className="!mt-1 !border-none !bg-transparent !p-0">*/}
                                    {/*            Joined the team as a #4 employee as a developer intern, working directly with the team to analyze the project&apos;s source code to find functionality issues and learn techniques to handle them.*/}
                                    {/*        </li>*/}
                                    {/*    </ul>*/}
                                    {/*</li>*/}
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
                                            <span>PUBLICATIONS</span>
                                        </h3>
                                    </div>
                                    <div className="col-12">
                                        <ul>
                                            <li>Pakka, N., Chen, L., & Tzeng, N. F. (2025). Foliagen: Framework for Foliage Image Generation from Individual Crop
                                                Leaf Images. [under review]</li>
                                            <li>
                                                Pakka, N., Chen, L., & Tzeng, N. F. (2025). Soybean disease classification by ConvNeXt with regional simplified
                                                attention.
                                            </li>
                                            <li>
                                                Sultana, A., Pakka, N., Xu, F., Yuan, X., Chen, L., & Tzeng, N. F. (2025). Resource Heterogeneity-Aware and
                                                Utilization-Enhanced Scheduling for Deep Learning Clusters.
                                            </li>
                                            <li>
                                                Zhang, Y., Pakka, N., & Tzeng, N. F. (2024). Knowledge Bases in Support of Large Language Models for Processing
                                                Web News.
                                            </li>
                                            <li>
                                                Chataut, S., Dangi, N., Pakka, N., Nepal, N., & Rauniyar, K. (2024). Generative AI-Driven Automated News Content
                                                Generation: Integrating Web Scraping, Media Creation, and Social Media Optimization.
                                            </li>
                                            <li>
                                                Pakka, N., Rauniyar, K., Dangal, S., & Chaulagain, R. (2023). Evaluation of network intrusion detection with feature
                                                selection using Random Forest and Deep Neural Network. KEC Journal of Science and Engineering, 7(1).
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="section-heading mt-8">
                                        <h3 className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                                            <span>SKILLS</span>
                                        </h3>
                                    </div>
                                    <div className="title-01 mb-0">
                                        <span>Proficient</span>
                                    </div>
                                    <div className="skills mb-4 flex flex-wrap items-center gap-2">
                                        <h6 className="inline-flex items-center rounded-md bg-[#419285] px-2 py-1 text-xs font-medium ring-1 ring-inset ring-[#F2E050]/10">Pytorch</h6>
                                        <h6 className="inline-flex items-center rounded-md bg-[#99CBEE] px-2 py-1 text-xs font-medium ring-1 ring-inset ring-[#F2E050]/10">Tensorflow</h6>
                                        <h6 className="inline-flex items-center rounded-md bg-[#945696] px-2 py-1 text-xs font-medium ring-1 ring-inset ring-[#F2E050]/10">PaddlePaddle</h6>
                                        <h6 className="inline-flex items-center rounded-md bg-[#418265] px-2 py-1 text-xs font-medium ring-1 ring-inset ring-[#F2E050]/10">Spring Boot</h6>
                                        <h6 className="inline-flex items-center rounded-md bg-[#F2E050] px-2 py-1 text-xs font-medium ring-1 ring-inset ring-[#F2E050]/10">Bash Scripting</h6>
                                        <h6 className="inline-flex items-center rounded-md bg-[#4475C0] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-[#4475C0]/10">React.js</h6>
                                        <h6 className="inline-flex items-center rounded-md bg-[#7745BC] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-[#7745BC]/10">React-Native</h6>
                                        <h6 className="inline-flex items-center rounded-md bg-[#278587] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-[#7745BC]/10">Flask Api</h6>
                                    </div>
                                    <div className="title-01 mb-0">
                                        <span>Languages</span>
                                    </div>
                                    <div className="skills mb-4 flex flex-wrap items-center gap-2">
                                        <h6 className="inline-flex items-center rounded-md bg-[#D93A32] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-[#D93A32]/10">Python</h6>
                                        <h6 className="inline-flex items-center rounded-md bg-[#4A77AB] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-[#4A77AB]/10">Java</h6>
                                        <h6 className="inline-flex items-center rounded-md bg-[#8A42A7] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-[#8A42A7]/10">Kotlin</h6>
                                        <h6 className="inline-flex items-center rounded-md bg-[#8A42A7] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-[#8A42A7]/10">Bash</h6>
                                        <h6 className="inline-flex items-center rounded-md bg-[#245696] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-[#245696]/10">JavaScript</h6>
                                        <h6 className="inline-flex items-center rounded-md bg-[#245696] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-[#245696]/10">C++</h6>
                                    </div>
                                    <div className="title-01 mb-0">
                                        <span>ML LIBRARIES</span>
                                    </div>
                                    <div className="skills mb-4 flex flex-wrap items-center gap-2">
                                        <h6 className="inline-flex items-center rounded-md bg-[#F2E050] px-2 py-1 text-xs font-medium ring-1 ring-inset ring-[#F2E050]/10">Numpy</h6>
                                        <h6 className="inline-flex items-center rounded-md bg-[#419285] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-[#419285]/10">Keras</h6>
                                        <h6 className="inline-flex items-center rounded-md bg-[#ef4444] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-[#ef4444]/10">OpenCV</h6>
                                        <h6 className="inline-flex items-center rounded-md bg-[#2E49D5] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-[#2E49D5]/10">Seaborn</h6>
                                        <h6 className="inline-flex items-center rounded-md bg-[#4990F7] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-[#4990F7]/10">Scikit-learn</h6>
                                        <h6 className="inline-flex items-center rounded-md bg-[#99CBEE] px-2 py-1 text-xs font-medium ring-1 ring-inset ring-[#99CBEE]/10">Hugging Face</h6>
                                        <h6 className="inline-flex items-center rounded-md bg-[#CB5434] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-[#CB5434]/10">XGBoost</h6>
                                        <h6 className="inline-flex items-center rounded-md bg-[#4FACCA] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-[#4FACCA]/10">Pandas</h6>
                                        <h6 className="inline-flex items-center rounded-md bg-[#E45A61] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-[#E45A61]/10">Matplotlib</h6>
                                        <h6 className="inline-flex items-center rounded-md bg-[#ef4444] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-[#ef4444]/10">NLTK</h6>
                                        <h6 className="inline-flex items-center rounded-md bg-[#ef4444] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-[#ef4444]/10">ONNX</h6>

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
                                        <h6 className="inline-flex items-center rounded-md bg-[#948821] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-[#942821]/10">SPARQL</h6>
                                        <h6 className="inline-flex items-center rounded-md bg-[#3E6389] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-[#3E6389]/10">Firebase</h6>
                                        <h6 className="inline-flex items-center rounded-md bg-[#121212] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-[#121212]/10">Redis</h6>
                                        <h6 className="inline-flex items-center rounded-md bg-[#82A212] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-[#121212]/10">Neo4j</h6>

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
