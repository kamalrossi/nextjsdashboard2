import {
  Box,
  Grid,
  Typography,
  Avatar,
  Badge,
  Tooltip,
  useTheme,
  LinearProgress,
  styled
} from '@mui/material';
import { formatDistance, subDays, subMinutes, subHours } from 'date-fns';
import Text from 'src/components/Text';

const DotLegend = styled('span')(
  ({ theme }) => `
    border-radius: 22px;
    width: ${theme.spacing(1.5)};
    height: ${theme.spacing(1.5)};
    display: inline-block;
    margin-right: ${theme.spacing(0.5)};
    border: ${theme.colors.alpha.white[100]} solid 2px;
`
);

const AvatarWrapper = styled(Avatar)(
  ({ theme }) => `
    width: ${theme.spacing(7)};
    height: ${theme.spacing(7)};
`
);

const LinearProgressWrapper = styled(LinearProgress)(
  ({ theme }) => `
        flex-grow: 1;
        height: 10px;
        
        &.MuiLinearProgress-root {
          background-color: ${theme.colors.alpha.black[10]};
        }
        
        .MuiLinearProgress-bar {
          border-radius: ${theme.general.borderRadiusXl};
        }
`
);

function TeamOverview() {
  const theme = useTheme();

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={4}>
        <Box>
          <Box display="flex" alignItems="center" pb={3}>
            <Badge
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
              }}
              overlap="circular"
              badgeContent={
                <Tooltip
                  arrow
                  placement="top"
                  title={
                    'Offline since ' +
                    formatDistance(subDays(new Date(), 14), new Date(), {
                      addSuffix: true
                    })
                  }
                >
                  <DotLegend
                    style={{ background: `${theme.colors.error.main}` }}
                  />
                </Tooltip>
              }
            >
              <AvatarWrapper
                alt="Remy Sharp"
                src="/static/images/avatars/polish3.png"
              />
            </Badge>
            <Box
              sx={{
                ml: 1.5
              }}
            >
              <Typography variant="h4" noWrap gutterBottom>
                Jordana Margareta
              </Typography>
              <Typography variant="subtitle2" noWrap>
                Tech Blogger
              </Typography>
            </Box>
          </Box>

          <Typography variant="subtitle2" gutterBottom>
            <Text color="black">4</Text> out of <Text color="black">6</Text>{' '}
            tasks completed
          </Typography>
          <LinearProgressWrapper
            value={65}
            color="primary"
            variant="determinate"
          />
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box>
          <Box display="flex" alignItems="center" pb={3}>
            <Badge
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
              }}
              overlap="circular"
              badgeContent={
                <Tooltip
                  arrow
                  placement="top"
                  title={
                    'Online since ' +
                    formatDistance(subMinutes(new Date(), 6), new Date(), {
                      addSuffix: true
                    })
                  }
                >
                  <DotLegend
                    style={{ background: `${theme.colors.success.main}` }}
                  />
                </Tooltip>
              }
            >
              <AvatarWrapper
                alt="Mendela Zuana"
                src="/static/images/avatars/polish2.png"
              />
            </Badge>
            <Box
              sx={{
                ml: 1.5
              }}
            >
              <Typography variant="h4" noWrap gutterBottom>
                Mendela Zuana
              </Typography>
              <Typography variant="subtitle2" noWrap>
                Fashion Blogger
              </Typography>
            </Box>
          </Box>

          <Typography variant="subtitle2" gutterBottom>
            <Text color="black"></Text> Contributor of <Text color="black">10</Text>{' '}
            posts
          </Typography>
          <LinearProgressWrapper
            value={25}
            color="primary"
            variant="determinate"
          />
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box>
          <Box display="flex" alignItems="center" pb={3}>
            <Badge
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
              }}
              overlap="circular"
              badgeContent={
                <Tooltip
                  arrow
                  placement="top"
                  title={
                    'Offline since ' +
                    formatDistance(subHours(new Date(), 7), new Date(), {
                      addSuffix: true
                    })
                  }
                >
                  <DotLegend
                    style={{ background: `${theme.colors.error.main}` }}
                  />
                </Tooltip>
              }
            >
              <AvatarWrapper
                alt="Kurnikova Mihaela"
                src="/static/images/avatars/polish1.png"
              />
            </Badge>
            <Box
              sx={{
                ml: 1.5
              }}
            >
              <Typography variant="h4" noWrap gutterBottom>
                Kurnikova Mihaela
              </Typography>
              <Typography variant="subtitle2" noWrap>
                Climate Blogger
              </Typography>
            </Box>
          </Box>

          <Typography variant="subtitle2" gutterBottom>
            <Text color="black"></Text> contributor of <Text color="black">20</Text>{' '}
            posts
          </Typography>
          <LinearProgressWrapper
            value={50}
            color="primary"
            variant="determinate"
          />
        </Box>
      </Grid>
    </Grid>
  );
}

export default TeamOverview;
