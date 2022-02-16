import { Link } from 'react-router-dom'
import './about.css'

/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const About = props => {
  return (
    <>
      <h1>Hey!</h1>
      <p>Here's my cute little page.</p>
      <p>
        Check out the <Link to="/Home">Home page</Link>.
      </p>
    </>
  )
}

// make this component available to be imported into any other file
export default About
