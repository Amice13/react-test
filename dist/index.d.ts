import React from 'react';

interface ButtonProps {
    label: string;
}
declare const Button: (props: ButtonProps) => React.JSX.Element;

declare const Users: () => React.JSX.Element;

export { Button, Users };
