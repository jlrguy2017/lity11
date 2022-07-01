import { useHistory } from 'react-router-dom'

const AlbumsButton = () => {
    const history = useHistory()

    const handleOnClick = e => {
        e.prevent.default()
        history.push('/albums')
    }

    return (
        <button onClick={handleOnClick} className='albums-button'>Albums</button>
    )
}

export default AlbumsButton
