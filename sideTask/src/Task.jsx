import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function TaskItem({tasks,removeTask,check}){
    let labelId = `checkbox-list-label-${tasks.id}`;
        return (
              <ListItem
                key={tasks.id}
                secondaryAction={
                  <IconButton edge="end" aria-label="comments" onClick={removeTask}>
                    <DeleteForeverIcon />
                  </IconButton>
                }
                disablePadding
              >
                <ListItemButton role={undefined} dense>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={tasks.accomplished}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ 'aria-labelledby': labelId }}
                      onChange={check}
                    />
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={tasks.mission} />
                </ListItemButton>
              </ListItem>
            );
            
}