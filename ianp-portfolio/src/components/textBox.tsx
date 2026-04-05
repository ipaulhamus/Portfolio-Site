import '../css/textBlock.css'

export default function TextBox({title, text}: {title: string, text: string}) {
    return ( 
    <> 
        <div className="text-container">
            <p className="text-title">{title}</p>
            <p className="text-p">{text}</p>
        </div>
    </>
    )
}
