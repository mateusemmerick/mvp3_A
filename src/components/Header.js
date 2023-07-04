import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';

export default function Header() {
    return (
        <AppBar
            position="static"
            color="default"
            elevation={0}
            sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
            <Toolbar sx={{ flexWrap: 'wrap' }}>
                <Typography variant="h5" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                    Serviços Já
                </Typography>
                <nav>
                    <RouterLink to="/">
                        <Link
                            variant="button"
                            color="text.primary"
                            sx={{ my: 1, mx: 1.5 }}
                        >
                            Início
                        </Link>
                    </RouterLink>
                    <RouterLink to='/servicos'>
                        <Link
                            variant="button"
                            color="text.primary"                            
                            sx={{ my: 1, mx: 1.5 }}
                        >
                            Serviços
                        </Link>
                    </RouterLink>
                    <RouterLink to='/sobre'>
                    <Link
                        variant="button"
                        color="text.primary"                        
                        sx={{ my: 1, mx: 1.5 }}
                    >
                        Sobre
                    </Link>
                    </RouterLink>
                </nav>
            </Toolbar>
        </AppBar>

    )
}
