import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import DrawIcon from '@mui/icons-material/Draw';
import { Tooltip } from '@mui/material';
import Slider from '@mui/material/Slider';
import Switch from '@mui/material/Switch';


import "../assets/css/AccordionRenderSettings.css"
import { renderModes } from '../assets/utils/constants';

interface AccordionRenderSettingsType{
    dataSize: number;
    callback: any;
    renderMode: number;
    callbackMode: (renderMode:number)=>void;
}

export default function AccordionRenderSettings({dataSize, callback, renderMode, callbackMode}: AccordionRenderSettingsType) {
    const [minData, maxData, step]= renderMode === renderModes.default ? [100, 5000 , 500] : [100, 10000, 500];
  return (
    <div>
        <div className="LBC-TabContainer">
            <div className="LBC-TC-TabItem">    
                <div className="TabItem-icon-containers">
                    <GitHubIcon className="LBC-TC-Icon" />
                    <a href="https://github.com/ashikrai/ReactJS-Virtualized-Render-Optimized" target='_blank'>
                        <Tooltip title="GitHub Repo" placement="right-start">
                            <LaunchIcon className="LBC-TC-Link-Icon" />
                        </Tooltip>
                    </a>
                </div>
                <p>GitHub Repo</p>
                <a href="https://github.com/ashikrai" target='_blank' className="TBC-TC-Link">GitHub Profile</a>
            </div>
            <div className="LBC-TC-TabItem"> 
                <div className="TabItem-icon-containers">
                    <LibraryBooksIcon className="LBC-TC-Icon" />
                    <a href="https://www.npmjs.com/package/@faker-js/faker" target="_blank">
                        <Tooltip title="Faker Library" placement="right-start">
                            <LaunchIcon className="LBC-TC-Link-Icon" />
                        </Tooltip>
                    </a>
                </div>
                <p>Faker Library</p>
                <a href="https://v9.fakerjs.dev/api/" target='_blank' className="TBC-TC-Link">Faker Api Doc</a>
            </div>
            <div className="LBC-TC-TabItem"> 
                <div className="TabItem-icon-containers">
                    <DrawIcon className="LBC-TC-Icon" />
                    <a href="https://www.npmjs.com/package/react-virtualized" target="_blank">
                        <Tooltip title="React-Virtualized" placement="right-start">
                            <LaunchIcon className="LBC-TC-Link-Icon" />
                        </Tooltip>
                    </a>
                </div>
                <p>React-Virtualized</p>
                <a href="https://github.com/bvaughn/react-virtualized" target='_blank' className="TBC-TC-Link">React Virtualized Repo</a>
            </div>
        </div>
        <hr style={{opacity: '0.3'}}/>
        <h1 style={{margin: '3% 0% 0% 0%'}}>Render Settings</h1>
        <div className="inputcontainer">
            <div className="inputTab">
                <h2>User Data Size</h2>
                <p style={{fontSize: 'calc(10px + 0.1vw)'}}>{dataSize} records</p>
                <p style={{fontSize: 'calc(10px + 0.1vw)'}}>{maxData} max records</p>
                <Slider
                    className="sliderInput"
                    aria-label="Data Size"
                    defaultValue={dataSize}
                    getAriaValueText={(value)=>{return `${value}°C`;}}
                    valueLabelDisplay="auto"
                    shiftStep={30}
                    step={step}
                    marks
                    min={minData}
                    max={maxData}
                    onChangeCommitted={(_, value) => callback(value)}
                />
            </div>
            <div className="inputTab">
                <h2>Render Mode</h2>
                <p style={{fontSize: 'calc(10px + 0.1vw)'}}>{renderMode=== renderModes.default ? "Default" : "Optimzed"}</p>
                <Switch 
                    className="switchInput" {...{inputProps: { 'aria-label': 'Render Mode Switch' }}} 
                    color='default'
                    value={renderMode === renderModes.optimized}
                    onChange={(_, value) => {
                        if(value)
                            callbackMode(renderModes.optimized)
                        else
                            callbackMode(renderModes.default)
                    }}
                />
                {/* <Slider
                    className="sliderInput"
                    aria-label="Data Size"
                    defaultValue={30}
                    getAriaValueText={(value)=>{return `${value}°C`;}}
                    valueLabelDisplay="auto"
                    shiftStep={30}
                    step={10}
                    marks
                    min={10}
                    max={110}
                /> */}
            </div>
        </div>
    </div>
  )
}
