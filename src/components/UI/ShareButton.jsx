import Button from './Button';

const ShareButton = () => {
    return (
        <Button 
            tagType='link'
            className="p-0 mx-3"
            onClick={''}>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <g filter="url(#filter0_b_3738_15824)">
                        <rect x="0.5" y="0.5" width="47" height="47" stroke="black"/>
                    </g>        
                    <path d="M27.7697 30.4059L20.6738 25.7227" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M27.8907 17.1309L20.7949 21.8141" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M20.6682 23.3419C20.6682 25.1833 19.1755 26.676 17.3341 26.676C15.4927 26.676 14 25.1833 14 23.3419C14 21.5005 15.4927 20.0078 17.3341 20.0078C19.1755 20.0078 20.6682 21.5005 20.6682 23.3419Z" stroke="black" stroke-width="1.5"/>
                    <path d="M34.0061 32.6661C34.0061 34.5075 32.5134 36.0002 30.672 36.0002C28.8306 36.0002 27.3379 34.5075 27.3379 32.6661C27.3379 30.8248 28.8306 29.332 30.672 29.332C32.5134 29.332 34.0061 30.8248 34.0061 32.6661Z" stroke="black" stroke-width="1.5"/>
                    <path d="M34.0061 15.3341C34.0061 17.1755 32.5134 18.6682 30.672 18.6682C28.8306 18.6682 27.3379 17.1755 27.3379 15.3341C27.3379 13.4927 28.8306 12 30.672 12C32.5134 12 34.0061 13.4927 34.0061 15.3341Z" stroke="black" stroke-width="1.5"/>
                    <defs>
                        <filter id="filter0_b_3738_15824" x="-6" y="-6" width="60" height="60" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="3"/>
                            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_3738_15824"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_3738_15824" result="shape"/>
                        </filter>
                    </defs>
                </svg>                       
        </Button>
    )
}
export default ShareButton;