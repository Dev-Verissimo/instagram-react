import Post from "../Post/Post"


export default function PostsContainer() {
    const users = [
        'meowed',
        'barked'
    ]

    const conteudo = [
        'gato-telefone',
        'dog'
    ]

    const curtidasUser = [
        'respondeai',
        'adorable_animals'
    ]

    const numeroDeCurtidas = [
        '110.560',
        '99.159'
    ]
    return (
        <div className="posts">
            {
                users.map((user, i) => <Post key={i} user={user} img={conteudo[i]} numeroDeCurtidas={numeroDeCurtidas[i]} curtidoPor={curtidasUser[i]}/>)
            }
        </div>
    )
}