import { TextAnimation } from "./TextAnimation";
import { Image } from "./Image";
import imageSource from '../../assets/typing.png';

export interface AboutMeProps {

}

export const AboutMe = ({

}: AboutMeProps) => {
    const dataId = 'about-me';
    const aboutMeImg = {
        "resource": 'typing.png',
        "alt": "About me image"
    }

    const listFormat = "list-disc list-inside space-y-1 text-gray-300"

    return (
        <div
            data-id={dataId}
            className={`flex flex-col-reverse lg:flex-row justify-center items-center ease-in-out transition-opacity duration-1000 `
            }
        >
            {/* image */}
            <div
                className={`flex-[1]`}
                data-id={`${dataId}-image`}
            >
                <Image image={aboutMeImg} fit={'object-contain'} />
            </div>

            {/* text */}
            <div
                data-id={`${dataId}-text`}
                className={`flex-[1] lg:text-start 
                    text-center pl-5 pr-5 lg:pl-5 lg:pr-10`}
            >
                <div data-id={`${dataId}-summary`}>
                    <p data-id="subject-header">Software Engineer</p>
                    <div>
                        I'm a
                        <TextAnimation text="software engineer" animation='appearSlide' />
                        with a passion for building projects. I love to learn new things and work
                        on challenging projects.
                    </div>
                </div>

                <div data-id={`${dataId}-skills`}>
                    <p data-id="subject-header">What am I good at?</p>
                    <div>
                        I strongly believe software engineers should be able to work on
                        <TextAnimation text="any part of a project" animation='appearSlide' />
                        , but I have a few areas of expertise:
                        <ul
                            data-id={`${dataId}-skills-list`}
                            className="pl-4 sm:pl-6 mt-3 space-y-2 text-sm sm:text-base list-outside"
                        >
                            <li>
                                <strong className="block mb-1 text-base sm:text-lg">Full-Stack Development</strong>
                                <ul className="list-disc list-inside space-y-1 text-gray-300">
                                    <li>Built and deployed end-to-end applications</li>
                                    <li>Comfortable working across both front-end and back-end</li>
                                </ul>
                            </li>

                            <li>
                                <strong>Languages</strong>
                                <ul className={listFormat}>
                                    <li>JavaScript</li>
                                    <li>TypeScript</li>
                                    <li>Python</li>
                                    <li>SQL</li>
                                </ul>
                            </li>

                            <li>
                                <strong>Front-End</strong>
                                <ul className={listFormat}>
                                    <li>React (custom components, hooks, state management)</li>
                                    <li>Responsive and accessible UI design</li>
                                    <li>Figma for design collaboration</li>
                                </ul>
                            </li>

                            <li><strong>Back-End</strong>
                                <ul className={listFormat}>
                                    <li>Python with Flask</li>
                                    <li>RESTful API design and integration</li>
                                    <li>Basic data modeling and SQL queries</li>
                                </ul>
                            </li>

                            <li><strong>Tooling & Workflow</strong>
                                <ul className={listFormat}>
                                    <li>Git & GitHub for version control</li>
                                    <li>Agile development practices</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div data-id={`${dataId}-personal-summary`}>
                    <p data-id="subject-header">Beyond the code.</p>
                    <div>
                        I'm a
                        <TextAnimation text="nerd" animation='appearSlide' />
                        at heart. When I'm not coding, I'm usually playing video games, taking care of my growing collection of house plants, or trying to get some coffee.
                    </div>
                </div>
            </div>
        </div>
    );
};
