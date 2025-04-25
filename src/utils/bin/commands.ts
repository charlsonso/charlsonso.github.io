// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'info' to display summary.
`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

export const donut = async (args: string[]): Promise<string> => {
  return 'working on a donut...'
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

//Github
export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `Work in progress... Should list projects and links to resume...
`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, disk space is expensive...`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};


export const vim = async (args: string[]): Promise<string> => {
  return `Oh your so silly... This isn't a real terminal!`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `emacs?? just use vim`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); //I'm not sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `

 ██████╗██╗  ██╗ █████╗ ██████╗ ██╗     ███████╗ ██████╗ ███╗   ██╗    ███████╗ ██████╗ 
██╔════╝██║  ██║██╔══██╗██╔══██╗██║     ██╔════╝██╔═══██╗████╗  ██║    ██╔════╝██╔═══██╗
██║     ███████║███████║██████╔╝██║     ███████╗██║   ██║██╔██╗ ██║    ███████╗██║   ██║
██║     ██╔══██║██╔══██║██╔══██╗██║     ╚════██║██║   ██║██║╚██╗██║    ╚════██║██║   ██║
╚██████╗██║  ██║██║  ██║██║  ██║███████╗███████║╚██████╔╝██║ ╚████║    ███████║╚██████╔╝
 ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚══════╝ ╚═════╝ ╚═╝  ╚═══╝    ╚══════╝ ╚═════╝ 
Welcome! I am a software engineer with a passion for C, C++, python, javascript, and go. While my current focus is in embedded software development in aerospace, my experience spans across various fields such as graphics, autonomous robotics, simulation, machine learning, and web development. I enjoy tackling complex challenges and continuously expanding my skill set in cutting-edge technologies. 

Type 'info' to display a summary.
Type 'help' to see the list of available commands.
`;
//Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
};
