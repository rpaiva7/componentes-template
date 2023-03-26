
import React from "react";
import { Copywrite } from "./Copywrite";
import { RedesSociais } from "./RedesSociais";

export function Footer () {
    return(
        <footer className="footer" >
        <Copywrite/>
        <RedesSociais/>
        </footer>
    )
}