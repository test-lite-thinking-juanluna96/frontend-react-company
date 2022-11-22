import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import { Box, Typography } from '@mui/material';
import React from 'react';
import CompaniesTable from './../components/companies/CompaniesTable';

function Companies() {
    return ( 
        <Box sx={{
            backgroundColor: '#000000',
            color: '#f1f1f1',
            textAlign: 'center',
            height: '100vh',
            width: '100vw',
            paddingTop: '20px',
        }}>
            <Typography
                variant="h4"
                component="div"
                gutterBottom
                sx={{
                    color: '#FFC300',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                }}
            >
                <CorporateFareIcon sx={{ 
                    fontSize: 40,
                    marginTop: '5px',
                     }} /> Companies
</Typography>
            <CompaniesTable />
        </Box>
     );
}

export default Companies;