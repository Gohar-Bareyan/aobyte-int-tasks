import React from "react";
import { Box, SpeedDial, SpeedDialIcon, SpeedDialAction } from "@mui/material";

class SpeedDialComponent extends React.Component {
  render() {
    const { actions, position } = this.props;
    const speedDialPosition =
      position === "left"
        ? { position: "absolute", bottom: 95, left: 205 }
        : { position: "absolute", bottom: 95, right: 205 };

    return (
      <Box>
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          sx={speedDialPosition}
          icon={<SpeedDialIcon />}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
            />
          ))}
        </SpeedDial>
      </Box>
    );
  }
}

export default SpeedDialComponent;
