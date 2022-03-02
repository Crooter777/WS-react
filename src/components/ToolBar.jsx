import React from 'react';
import '../styles/toolbar.scss'
import ToolState from "../store/toolState";
import Brush from "../tools/Brush";
import canvasState from "../store/canvasState";

const ToolBar = () => {
    return (
        <div className="toolbar">
            <button className="toolbar__btn brush" onClick={() => ToolState.setTool(new Brush(canvasState.canvas))}/>
            <button className="toolbar__btn rect"/>
            <button className="toolbar__btn circle"/>
            <button className="toolbar__btn eraser"/>
            <button className="toolbar__btn line"/>
            <input type="color" style={{marginLeft: 10}}/>
            <button className="toolbar__btn undo"/>
            <button className="toolbar__btn redo"/>
            <button className="toolbar__btn save"/>
        </div>
    );
};

export default ToolBar;