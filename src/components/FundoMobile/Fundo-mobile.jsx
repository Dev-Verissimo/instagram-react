import Ionicon from "../ionicon/Ionicon"


export default function FundoMobile(params) {
    const names = [
        'home',
        'search-outline',
        'add-circle-outline',
        'heart-outline',
        'person-outline'
    ]

    return (
        <div className="fundo-mobile">
            {
                names.map(name => <Ionicon name={name}/> )
            }
        </div>
    )
}