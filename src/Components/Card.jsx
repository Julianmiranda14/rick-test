import style from "./Card.module.css"

export default function Card (props) {

    return <div className={style.Card}>
        <div>
        <img className={style.image} src={props?.image} alt="gg" />
        </div>
        <label>{props?.name}</label>
        <br></br>
        <label>{props?.status}</label>

    </div>

}