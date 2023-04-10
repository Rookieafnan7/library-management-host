/* eslint-disable @next/next/no-img-element */
export default function SidebarButton(props){
    return <>
    <a href={props.href}>
    <span className={props.styles.icon}>
      <img src={props.iconRef} alt="login" />
    </span>
    <span className={props.styles.title}>{props.name}</span>
    </a></>
}