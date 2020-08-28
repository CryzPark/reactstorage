import {borderColor, Secundario, Black, secondFondo, TapFondo,Text, FondoMensajes} from './ColorsThemes'

export const border = {
    border: '1px solid '+ borderColor
}
export const DashBoardBottons = {
    border: '1px solid '+ borderColor,
    color: Secundario,
    backgroundColor:secondFondo
}
export const BackGroundTap = {
    backgroundColor:TapFondo
}
export const BorderBackground = {
    backgroundColor:secondFondo,
    border: '1px solid '+ borderColor 
}
export const text = {
    color: Black
}
export const textSecundary = {
    color: Text
}
export const ColorWhite = {
    color:secondFondo
}
export const BackgroundWhite = {
    backgroundColor:secondFondo
}
export const SecondFondo={
    backgroundColor:Secundario
}
export const MensajesFondoBorder = {
    backgroundColor: FondoMensajes,
    border: '1px solid '+ borderColor 
}
export const styles = (CBorder=null,cColor=null,cBackgroundColor=null) =>{
    const style = {
        border: '1px solid '+ CBorder,
        color: cColor,
        backgroundColor:cBackgroundColor
    }
    return(
        style
    )
}