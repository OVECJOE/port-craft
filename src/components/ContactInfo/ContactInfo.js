import { BsFillPhoneFill, BsLinkedin } from 'react-icons/bs';
import { MdEmail, MdFacebook, MdCancel } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { FaInstagramSquare, FaTwitter, FaWhatsappSquare, FaGithubAlt } from 'react-icons/fa';
import { useState, useContext } from 'react';

import { Div } from '../StyledComponents/MyStyledComps';
import { UserInfoContext } from '../../contexts/UserInfoContext';
import './ContactInfo.css';

function ContactInfo() {
    const { userInfo, dispatch } = useContext(UserInfoContext);

    const [formHeader, setFormHeader] = useState({
        name: "",
        instruction: "",
    });
    const [formData, setFormData] = useState({
        name: "",
        value: "",
        submitted: false
    });

    const changeformHeader = (name, instruction) => {
        setFormHeader({
            name: name.toUpperCase(),
            instruction: `Enter ${instruction}`
        });
    };

    const handleChange = (e) => setFormData({
        name: formHeader.name.toLowerCase(),
        value: e.target.value,
    });

    const addContact = (e) => {
        e.preventDefault();

        dispatch({
            type: 'ADD_CONTACT_LINK',
            key: formData.name,
            value: formData.value
        });

        setFormData((prev) => ({
            ...prev,
            value: "",
        }));
    };

    const removeContact = (key) => {
        dispatch({
            type: 'REMOVE_CONTACT_LINK',
            key: key,
        });
    };

    return (
        <Div contactInfo>
            <Div leftCard column>
                <h3 className='title'>ADD CONTACT INFO</h3>
                <p>
                    You can choose to include social links
                    such as twitter handle or add your contact info
                    like email e.t.c.
                </p>
                <div className='direct-contact'>
                    <div id='phone' onClick={() => changeformHeader('phone', 'Phone Number')}>
                        <BsFillPhoneFill />
                        Add Phone Number
                    </div>
                    <div id='email' onClick={() => changeformHeader('email', 'Email Address')}>
                        <MdEmail />
                        Add Email Address
                    </div>
                </div>
                <IconContext.Provider value={{ size: '35px' }}>
                    <div className='indirect-contact'>
                        <MdFacebook title='Facebook' id='facebook'
                            onClick={() => changeformHeader('facebook', 'Facebook URL')}
                        />
                        <FaInstagramSquare id='instagram' title='Instagram'
                            onClick={() => changeformHeader('instagram', 'Instagram URL')}
                        />
                        <FaTwitter id='twitter' title='Twitter'
                            onClick={() => changeformHeader('twitter', 'Twitter URL')}
                        />
                        <BsLinkedin id='linkedin' title='LinkedIn'
                            onClick={() => changeformHeader('linkedin', 'LinkedIn URL')}
                        />
                        <FaWhatsappSquare id='whatsapp' title='WhatsApp'
                            onClick={() => changeformHeader('whatsapp', 'Whatsapp URL')}
                        />
                        <FaGithubAlt id='github' title='Github'
                            onClick={() => changeformHeader('github', 'Github URL')}
                        />
                    </div>
                </IconContext.Provider>
            </Div>
            <Div rightCard column>
                {formHeader.name ?
                    <>
                        <form className='add-contact-form' onSubmit={addContact}>
                            <h3 className='form-title'>{formHeader.name}</h3>
                            <label htmlFor='contact-input'>{formHeader.instruction}</label>
                            <input
                                id='contact-input'
                                type="text"
                                placeholder={formHeader.instruction}
                                onChange={handleChange}
                                name='value'
                                value={formData.value}
                                required
                            />
                            <button>Add</button>
                        </form>
                        <hr className='end-of-contact-form' />
                        <div className='contacts'>
                            {Object.keys(userInfo.contactInfo).map(key => {
                                return (
                                    <div className='contact' key={key}>
                                        <MdCancel onClick={() => removeContact(key)} />
                                        <div>
                                            <h6>{key}</h6>
                                            <p>{userInfo.contactInfo[key]}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </> :
                    <h1>
                        Click one of the buttons or icons to add info
                    </h1>
                }
            </Div>
        </Div>
    );
}

export default ContactInfo;
