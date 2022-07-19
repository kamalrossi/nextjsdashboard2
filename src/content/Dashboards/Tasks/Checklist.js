import {
  Box,
  CardHeader,
  Typography,
  IconButton,
  FormControlLabel,
  Checkbox,
  FormGroup,
  Tooltip,
  styled
} from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import RefreshTwoToneIcon from '@mui/icons-material/RefreshTwoTone';
import AssignmentTwoToneIcon from '@mui/icons-material/AssignmentTwoTone';
import AccountTreeTwoToneIcon from '@mui/icons-material/AccountTreeTwoTone';
import BusinessCenterTwoToneIcon from '@mui/icons-material/BusinessCenterTwoTone';

const TimelineWrapper = styled(Timeline)(
  ({ theme }) => `
    margin-left: ${theme.spacing(2)};

    .MuiTimelineDot-root {
      left: -${theme.spacing(2)};
      margin-top: 0;
      top: ${theme.spacing(0.5)};
    }
    
    .MuiTimelineContent-root {
      padding-left: ${theme.spacing(4)};
    }
    
    .MuiFormControlLabel-root {
      margin-left: -${theme.spacing(0.7)};
    }
    
    .MuiFormControlLabel-label {
      color: ${theme.colors.alpha.black[50]};
    }
`
);

const CheckboxWrapper = styled(Checkbox)(
  ({ theme }) => `
    padding: ${theme.spacing(0.5)};
`
);

function Checklist() {
  return (
    <Box>
      <CardHeader
        sx={{
          px: 0,
          pt: 0
        }}
        action={
          <Tooltip arrow title="Refresh list">
            <IconButton size="small" color="primary">
              <RefreshTwoToneIcon />
            </IconButton>
          </Tooltip>
        }
        title="Upcoming Events"
      />
      <TimelineWrapper>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <AssignmentTwoToneIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography
              variant="h4"
              sx={{
                pb: 2
              }}
            >
              "Summer Special Issue"
            </Typography>
            <FormGroup>
              <FormControlLabel
                control={<CheckboxWrapper color="primary" name="checkedC" />}
                label="Fashion blog modification"
              />
              <FormControlLabel
                control={<CheckboxWrapper color="primary" name="checkedC" />}
                label="Feature page preparation"
              />
              <FormControlLabel
                control={<CheckboxWrapper color="primary" name="checkedC" />}
                label="Sports issue preparation"
              />
            </FormGroup>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <AccountTreeTwoToneIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography
              variant="h4"
              sx={{
                pb: 2
              }}
            >
              "Winter Issue Preparation"
            </Typography>
            <FormGroup>
              <FormControlLabel
                control={<CheckboxWrapper color="primary" name="checkedC" />}
                label="Winter Food Festival Cover"
              />
              <FormControlLabel
                control={<CheckboxWrapper color="primary" name="checkedC" />}
                label="Winter Fashion Blog Preparation"
              />
            </FormGroup>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <BusinessCenterTwoToneIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography
              variant="h4"
              sx={{
                pb: 2
              }}
            >
              "Spring Arrangements"
            </Typography>
            <FormGroup>
              <FormControlLabel
                control={<CheckboxWrapper color="primary" name="checkedC" />}
                label="Marketing campaign for new season"
              />
              <FormControlLabel
                control={<CheckboxWrapper color="primary" name="checkedC" />}
                label="Contract deal with new clients"
              />
            </FormGroup>
          </TimelineContent>
        </TimelineItem>
      </TimelineWrapper>
    </Box>
  );
}

export default Checklist;
