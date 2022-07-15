import { useState, useEffect } from 'react';
import { Grid, Stack, Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DateRangeIcon from '@mui/icons-material/DateRange';

const DateTimeSection = () => {
    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
        setInterval(() => {
            setDateState(new Date());
        }, 1000);
    }, []);

    return (
        <Grid container justifyContent="flex-end" alignItems="center" spacing={0.5}>
            <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={0}>
                <DateRangeIcon />
                <Typography noWrap>
                    {' '}
                    {dateState.toLocaleDateString(undefined, {
                        weekday: 'long',
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                    })}
                </Typography>
            </Stack>
            <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={0}>
                <AccessTimeIcon />
                <Typography noWrap>
                    {dateState.toLocaleString('en-US', {
                        hour: 'numeric',
                        minute: 'numeric',
                        second: 'numeric',
                        hour12: false
                    })}
                </Typography>
            </Stack>
        </Grid>
    );
};

export default DateTimeSection;
