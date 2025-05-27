import { useMemo, useState, useRef, useEffect } from 'react';
import { ImageCarousel } from '../ui/ImageCarousel';
import { createPortal } from 'react-dom';
import { ElementAnimation } from '../ui/ElementAnimation';
import { Tag } from '../ui/Tag';
import { Card } from '../ui/Card';

export interface ProjectCardProps {
    /** What color theme to use (if unselected, a random theme will be chosen (excluding white))*/
    theme?: 'pink' | 'white' | 'blue' | 'green' | 'orange';
    /** What title to include */
    title: string;
    /** What description to show */
    description: string;
    /** What technologies were used */
    technologies: string[];
    /** When was the project completed */
    completed: string;
    /** What link to show */
    url?: string;
    /** What cover image and description to inclue */
    image: { resource: string; alt: string }[];
    /** What video to include */
    video?: string;
    /** What complexity to show */
    complexity?: string;
    /** What challenges to show */
    challenges?: string[];
    /** What awards to show (array of key-value pairs) */
    awards?: { key: string; values: string[] }[];
    /** What personal notes to include */
    personalNotes?: string;
    /** What additional links to include */
    links?: { name: string; url: string }[];
};

export const ProjectCard = ({
    theme,
    title,
    description,
    technologies,
    completed,
    url,
    image,
    video,
    complexity,
    challenges,
    awards,
    personalNotes,
    links = []
}: ProjectCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);

    return (
        <Card >
            <div id="projectCard">
                This is where my project card will be rendered.
            </div>
        </Card>
    );
};
