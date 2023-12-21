import React from 'react'
import styles from "./Button.module.css"
// const Button = (props) => {
// //   return (
//     // <button className={ props.isOutline ? styles.outline_btn : styles.primary_btn}>
//     //   {props.icon}
//     //   {props.text}
//     const{isOutline,icon,text} = props;
//     return (
//       <button className={isOutline ? styles.outline_btn : styles.primary_btn}>
//         {icon}
//         {text}
//     </button>
//   )
// }




// const Button = (props) => {
//   return (
    // <button className={ props.isOutline ? styles.outline_btn : styles.primary_btn}>
    //   {props.icon}
    //   {props.text}



    
//     const{isOutline,icon,text} = props;
//     return (
//       <button className={isOutline ? styles.outline_btn : styles.primary_btn}>
//         {icon}
//         {text}
//     </button>
//   )
// }

const Button = ({isOutline,icon,text , ...rest }) => {
    //   return (
        // <button className={ props.isOutline ? styles.outline_btn : styles.primary_btn}>
        //   {props.icon}
        //   {props.text}
        
        return (
          <button {...rest} className={isOutline ? styles.outline_btn : styles.primary_btn}>
            {icon}
            {text}
        </button>
      )
    }

export default Button
