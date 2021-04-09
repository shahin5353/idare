import styled from 'styled-components'
import { isMobile } from 'react-device-detect'

export const Card = styled.div`
    background-color: white;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12),
        0 1px 3px 0 rgba(0, 0, 0, 0.2);
    transition: 0.2s;
    border-radius: 5px;
    padding: 10px;
`

export const FormBasicContainer = styled(Card)`
    margin-bottom: 20px;
    margin-top: 10px;
    width: ${isMobile? '': '50%'};
`
export const FormIconContainer = styled(Card)`
    margin-bottom: 20px;
    margin-top: 40px;
`

export const FormImageWithInfoContainer = styled(Card)`
    display: grid;
    align-items: center;
    grid-column-gap: 20px;
    grid-template-columns: ${isMobile ? '1fr' : 'auto 1fr'};
    margin-top: '20px';
`
export const FormSearchWithInfoContainer = styled.div`
    display: grid;
    align-items: center;
    grid-column-gap: 20px;
    grid-template-columns: ${isMobile ? '1fr' : '1fr auto '};
    margin-top: '20px';
`

export const FormItemContainer = styled.div`
    display: grid;
    grid-column-gap: 10px;
    margin-top: 10px;
    grid-template-columns:
        repeat(${(props) => (props.triple ? 3 : 4)}, 1fr)
        ${isMobile &&
        `
            grid-template-columns: '';
        `};
`

export const FormBillItemContainer = styled(FormItemContainer)`
    align-items: end;
    grid-template-columns: 1fr 1fr 2fr auto;
`
export const FormExpenseItemContainer = styled(FormItemContainer)`
    align-items: end;
    grid-template-columns: 1fr 1fr 1fr 2fr auto;
`

export const FormDoubleItemContainer = styled(FormItemContainer)`
    grid-template-columns: repeat(2, 1fr);
    ${isMobile && `grid-template-columns: '';`};
`

export const FormItemBillContainer = styled.div`
    display: grid;
    margin-top: 10px;
    grid-column-gap: 1%;
    grid-template-columns: repeat(3, 20% [col-start] 15% [col-middle] 63% [col-end]);
    ${isMobile &&
    `
        display: block;
        `}
`
export const FormButtonContainer = styled.div`
    margin-top: 10px;
    margin-bottom: -30px;
    text-align: end;
    margin-right: 20px;
    ${isMobile && `
    text-align: center;
`}
`
