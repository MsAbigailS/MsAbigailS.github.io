import { useState, useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom';
import { Card } from '../ui/Card'
import { ProjectCardDetailed } from '../cards/ProjectCardDetailed'
import { TagCard } from '../cards/TagCard';
import { TextAnimation } from '../ui/TextAnimation';
import { BubbleCard } from '../cards/BubbleCard';
import type { Project } from '../../types/project';
import projectData from '../../data/projects.json';
import { GradientText } from '../text/GradientText';

export interface ProjectsProps {
    /** How many cards to show */
    limit?: number
}

export const Projects = ({
    limit
}: ProjectsProps) => {

    const navigate = useNavigate()

    // setting default size based on amount available
    limit = useMemo(() => {
        if (limit) {
            return limit
        } else if (projectData.length === 0) {
            console.log("WARNING: No project data provided, unable to generate cards")
        } else if (projectData.length < 3) {
            return projectData.length
        } else {
            return 3
        }
    }, [])

    return (
        <Card>
            <div
                className="mt-30"
            >
                <div
                    className="w-full flex items-center justify-center text-start md:text-center h-full text-6xl md:text-8xl"
                >
                    <GradientText
                        text="Selected Projects"
                        primaryColor="from-gray-100/100"
                        secondaryColor="white"
                        weight="font-bold"
                    />
                </div>
                <div
                    className="md:flex md:items-center md:justify-center md:flex-col"
                >
                    {projectData.slice(0, limit).map((project, index) => {
                        return (
                            <div
                                key={index}
                                className="mb-15 w-full"
                            >
                                <ProjectCardDetailed
                                    project={projectData[index]}
                                    index={index}
                                />
                            </div>
                        )
                    })}

                    <div className={`font-manrope text-3xl flex justify-center items-center ease-in-out transition-opacity duration-1000`}>
                        <div
                            id="callToAction"
                            onClick={() => navigate('/Projects')}
                            className={`relative m-2 p-2 border-1 border-white-500 text-white
                                hover:border-white rounded-lg overflow-hidden flex flex-col
                                justify-center items-center hover:cursor-pointer`}
                        >
                            <TextAnimation
                                text="View All Projects"
                                animation='hoverSlide'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
}