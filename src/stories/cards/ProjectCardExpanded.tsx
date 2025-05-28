
import type { Project } from '../../types/project';
import { useNavigate } from 'react-router-dom'
import { Image } from '../ui/Image';
import { TagList } from '../lists/TagList';
import { Header } from '../ui/Header';
import { ImageBanner } from '../images/ImageBanner';


export interface ProjectCardExpandedProps {
    project: Project;
}

export const ProjectCardExpanded = ({
    project
}: ProjectCardExpandedProps) => {
    const dataId = 'project-card-expanded';

    const navigate = useNavigate()
    const goToProjects = () => {
        navigate(`/projects`)
    }

    const subheader = `font-inknut rounded-md bg-white text-gray-950 border-white border-2 inline-block p-2`;
    const card = `text-white rounded-xl border-white border-2 p-6`

    return (
        <div
            data-id={dataId}
            className="
    relative
    p-6
    rounded-lg
    border
    border-white/20
    bg-[rgba(121,65,58,0.15)]  /* your accent with opacity */
    backdrop-blur-lg
    shadow-lg
    shadow-[rgba(191,139,133,0.25)]
    text-white
    mx-auto
  "
        >

            {/* <ImageBanner image={project.imgs[0]} text={project.title} /> */}

            <div
                data-id="subject-header"
                className={`font-inknut rounded-xl p-6 bg-white text-gray-950 shadow-white border-white border-2`}
            >
                {project.title}
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
