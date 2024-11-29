import React, { useState } from 'react';

const Settings = () => {
    const [username, setUsername] = useState('');
    const [theme, setTheme] = useState('light');
    const [notifications, setNotifications] = useState(true);

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handleThemeChange = (e) => {
        setTheme(e.target.value);
    };

    const handleNotificationsChange = (e) => {
        setNotifications(e.target.checked);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Save settings logic here
        console.log('Settings saved:', { username, theme, notifications });
    };

    return (
        <div className="settings">
            <h2>Chat Settings</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Username:
                        <input type="text" value={username} onChange={handleUsernameChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Theme:
                        <select value={theme} onChange={handleThemeChange}>
                            <option value="light">Light</option>
                            <option value="dark">Dark</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        Notifications:
                        <input type="checkbox" checked={notifications} onChange={handleNotificationsChange} />
                    </label>
                </div>
                <button type="submit">Save Settings</button>
            </form>
        </div>
    );
};

export default Settings;