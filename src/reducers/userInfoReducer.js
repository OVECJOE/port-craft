import { v4 as uuid } from 'uuid';

export const userInfoReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_PROPERTY':
            return {
                ...state,
                [action.key]: action.value
            }
        case 'ADD_PROJECT':
            return {
                ...state,
                projects: [
                    { id: uuid(), ...action.project },
                    ...state.projects
                ]
            };
        case 'REMOVE_PROJECT':
            return {
                ...state,
                projects: state.projects.filter(
                    project => project.id !== action.id
                )
            };
        case 'UPDATE_PROJECT':
            return {
                ...state,
                projects: state.projects.map(project => {
                    return project.id === action.id ?
                        { ...project, ...action.project } : project
                })
            };
        case 'ADD_CONTACT_LINK':
            return {
                ...state,
                contactInfo: { ...state.contactInfo, [action.key]: action.value }
            };
        case 'REMOVE_CONTACT_LINK':
            return state.contactInfo.filter(key => key !== action.key);
        case 'ADD_SKILL':
            return {
                ...state,
                skills: [...state.skills, { id: uuid(), ...action.newSkill }]
            };
        case 'REMOVE_SKILL':
            return {
                ...state,
                skills: state.skills.filter(skill => skill.id !== action.id)
            };
        case 'ADD_EXPERIENCE':
            return {
                ...state,
                jobExps: [...state.jobExps, { id: uuid(), ...action.jobExp }]
            };
        case 'REMOVE_EXPERIENCE':
            return {
                ...state,
                jobExps: state.jobExps.filter(jobExp => jobExp.id !== action.id)
            };
        case 'UPDATE_EXPERIENCE':
            return {
                ...state,
                jobExps: state.jobExps.map(jobExp => {
                    return jobExp.id === action.id ?
                    {...jobExp, ...action.jobExp} : jobExp
                })
            };
        case 'ADD_ROLE':
            return {
                ...state,
                roles: [...state.roles, action.role]
            };
        case 'REMOVE_ROLE':
            return {
                ...state,
                roles: state.roles.filter(role => role !== action.role)
            };
        default:
            return state;
    }
};
