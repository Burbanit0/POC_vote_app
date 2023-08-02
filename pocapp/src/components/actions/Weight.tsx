import React, {useState} from 'react';
import { Button, ButtonGroup, TextField } from '@mui/material';

interface Total {
    total: number;
    add?: (value:number) => void;
    sub?: (value:number) => void;
}

export default function Weight(props: Total) {
    let [value, setValue] = useState(0);

    function clickAdd() {
        if(props.add !== undefined && props.total > 0) {
            props.add(value);
            console.log(props.total);
            setValue(value+1);
        }
    }
    function clickSub() {
        if (props.sub !== undefined && props.total < 100 && value > 0) {
            props.sub(value);
            console.log(props.total);
            setValue(value-1);
        }
    }

    return (
        <ButtonGroup size='small'>
             <Button onClick={() => clickSub()}>
                - 
            </Button>
            <TextField disabled size='small' value={value}>
            </TextField>
            <Button onClick={() => clickAdd()}>
                +
            </Button>
        </ButtonGroup>
    )
}