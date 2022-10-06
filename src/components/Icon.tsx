import React from "react";
import cs from 'classnames'

let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try { importAll(require.context('icons', true, /\.svg$/)); } catch (error) { console.log(error); }

type Props = {
    name?: string
} & React.SVGAttributes<SVGElement>
const Icon = (props: Props) => {
    const { name, children, className, ...rest } = props
    console.log(props) // 有data name onClick
    return (
        <svg className={cs('icon', className)} {...rest} onClick={() => {
            console.log(props); // 无data {}
        }}>
            {props.name && <use xlinkHref={'#' + props.name} />}
        </svg>
    )
}

export { Icon };