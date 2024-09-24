import SocialPost1 from '../assets/images/social_media1.jpg';
import SocialPost4 from '../assets/images/social_media4.jpg';
import AiPost from "../assets/images/ai_image.webp";
import AiPost2 from "../assets/images/ai_image_2.webp";

export const SOCIAL_MEDIA_POSTS: any = [
    {
        id: 1,
        title: 'Secrets to power up your software developing career with AI.',
        description: 'The future is now. AI is finally unleashing its true potential. Tasks that once were difficult and time-consuming such as essays or…',
        image: AiPost,
        location: 'Germany',
        pinned: true,
        badge: '<span>💡</span> Insights',
        date: 'Jul 9, 2024',
        redirectLink: 'https://medium.com/@acifliku/secrets-to-power-up-your-software-developing-career-with-ai-c6a3032517fb'
    },
    {
        id: 2,
        title: 'JSON Web Token (JWT) authentication explained — Node.js + React Example',
        description: 'In modern web development, ensuring secure authentication is paramount. And one widely adopted method for managing user authentication is JSON Web Tokens (JWT). One may define JWT as a compact, URL-safe means of representing claims between two parties, typically used for authentication and information exchange. In this article, however, we will try to create a lower level view of what JWTs are and how you can make use of them in your upcoming project. So, stick till the end to learn the secrets of JWT authentication and enjoy a full example with React + Node.js.',
        image: SocialPost1,
        location: '',
        pinned: false,
        badge: '<span>🧑‍💻</span> Coding',
        date: 'Mar 30, 2024',
        redirectLink: 'https://medium.com/@acifliku/json-web-token-jwt-authentication-explained-node-js-react-example-0d51cfc62050'
    },
    {
        id: 3,
        title: 'Top 10 Software Development Trends in 2024',
        description: 'The world of software development is ever-evolving, and staying ahead of the curve is crucial for developers and businesses alike. As we move through 2024, here are the top 10 trends shaping the industry, explained in simple terms.',
        image: AiPost2,
        location: '',
        pinned: false,
        badge: '<span>💡</span> Insights',
        date: 'Aug 30, 2024',
        redirectLink: 'https://medium.com/@acifliku/top-10-software-development-trends-in-2024-8e7dce0a4a83'
    }
];