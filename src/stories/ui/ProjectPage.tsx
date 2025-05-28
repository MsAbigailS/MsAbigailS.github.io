
import type { Project } from '../../types/project';
import { useNavigate } from 'react-router-dom'
import { Image } from '../ui/Image';
import { TagList } from '../lists/TagList';

export interface ProjectPageProps {
    project: Project;
}

export const ProjectPage = ({
    project
}: ProjectPageProps) => {
    const dataId = 'project-page';

    const navigate = useNavigate()
    const goToProjects = () => {
        navigate(`/projects`)
    }

    const subheader = `text-lg font-semibold`;

    return (
        <div
            data-id={dataId}
            className={`text-white p-6 **:pb-2 **:pt-2`}
        >
            <p className={`border rounded-sm m-10 p-5`}>Heads up! This page is under construction, feel free to checkout the current progress.</p>

            <div data-id={`${dataId}-title`} className={`border-b-2 flex flex-row w-full justify-between`}>
                <div data-id={`${dataId}-title`} className={`text-3xl mb-2 font-bold`}>
                    {project.title}
                </div>
                <div
                    data-id={`${dataId}-exit`}
                    className={`text-lg mb-4 hover:cursor-pointer`}
                    onClick={goToProjects}
                >
                    CLOSE
                </div>
            </div>

            <div data-id={`${dataId}-body`}
                className={`flex lg:flex-row flex-col *:p-6`}
            >
                <div
                    data-id={`${dataId}-left`}
                    className={`flex justify-center items-center lg:w-[40%]`}
                >
                    <div data-id={`${dataId}-image`} className={`lg:size-120 md:size-96 size-72`}>
                        <p>More images will go here</p>
                        <Image image={project.imgs[0]} fit='object-contain' />
                    </div>
                </div>
                <div
                    data-id={`${dataId}-right`}
                    className={`lg:w-[60%] `}
                >

                    {project.awards && project.awards.length > 0 ?
                        (
                            <div data-id={`${dataId}-awards`}>
                                <p className={subheader}>Awards</p>
                                {project.awards.map((award, index) => (
                                    <div
                                        key={index}
                                        data-id={`${dataId}-award-${index}`}
                                    >
                                        {award.key}: {award.values.join(', ')}
                                    </div>
                                ))}
                            </div>
                        )
                        :
                        null
                    }


                    <div
                        data-id={`${dataId}-description`}
                    >
                        <p className={subheader}>Description</p>
                        {project.description}
                    </div>

                    <div data-id={`${dataId}-technologies`}>
                        <p className={subheader}>Technologies</p>
                        <TagList tags={project.technologies} />
                    </div>

                    <div data-id={`${dataId}-demos`}>
                        <p className={subheader}>Demos + More</p>
                        {project.links.map((link, index) => (
                            <div
                                key={index}
                                data-id={`${dataId}-link-${index}`}
                                className={`text-blue-400 hover:underline`}
                            >
                                <a href={link.url} target="_blank" rel="noopener noreferrer">
                                    {link.name}
                                </a>
                            </div>
                        ))}
                    </div>

                    {project.personalNotes && project.personalNotes.length > 0 ? (
                        <div data-id={`${dataId}-personal-notes`}>
                            <p className={subheader}>Personal Notes</p>
                            {project.personalNotes ? project.personalNotes : 'No personal notes available.'}
                        </div>
                    )
                        :
                        null
                    }
                </div>
            </div>
        </div>
    );
};
