interface BlinkenAction {
    type: 'ccg';
    name: string;
    id: string;
}

export const casperActions: { [group: string]: { [action_id: string]: BlinkenAction } } = {
    'Journaal 2013 J13': {
        'testvid': {
            type: 'ccg',
            name: 'Test Video',
            id: 'testvid'
        },
    }
    // goto sport J_OVER_NAAR_SPORT
    // back to news J_IDENT_LOGO
    /// eindtapijt J_VRTNIEUWSLIVE of weer // is zelfde tapijt, weer == live ingekrot
    // eind J_EIND_HL_TAPIJT
    // J_COPYRIGHT
    // 'jn_2013_opener': {
    //     name: 'Start Journaal',
    //     id: 'jn_2013_opener'
    // },
    // 'jn_2013_ident_logo': {
    //     name: 'Ident Logo', // topic change
    //     id: 'jn_2013_ident_logo'
    // },
    // 'jn_2013_ident_title': {
    //     name: 'Ident Title', // topic change
    //     id: 'jn_2013_ident_title'
    // },
    // 'jn_2013_video_start': {
    //     name: 'Video/straksfie',
    //     id: 'jn_2013_video_start'
    // },
    // 'jn_2013_video_end': {
    //     name: 'Video End',
    //     id: 'jn_2013_video_end'
    // },
    // 'jn_2013_sport': {
    //     name: 'Trans Sport',
    //     id: 'jn_2013_sport'
    // },
    // // back to news: J_IDENT_LOGO
    // 'jn_2013_weer': {
    //     name: 'Weer',
    //     id: 'jn_2013_weer'
    // },
    // 'jn_2013_eind': {
    //     name: 'Eind',
    //     id: 'jn_2013_eind'
    // },
    // 'jn_2013_copyright': {
    //     name: 'Copyright',
    //     id: 'jn_2013_copyright'
    // }
}
};
