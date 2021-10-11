import React from "react";
import { relationToNow } from "../helpers";


export default function RelationToNow(props) {
    if (props.raiseStart && props.raiseEnd) {
        return  relationToNow(props.raiseStart, props.raiseEnd);
    }
    return "";
}
