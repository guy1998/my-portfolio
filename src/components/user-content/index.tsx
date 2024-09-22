import React from 'react'
import '../../sass/_header.scss';
import Typewriter from 'typewriter-effect';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TerminalIcon from '@mui/icons-material/Terminal';

export const UserContent = () => {

    return (
        <div className="user-content">
            <h2><span className={'font-bold text-yellow-400 text-5xl'}>{'{'}</span> Aldrin <span className={'font-bold text-yellow-400 text-5xl'}>{'}'}</span></h2>
            <div className='type-writer'>
                <Typewriter
                    options={{
                        strings: ["Looking for an 🤓💻 Engineer?", "I ❤️ programming #️<{}!"],
                        autoStart: true,
                        loop: true,
                    }}
                    onInit={(typewriter) => {
                        typewriter.typeString('Hello World 👋😄!')
                            .pauseFor(1500)
                            .deleteAll()
                            .start();
                    }}
                />
            </div>
            <div className='social-icons'>
                <a href='https://github.com/guy1998' target='_blank'>
                    <GitHubIcon className='fab' />
                </a>
                <a href='https://www.linkedin.com/in/aldrin-%C3%A7ifliku-57574a270/' target='_blank'>
                    <LinkedInIcon className='fab' />
                </a>
                <a href='/aldrin-resume.pdf' download={"Aldrins_resume.pdf"} target='_blank'>
                    <TerminalIcon className='fab'/>
                </a>
            </div>
            <a className={'hack-me'} href='/aldrin-resume.pdf' download={"Aldrins_resume.pdf"} target='_blank'>{' >_ '}hackMyResume() <TerminalIcon /> </a>
            <div className='scroll-me'>
                <a href="#thanks"><span></span>Scroll Me</a>
            </div>
        </div>
    );
}
