import * as S from './styles'


export const Card = ({colorName, backgroundColor}: S.Props) => {

    return (
            <S.Card backgroundColor={backgroundColor}>
                <h1>{colorName}</h1>
            </S.Card>
    )

}