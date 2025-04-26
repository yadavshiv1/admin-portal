import { Button } from '@mui/material'

export default function ApproveBtn() {
    return (
        <Button variant="contained" sx={{
            mr: 1,
            backgroundColor: '#259CE5',
            border: '1px solid rgba(37, 156, 229, 1)',
            borderRadius: '8px',
            color: '#FFFFFF',
        }}>
            Approve
        </Button>
    )
}