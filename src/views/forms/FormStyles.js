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
