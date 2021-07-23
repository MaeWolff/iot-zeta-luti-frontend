import React from 'react'
import styled from "styled-components";

const SvgStyled = styled.svg`
    //FIX WIDTH
`
const Rect = styled.rect`
    fill: white;
    stroke: #231f20;
    stroke-miterlimit: 10;
    stroke-width: 11px;
`

export default function Map() {
    return (
        <SvgStyled  id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 855 848.66">
            <Rect id='C004'  x="561.42" y="5.5" width="288.08" height="167.53" />
            <Rect id='C001' x="5.5" y="5.5" width="288.08" height="167.53" />
            <Rect id='C001' x="5.5" y="173.03" width="288.08" height="167.53" />
            <Rect id='C005' x="561.42" y="173.03" width={288.08} height={167.53} />
            <Rect id='B001' x="514.44" y="340.57" width="335.07" height="167.53" />
            <Rect id='B003' x="514.44" y="675.63" width="335.07" height="167.53" />
            <Rect id='B002' x="514.44" y="508.1" width="335.07" height="167.53" />
            <Rect id='A003' x="5.5" y="675.63" width="335.07" height="167.53" />
            <Rect id='A002' x="5.5" y="508.1" width="335.07" height="167.53" />
            <Rect id='A001' x="5.5" y="340.57" width="335.07" height="167.53" />
            <Rect id='C001' x="293.58"   y="5.5" width="267.83" height="167.53" />
            <text className="cls-2" transform="translate(659.38 430.87)">B001</text>
            <text className="cls-2" transform="translate(139.54 430.87)">A001</text>
            <text className="cls-2" transform="translate(126.94 262.07)">C001</text>
            <text className="cls-2" transform="translate(126.94 97.81)">C002</text>
            <text className="cls-2" transform="translate(405.44 97.81)">C003</text>
            <text className="cls-2" transform="translate(683.46 97.81)">C004 </text>
            <text className="cls-2" transform="translate(683.46 262.07)">C005</text>
            <text className="cls-2" transform="translate(139.54 592.08)">A002</text>
            <text className="cls-2" transform="translate(139.54 759.62)">A003</text>
            <text className="cls-2" transform="translate(660.9 591.86)">B002</text>
            <text className="cls-2" transform="translate(662.42 759.4)">B003</text>
        </SvgStyled>
    )
}