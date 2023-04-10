import { AppBar, Box, Link, Toolbar, Typography } from '@material-ui/core';
import logo from '../../assets/images/logo-light.png';

const pages = [
    { title: 'Dashboard', href: '#' },
    { title: 'Bridge', href: '#' },
    { title: 'Lock', href: '#' }
];

const Header = ({ className }) => {
    return (
        <Box sx={{
            '& .MuiPaper-root': {
                paddingTop: '20px',
                paddingBottom: '20px'
            }
        }}>
            <AppBar position="static">
                <Toolbar disableGutters className="!min-h-[55px]">
                    <img
                        className="h-[55px] mx-[100px]"
                        src={logo}
                        alt="logo"
                    />
                    <Box className='flex items-center'>
                        {pages.map((page) => (
                            <Link
                                className='text-[#fff]'
                                key={page.title}
                                href={page.href}
                                underline="none"
                            >
                                <Typography className='pr-[50px]'>{page.title}</Typography>
                            </Link>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
};

export default Header;