import './sepline.css'
export default function SepLine({title} : {title: string}) {
    return (
        <div className="sep-line">
            <div></div>
            <span>{title}</span>
            <div></div>
        </div>
    )
}