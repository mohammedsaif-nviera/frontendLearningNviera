import { Button } from "@mui/material"
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';

const MuiButton = () => {
  return (
    <div>
        <Button variant="text">Text</Button>
        <br/>
<Button variant="contained">Contained</Button>
<br/>
<br/>
<Button variant="outlined">Outlined</Button>
<br/>
<LoadingButton
  loading
  loadingPosition="start"
  startIcon={<SaveIcon />}
  variant="outlined"
>
  Save
</LoadingButton>
    </div>
  )
}

export default MuiButton