import '../css/textBlock.css'

export default function TextBox({title, subtitle, text}: {title: string, subtitle: string, text: string}) {
    return ( 
    <> 
        <div className="text-container">
            <p className="text-title">{title}</p>
            {subtitle?.length > 0 ? <p className="text-subtitle">{subtitle}</p> : <span></span> }
            <p className="text-p">{text}</p>
        </div>
    </>
    )
}
