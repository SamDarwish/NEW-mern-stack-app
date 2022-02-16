import { Link } from 'react-router-dom'
import './About.css'
import greg from '/Users/samueldarwish/Desktop/DevOps Work/NEW-mern-stack-app/front-end/src/Screen Shot 2021-02-23 at 1.08.13 PM.png'

/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const About = props => {
  return (
    <>
      <h1>Hey!</h1>
<br></br>
      <p>
        Check out the <Link to="/Home">Home page</Link>.
      </p>
<br></br>
      <p>
          Good morning fellas. My name's Sam, I'm a Music Tech major and, with any luck, I'm graduating after this semester.
          I grew up in California, in the heart of Silicon Valley, so nearly all the adults in my life worked in the software industry.
          As such, I was given a healthy appreciation for the field long before I saw myself pursuing any related study. Every student
          at my high school was required to learn Java to a basic level of proficiency, and many of us were encouraged to pursue to a higher
          level of proficiency.
      </p>
      <br></br>
      <p>
          Here's a second paragraph, just to show off that I can do that. This is the final class for my CS minor, and so far I really enjoy
          the quick pace and the effective introduction to each language that we learn. I'm in a few classes focusing on the development of 
          audio processing software, and I'm glad I get to round my skills out in a class structured close to a real working environment.
          
    </p>
    <br></br>
    <h1>Thanks!</h1>

      <br></br>
      <div>
             <img src={greg} alt="Here's the only shot of me that I have on my computer':" width="300"/>
        </div>
    </>
  )
}

// make this component available to be imported into any other file
export default About
