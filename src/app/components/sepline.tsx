import './sepline.css'
export default function SepLine({title}) {
    return (
        <div className="sep-line">
            <div></div>
            <span>{title}</span>
            <div></div>
        </div>
    )
}