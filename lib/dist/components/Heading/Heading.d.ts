import React from 'react';
interface Props {
    level: number;
    size: string;
    weight: string;
    className: string;
    children: JSX.Element[] | JSX.Element | string;
}
declare const Heading: (props: Props, { ...rest }: {
    [x: string]: any;
}) => React.ReactElement<{
    className: string;
}, string | ((props: any) => React.ReactElement<any, any> | null) | (new (props: any) => React.Component<any, any, any>)>;
export default Heading;
