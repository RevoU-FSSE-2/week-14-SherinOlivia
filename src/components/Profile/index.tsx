import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import { ProfileInfo } from '../../types';
import styles from './Profile.module.css'

const Profile: React.FC<ProfileInfo> = ({name, email}) => (

    <Card title="Profile" bordered={false} className={styles.profile}>
        <p>Name: <span className={styles.profileData}>{name}</span></p>
        <p >Email: <span className={styles.profileData}>{email}</span></p>
        <Link to="/" className={styles.link}>Return</Link>
        <div className={styles.profileBody}></div>

    </Card>

);

export default Profile;