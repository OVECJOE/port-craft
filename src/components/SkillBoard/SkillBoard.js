import { BsFilePlusFill } from 'react-icons/bs';
import { MdCancel } from 'react-icons/md';
import { useContext, useState } from 'react';

import './SkillBoard.css';
import { UserInfoContext } from '../../contexts/UserInfoContext';

function SkillBoard() {
    const skillTemplate = () => ({
        skillLogo: "",
        skillName: "",
        skillLevel: ""
    });

    const { userInfo, dispatch } = useContext(UserInfoContext);
    const [formData, setFormData] = useState(skillTemplate());

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData((prev) => {
            return {
                ...prev,
                [name]: type === 'checked' ? checked : value
            };
        })
    };

    const addSkill = (e) => {
        e.preventDefault();

        dispatch({
            type: 'ADD_SKILL',
            newSkill: formData
        });

        setFormData(skillTemplate());
    };

    const removeSkill = (id) => {
        dispatch({
            type: 'REMOVE_SKILL',
            id: id
        });
    };

    return (
        <div className='skill-board'>
            <div className='add-skill-card'>
                <h1>ADD OR REMOVE YOUR SKILLS</h1>
                <form className='add-skill-form' onSubmit={addSkill}>
                    <div className='skill-input'>
                        <label htmlFor='skill-logo'>
                            ENTER A URL THAT DEMONSTRATES THE SKILL/TECHNOLOGY LOGO
                        </label>
                        <input id='skill-logo'
                            type="url"
                            placeholder='Skill/Technology Logo Url'
                            onChange={handleChange}
                            name='skillLogo'
                            value={formData.skillLogo}
                            required
                        />
                    </div>
                    <div className='skill-input'>
                        <label htmlFor='skill-name'>
                            ENTER SKILL/TECHNOLOGY NAME
                        </label>
                        <input id='skill-name'
                            type="text"
                            placeholder='Skill/Technology Name'
                            onChange={handleChange}
                            name='skillName'
                            value={formData.skillName}
                            required
                        />
                    </div>
                    <div className='skill-input'>
                        <label htmlFor='skill-level'>
                            SELECT YOUR LEVEL OF EXPERTISE WITH THIS SKILL
                        </label>
                        <select
                            id='skill-level'
                            value={formData.skillLevel}
                            onChange={handleChange}
                            name='skillLevel'
                            required
                        >
                            <option value="">Skill Levels</option>
                            <option value="beginner">Beginner</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advanced">Advanced</option>
                        </select>
                    </div>
                    <button>ADD SKILL <BsFilePlusFill /></button>
                </form>
            </div>
            <div className='skills-list'>
                {!userInfo.skills.length ?
                    <h1>Your Skills Will Be Shown Here...</h1> :
                    userInfo.skills.map(skill => {
                        return (
                            <div className='skill' key={skill.id}>
                                <span className='delete-btn'
                                    onClick={() => removeSkill(skill.id)}
                                >
                                    <MdCancel />
                                </span>
                                <img src={skill.skillLogo} alt={skill.skillName} />
                                <h5 className='skill-name'>{skill.skillName}</h5>
                                <span className='skill-level'>{skill.skillLevel}</span>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default SkillBoard;