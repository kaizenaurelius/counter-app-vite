import PropTypes from 'prop-types'
function FirstApp({ title, subTitle, name }) {

 
    return (
        <>
            <h1> { title }</h1>
            <p>{ subTitle }</p>
            <p>{ name }</p>
        </>
  
    )
  
  }

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number
  }
FirstApp.defaultProps = {
    title: 'No hay Título ',
    subTitle: 'No hay Subtítulo',
    name: 'No hay Nombre'
}
  export default FirstApp