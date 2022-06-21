import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import VNode from "./vnode/VNode";
import useStyles from './styles';

const VNodes = ({ msClass }) => {
    const vnodes = useSelector((state) => state.vnodes);
    const classes = useStyles();

    return (
        !Object.keys(vnodes).length ? <CircularProgress /> : (
            Object.keys(vnodes).map((msClass) => (
                <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                    {vnodes[msClass].map((vnode) => (
                        <Grid key={vnode.key} item xs={12} sm={6} md={6}>
                            <VNode vnode={vnode} maplestoryClass={msClass} />
                        </Grid>
                    ))}
                </Grid>
            ))
        )
    );
};

export default VNodes;
