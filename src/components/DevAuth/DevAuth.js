import { useState, useEffect } from 'react';
import './DevAuth.css';

function DevAuth() {
    const [devInfo, setDevInfo] = useState(
        JSON.parse(localStorage.getItem('devInfo')) ||
        {email: "", subscribed: false}
    );

    const storeDevInfo = (e) => {
        e.preventDefault();

        setDevInfo(dev_info => ({
            ...dev_info,
            subscribed: true
        }));
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setDevInfo((dev_info) => ({
            ...dev_info,
            [name]: value
        }));
    };

    useEffect(() => {
        devInfo.subscribed && localStorage.setItem('devInfo',
            JSON.stringify(devInfo))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [devInfo.subscribed])

    return (
        <main className="coming-soon">
            <div className='desc'>
                <h3 className='title'>For Developers (Coming Soon)</h3>
                <p>
                    This page is for developers looking forward to contributing to
                    this project, making bug fixes, and developing themes for
                    the consumers.
                </p>
                <div className='connect-card'>
                    <h4 className='connect'>
                        For the meantime, you could visit the project's repository
                        to learn more about the project <code>or/and</code> subscribe
                        to our newsletter to get updates on this page's status.
                    </h4>
                    <form className='subscribe' onSubmit={storeDevInfo}>
                        <input
                            type="email"
                            name="email"
                            value={devInfo.email}
                            placeholder='Enter your email'
                            onChange={handleChange}
                            required
                        />
                        <button>
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default DevAuth;