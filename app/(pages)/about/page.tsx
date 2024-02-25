import MetaHeading from '@/utils/MetaHeading';
import React from 'react'

type Props = {}

const AboutPage = (props: Props) => {
    return (
        <div>
            <MetaHeading
                title="about"
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. In harum itaque cumque at! Culpa sunt quo doloribus cum ratione! Architecto?"
                keywords="about lms platform"
            />

            <p>About page</p>
        </div>
    )
}


export default AboutPage;