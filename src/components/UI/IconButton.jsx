import { log } from '../../log.js';
import { memo } from 'react';


// here i use memo but the rerender happens because the value in ...props changed , you can see in the respective parent component to solve this we use useCallback
const IconButton = memo(function IconButton({ children, icon, ...props }) {
  log('<IconButton /> rendered', 2);  

  const Icon = icon;
  return (
    <button {...props} className="button">
      <Icon className="button-icon" />
      <span className="button-text">{children}</span>
    </button>
  );
}) 

export default IconButton;
