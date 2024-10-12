import React from 'react';
import styles from './SkillBadges.module.css'; 

const SkillBadges = ({ skills }) => {
  return (
    <div className={styles.badgeContainer}>
      {skills.map((skill, index) => (
        <div key={index} className={styles.badge}>
          {skill}
        </div>
      ))}
    </div>
  );
};

export default SkillBadges;
