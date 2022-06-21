import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core/';

import useStyles from './styles';

const VNode = ({ vnode, maplestoryClass }) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={require(`../../../images/vnodes/${maplestoryClass}/${vnode.key}.webp`)} title={vnode.skillName} />
            <Typography className={classes.title} gutterBottom variant="h5" component="h2">{vnode.skillName}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">Priority: {vnode.priority}</Typography>
            </CardContent>
        </Card>
    );
};

export default VNode;
