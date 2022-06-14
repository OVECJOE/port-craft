import { BsFillPhoneFill, BsLinkedin } from 'react-icons/bs';
import { MdEmail, MdFacebook } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { FaInstagramSquare, FaTwitter, FaWhatsappSquare, FaGithubAlt } from 'react-icons/fa';
import { useState } from 'react';
import { Div } from '../StyledComponents/MyStyledComps';
import './ContactInfo.css';

function ContactInfo(props) {
    const [formHeader, setFormHeader] = useState({
        name: "",
        instruction: ""
    }); //cft: Contact Form Title

    const changeformHeader = (name, instruction) => {
        setFormHeader({ name: name.toUpperCase(), instruction: `Enter ${instruction}` });
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
                <IconContext.Provider value={{size: '35px'}}>
                    <div className='indirect-contact'>
                        <MdFacebook id='facebook' onClick={() => changeformHeader('facebook', 'Facebook URL')} />
                        <FaInstagramSquare id='instagram' onClick={() => changeformHeader('instagram', 'Instagram URL')} />
                        <FaTwitter id='twitter' onClick={() => changeformHeader('twitter', 'Twitter URL')} />
                        <BsLinkedin id='linkedin' onClick={() => changeformHeader('linkedin', 'LinkedIn URL')} />
                        <FaWhatsappSquare id='whatsapp' onClick={() => changeformHeader('whatsapp', 'Whatsapp URL')} />
                        <FaGithubAlt id='github' onClick={() => changeformHeader('github', 'Github URL')} />
                    </div>
                </IconContext.Provider>
            </Div>
            <Div rightCard column>
                {formHeader.name ?
                    <>
                        <form className='add-contact-form'>
                            <h3 className='form-title'>{formHeader.name}</h3>
                            <label htmlFor='contact-input'>{formHeader.instruction}</label>
                            <input
                                id='contact-input'
                                type="text"
                                placeholder={formHeader.instruction}
                                // onChange={}
                                name='value'
                                // value={}
                                required
                            />
                            <button>Add</button>
                        </form>
                        <hr className='end-of-contact-form' />
                    </> :
                    <h1>
                        Click one of the buttons on the left to add info
                    </h1>
                }
            </Div>
        </Div>
    );
}

export default ContactInfo;
