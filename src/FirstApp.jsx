import PropTypes from 'prop-types';

const FirstApp = ( {title, subTitle, name} ) => {

    // console.log(props)

    return (
        <>
            <h1>{ title }</h1>
            {/* <code>{ JSON.stringify(newMessage)  }</code> */}
            <p>{ subTitle }</p>
            <p>{ name }</p>
        </>
    )
}

export default FirstApp


FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string
}

FirstApp.defaultProps = {
    name: 'Alfonzo Perez',
    title: 'No hay ningun titulo',
    subTitle: 'No hay subtitulo',
}