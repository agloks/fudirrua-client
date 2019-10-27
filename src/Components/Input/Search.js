import React from 'react';
import InputBase from "@material-ui/core/InputBase"


export default function OutlinedTextFields() {
  
  return (
      <InputBase
        placeholder="Search you love here..."
        inputProps={{ 'aria-label': 'search' }}
      />
  )
}