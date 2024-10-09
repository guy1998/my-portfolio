import React, { useContext } from 'react'
import '../../sass/_about.scss';
import { ResponsivenessContext } from '@/contexts/breakpoint-context';

export const AboutText = () => {

    const { styles } = useContext(ResponsivenessContext);

    const skillsSection = [
        {
            title: 'Software Engineering & Architecture',
            percentage: '95%',
            subscription: '95 %',
            colorClass: 'bg-yellow-400'
        },
        {
            title: 'Machine learning',
            percentage: '98%',
            subscription: '98 %',
            colorClass: 'bg-green-600'
        },
        {
            title: 'Cyber security',
            percentage: '85%',
            subscription: '85 %',
            colorClass: 'bg-red-600'
        }
    ];

    return (
        <div className="about-text shadow-dark" style={ styles?.aboutText }>
            <div className={'paragraph'} style={  styles?.paragraph }>
                <p>
                    I am Aldrin, an engineer with passion to develop amazing software and write clean code.
                    My main focus is on Ai and Robotics but of course I can do anything. After all isn{"'"}t that
                    the purpose of a software {";)"} ?
                </p>
                <a href='/aldrin-resume.pdf' download={"Aldrins_resume.pdf"} target='_blank' className={'button'}>Open CV_Skills-Editor</a>
            </div>
            <div className={'about-skills'} style={ styles?.aboutSkills }>
                {skillsSection.map((skill) => (
                    <div className={'skill-element'} key={skill.title}>
                        <div className={'skill-title'}>
                            <h3>{skill.title}</h3><span>{skill.subscription}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                            <div
                                className={`${skill.colorClass} h-2.5 rounded-full`}
                                style={{width: skill.percentage}}
                            >
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
