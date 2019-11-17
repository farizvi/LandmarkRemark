import * as React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Paper,
  Tabs,
  Tab,  
  TextField,
  Typography
} from "@material-ui/core";
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

export interface ModalOptions {
  canAddNote: boolean;
  catchOnCancel?: boolean;
  variant: "danger" | "info";
  title: string;
  description: string;  
}

interface ModalDialogProps extends ModalOptions {
  open: boolean;
  onSubmit: () => void;
  onClose: () => void;
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        <Box p={3}>{children}</Box>
      </Typography>
    );
  }

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export const ModalDialog: React.FC<ModalDialogProps> = ({
  open,
  title,
  variant,
  description,
  canAddNote,
  onSubmit,
  onClose
}) => {
    const [value, setValue] = React.useState(0);
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    return (
    <Dialog open={open}>
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{description}</DialogContentText>
        <Paper square>
            <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="location tabs"           
            >
                <Tab label="Comments" {...a11yProps(0)} />
                {canAddNote && <Tab label="Add Comment" {...a11yProps(1)} /> }
            </Tabs>
            <TabPanel value={value} index={0}>
                Comments will appear here
            </TabPanel>
            {canAddNote && 
              <TabPanel value={value} index={1}>
                  <TextField
                      autoFocus
                      margin="dense"
                      id="username"
                      label="Username"
                      type="text" 
                      fullWidth                       
                  />
                  <br />
                  <TextField                   
                      margin="dense"
                      id="comment"
                      label="Comment"
                      type="text"
                      fullWidth
                      multiline
                      rows="4"
                  />           
                  <br /> 
                  <div style={{ float: 'right', clear: 'both' }}>
                      <Button variant="contained" color="primary">
                          Save
                      </Button>
                  </div>
                  <br />                                                                     
              </TabPanel>
            }            
        </Paper>
      </DialogContent>
      <DialogActions>        
        {variant === "info" && (
          <Button color="primary" onClick={onSubmit}>
            CLOSE
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};