import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import { routes } from 'routes'

export const NavigationBar = () => {
  return (
    <Box
      sx={{
        typography: 'body1',
        '& > :not(style) + :not(style)': {
          ml: 2,
        },
      }}
    >
      {routes.map((item, index) => {
        return (
          <Link href={item.path} underline="hover" key={index}>{item.name}</Link>
        )}
      )}
      <p></p>
    </Box>
  )
}