import splatImg from '../assets/color-splat-1.png';
import '../css/titleBlock.css';

export default function TitleBlock({title}: {title: string}) {
    return (
    <>
        <div className="title-container">
            <div className="title-foreground">
                <img className="title-img" src={splatImg} />
                <h2 className="title-text">{title}</h2>
            </div>
            <div className='decoration-container'>
                <div className="deco-line-main" />
                <div className="deco-line-accent" />
            </div>
        </div>
    </>
    )
}