import React from 'react'
import {
    Dimmer,
    Loader,
    Segment,
} from 'semantic-ui-react';

const ListLoading = () => {
    return (
        <Segment
            basic
            style={{ minHeight: '300px' }}
        >
            <Dimmer
                active
                inverted
            >
                <Loader inverted>{'Loading'}</Loader>
            </Dimmer>
        </Segment>
    )
}
export default ListLoading;