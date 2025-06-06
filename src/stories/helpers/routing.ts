import { useNavigate } from 'react-router-dom'

// routes between pages
export const routes = {
    Home: '/',
    Resume: '/Resume',
    Projects: '/projects',
    BuildLog: '/build-log',
    ProjectPage: (projectId: string) => `/projects/${projectId}`,
}

// meta tags
export function setMeta(title: string, description: string) {
    document.title = "Abigail's Portfolio | " + title;
    const des = document.querySelector('meta[name="description"]')

    if (des) {
        des.setAttribute('content', title)
    } else {
        const meta = document.createElement('meta')
        meta.name = 'description'
        meta.content = title
        document.head.appendChild(meta)
    }
}