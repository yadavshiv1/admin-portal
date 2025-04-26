import { Button } from '@mui/material'

export default function RejectBtn() {
    return (
        <Button variant="outlined" sx={{
            mr: 1,
            backgroundColor: 'rgba(240, 87, 75, 0.1)',
            border: '1px solid rgba(240, 87, 75, 1)',
            borderRadius: '8px',
            color: 'rgba(240, 87, 75, 1)',
        }}>
            Reject
        </Button>
    )
}