import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const FooterContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: 'transparent',
    });
const FooterText = styled(Typography)({
    color: '#fff',
    fontSize: '14px',
    textAlign: 'center',
});
const Footer = () => {
    return (
        <FooterContainer>
            <FooterText sx={{ fontSize: { xs: '12px', sm: '14px' } }}>
                © {new Date().getFullYear()} Municipalidad de Chol-Chol
            </FooterText>
        </FooterContainer>
    );
};
export default Footer;


