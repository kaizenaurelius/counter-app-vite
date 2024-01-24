
import PropTypes from 'prop-types'
import './styles.css'
import { useState, React} from 'react'

const CounterApp = ({value}) => {
    const [ counter, setCounter] = useState(value)
    const handleAdd = () => {
        setCounter( counter +1 )
    }
    const handleSubstract = () => {
        setCounter( counter - 1  )
    }
    const handleReset = () => {
        setCounter( value  )
    }

  return (
    <>
        <h1>
            CounterApp
        </h1>
        <h2>
            { counter }
        </h2>
        <button onClick={ handleAdd}>
            <span> +1 </span>
        </button>
        <button onClick={handleSubstract}>
            <span> -1 </span>
        </button>
        <button onClick={handleReset}>
            <span> Reset </span>
        </button>
    </>
  )
}

export default CounterApp

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
  };
  