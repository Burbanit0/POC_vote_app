import React, {useState} from 'react';
import { Button, ButtonGroup, TextField } from '@mui/material';

interface Total {
    total: number;
    add?: () => void;
    sub?: () => void;
}

export default function Weight(props: Total) {
    let [value, setValue] = useState(0);

    return (
        <ButtonGroup size='small'>
             <Button onClick={props.sub}>
                - 
            </Button>
            <TextField disabled size='small' value={value}>
            </TextField>
            <Button onClick={props.add}>
                +
            </Button>
        </ButtonGroup>
       
    )
}