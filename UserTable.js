import React from 'react'
import {Table} from 'react-bootstrap'
import wladya from "./ladya.png"
import whorse from "./horse.png"
import wking from "./king.png"
import wqueen from "./queen.png"
import wofficer from "./officer.png"
import wpawn from "./pawn.png"

import bladya from "./ladya2.png"
import bhorse from "./horse2.png"
import bking from "./king2.png"
import bqueen from "./queen2.png"
import bofficer from "./officer2.png"
import bpawn from "./pawn2.png"

import "./LabStyle.css";

export default function UserForm()
{
    return(
    <>
    <Table striped hover>
    <div class ="chess-board">
    <thead>
        <tr>
        <th>    </th>
        <th class ="tname">a</th>
        <th class ="tname">b</th>
        <th class ="tname">c</th>
        <th class ="tname">d</th>
        <th class ="tname">e</th>
        <th class ="tname">f</th>
        <th class ="tname">g</th>
        <th class ="tname">h</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td class ="tname">1</td>
        <td class ="dark"></td>
        <td class ="light"><img src={wladya}></img></td>
        <td class ="dark"></td>
        <td class ="light"><img src={wking}></img></td>
        <td class ="dark"><img src={wqueen}></img></td>
        <td class ="light"><img src={wofficer}></img></td>
        <td class ="dark"><img src={whorse}></img></td>
        <td class ="light"><img src={wladya}></img></td>
        </tr>
        <tr>
        <td class ="tname">2</td>
        <td class ="light"><img src={wpawn}></img></td>
        <td class ="dark"></td>
        <td class ="light"><img src={bofficer}></img></td>
        <td class ="dark"><img src={whorse}></img></td>
        <td class ="light"></td>
        <td class ="dark"><img src={wpawn}></img></td>
        <td class ="light"><img src={wpawn}></img></td>
        <td class ="dark"><img src={wpawn}></img></td>
        </tr>
        <tr>
        <td class ="tname">3</td>
        <td class ="dark"></td>
        <td class ="light"></td>
        <td class ="dark"><img src={wpawn}></img></td>
        <td class ="light"></td>
        <td class ="dark"><img src={bpawn}></img></td>
        <td class ="light"></td>
        <td class ="dark"><img src={wofficer}></img></td>
        <td class ="light"></td>
        </tr>
        <tr>
        <td class ="tname">4</td>
        <td class ="light"><img src={wpawn}></img></td>
        <td class ="dark"></td>
        <td class ="light"></td>
        <td class ="dark"><img src={bhorse}></img></td>
        <td class ="light"></td>
        <td class ="dark"></td>
        <td class ="light"></td>
        <td class ="dark"></td>
        </tr>
        <tr>
        <td class ="tname">5</td>
        <td class ="dark"></td>
        <td class ="light"></td>
        <td class ="dark"></td>
        <td class ="light"><img src={wpawn}></img></td>
        <td class ="dark"><img src={bpawn}></img></td>
        <td class ="light"></td>
        <td class ="dark"></td>
        <td class ="light"></td>
        </tr>
        <tr>
        <td class ="tname">6</td>
        <td class ="light"></td>
        <td class ="dark"></td>
        <td class ="light"></td>
        <td class ="dark"></td>
        <td class ="light"></td>
        <td class ="dark"><img src={wpawn}></img></td>
        <td class ="light"></td>
        <td class ="dark"></td>
        </tr>
        <tr>
        <td class ="tname">7</td>
        <td class ="dark"><img src={bpawn}></img></td>
        <td class ="light"><img src={bpawn}></img></td>
        <td class ="dark"><img src={bpawn}></img></td>
        <td class ="light"></td>
        <td class ="dark"></td>
        <td class ="light"><img src={bpawn}></img></td>
        <td class ="dark"><img src={bpawn}></img></td>
        <td class ="light"><img src={bpawn}></img></td>
        </tr>
        <tr>
        <td class ="tname">8</td>
        <td class ="light"><img src={bladya}></img></td>
        <td class ="dark"></td>
        <td class ="light"></td>
        <td class ="dark"><img src={bking}></img></td>
        <td class ="light"></td>
        <td class ="dark"><img src={bofficer}></img></td>
        <td class ="light"><img src={bhorse}></img></td>
        <td class ="dark"><img src={bladya}></img></td>
        </tr>
    </tbody>
    </div>
    </Table>
    </>
    )
}