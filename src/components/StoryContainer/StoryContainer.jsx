import Story from "../Story/Story"



export default function StoryContainer() {
    const imagens = [
        '9gag',
        'meowed',
        'barked',
        'nathanwpylestrangeplanet',
        'wawawicomics',
        'respondeai',
        'filomoderna',
        'memeriagourmet'
    ]
    return (
        <div className="stories">
            {
                imagens.map(
                    imagem => <Story titulo={imagem}/>
                )
            }
            <div class="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>

    )
}