export interface BlinkenVideo {
    name: string;
    id: string;
    program: string;
    layer: number;
    channel: number;
    file: string;
    loops: boolean;
}

// const terzakejingles: Jingle[] = [
//     {
//         name: 'TZ_clock',
//         id: 'tz_2024_clock',
//         program: 'Terzake_2024',
//         type: JingleType.Tapijtje,
//         file: TZ_2024_KLOK,
//         loops: false
//     },
//     {
//         name: 'TZ_headlines',
//         id: 'tz_2024_headlines',
//         program: 'Terzake_2024',
//         type: JingleType.Tapijtje,
//         file: TZ_2024_HEADLINES,
//         loops: false
//     },
//     {
//         name: 'TZ_topic_separator',
//         id: 'tz_2024_topic_separator',
//         program: 'Terzake_2024',
//         type: JingleType.Effect,
//         file: TZ_2024_TOPIC_SEPARATOR,
//         loops: false
//     },
//     {
//         name: 'TZ_begingeneriek',
//         id: 'tz_2024_begingeneriek',
//         program: 'Terzake_2024',
//         type: JingleType.Ident,
//         file: TZ_2024_BEGINGENERIEK,
//         loops: false
//     },
//     {
//         name: 'TZ_bumper_topic',
//         id: 'tz_2024_bumper_topic',
//         program: 'Terzake_2024',
//         type: JingleType.Effect,
//         file: TZ_2024_BUMPER_TOPIC,
//         loops: false
//     },
//     {
//         name: 'TZ_bumper_topic_separator',
//         id: 'tz_2024_bumper_topic_separator',
//         program: 'Terzake_2024',
//         type: JingleType.Effect,
//         file: TZ_2024_BUMPER_TOPIC_SEPARATOR,
//         loops: false
//     },
//     {
//         name: 'TZ_moodchange',
//         id: 'tz_2024_moodchange',
//         program: 'Terzake_2024',
//         type: JingleType.Effect,
//         file: TZ_2024_MOODCHANGE,
//         loops: false
//     },
//     {
//         name: 'TZ_bumper',
//         id: 'tz_2024_bumper',
//         program: 'Terzake_2024',
//         type: JingleType.Effect,
//         file: TZ_2024_BUMPER,
//         loops: false
//     },
//     {
//         name: 'TZ_bumper_soft',
//         id: 'tz_2024_bumper_soft',
//         program: 'Terzake_2024',
//         type: JingleType.Effect,
//         file: TZ_2024_BUMPER_SOFT,
//         loops: false
//     },
//     {
//         name: 'TZ_eindtapijt',
//         id: 'tz_2024_eindtapijt',
//         program: 'Terzake_2024',
//         type: JingleType.Tapijtje,
//         file: TZ_2024_EINDTAPIJT,
//         loops: false
//     },
//     {
//         name: 'TZ_ending_credits',
//         id: 'tz_2024_ending_credits',
//         program: 'Terzake_2024',
//         type: JingleType.Ident,
//         file: TZ_2024_OUTRO,
//         loops: false
//     }
// ]

// const dafjingles: Jingle[] = [
//     {
//         name: 'Bedanking',
//         id: 'df_2024_bedanking',
//         program: 'De_afspraak_2024',
//         type: JingleType.Tapijtje,
//         file: DF_2024_BEDANKING,
//         loops: false
//     },
//     {
//         name: 'Beginbumper',
//         id: 'df_2024_beginbumper',
//         program: 'De_afspraak_2024',
//         type: JingleType.Ident,
//         file: DF_2024_BEGINBUMPER,
//         loops: false
//     },
//     {
//         name: 'Begingeneriek',
//         id: 'df_2024_begingeneriek',
//         program: 'De_afspraak_2024',
//         type: JingleType.Ident,
//         file: DF_2024_BEGINGENERIEK,
//         loops: false
//     },
//     {
//         name: 'Bumper 8s A',
//         id: 'df_2024_bumper_a',
//         program: 'De_afspraak_2024',
//         type: JingleType.Effect,
//         file: DF_2024_BUMPER_A,
//         loops: false
//     },
//     {
//         name: 'Bumper 8s B',
//         id: 'df_2024_bumper_b',
//         program: 'De_afspraak_2024',
//         type: JingleType.Effect,
//         file: DF_2024_BUMPER_B,
//         loops: false
//     },
//     {
//         name: 'Eindgeneriek',
//         id: 'df_2024_eindgeneriek',
//         program: 'De_afspraak_2024',
//         type: JingleType.Ident,
//         file: DF_2024_END_CREDITS,
//         loops: false
//     },
//     {
//         name: 'Voorstelling',
//         id: 'df_2024_voorstelling',
//         program: 'De_afspraak_2024',
//         type: JingleType.Tapijtje,
//         file: DF_2024_VOORSTELLING,
//         loops: false
//     },
//     {
//         name: 'Voorstelling Lite',
//         id: 'df_2024_voorstelling_lite',
//         program: 'De_afspraak_2024',
//         type: JingleType.Tapijtje,
//         file: DF_2024_VOORSTELLING_LITE,
//         loops: false
//     },
//     {
//         name: 'Voorstelling Lite 2',
//         id: 'df_2024_voorstelling_lite_2',
//         program: 'De_afspraak_2024',
//         type: JingleType.Tapijtje,
//         file: DF_2024_VOORSTELLING_LITE_2,
//         loops: false
//     }
// ]

// const d7djingles: Jingle[] = [
//     {
//         name: 'Accent 1',
//         id: 'd7_2024_accent_1',
//         program: 'De_zevende_dag_2024',
//         type: JingleType.Effect,
//         file: D7_2024_ACCENT_1,
//         loops: false
//     },
//     {
//         name: 'Accent 2',
//         id: 'd7_2024_accent_2',
//         program: 'De_zevende_dag_2024',
//         type: JingleType.Effect,
//         file: D7_2024_ACCENT_2,
//         loops: false
//     },
//     {
//         name: 'Bedanking',
//         id: 'd7_2024_bedanking',
//         program: 'De_zevende_dag_2024',
//         type: JingleType.Tapijtje,
//         file: D7_2024_BEDANKING,
//         loops: false
//     },
//     {
//         name: 'Begingeneriek',
//         id: 'd7_2024_begingeneriek',
//         program: 'De_zevende_dag_2024',
//         type: JingleType.Ident,
//         file: D7_2024_BEGINGENERIEK,
//         loops: false
//     },
//     {
//         name: 'Bumper Menu',
//         id: 'd7_2024_bumper_menu',
//         program: 'De_zevende_dag_2024',
//         type: JingleType.Effect,
//         file: D7_2024_BUMPER_MENU,
//         loops: false
//     },
//     {
//         name: 'Bumper Muziek',
//         id: 'd7_2024_bumper_muziek',
//         program: 'De_zevende_dag_2024',
//         type: JingleType.Effect,
//         file: D7_2024_BUMPER_MUZIEK,
//         loops: false
//     },
//     {
//         name: 'Bumper Studio',
//         id: 'd7_2024_bumper_studio',
//         program: 'De_zevende_dag_2024',
//         type: JingleType.Effect,
//         file: D7_2024_BUMPER_STUDIO,
//         loops: false
//     },
//     {
//         name: 'Bumper Titel',
//         id: 'd7_2024_bumper_titel',
//         program: 'De_zevende_dag_2024',
//         type: JingleType.Effect,
//         file: D7_2024_BUMPER_TITEL,
//         loops: false
//     },
//     {
//         name: 'Eindgeneriek',
//         id: 'd7_2024_eindgeneriek',
//         program: 'De_zevende_dag_2024',
//         type: JingleType.Ident,
//         file: D7_2024_EINDGENERIEK,
//         loops: false

//     },
//     {
//         name: 'Headlines',
//         id: 'd7_2024_headlines',
//         program: 'De_zevende_dag_2024',
//         type: JingleType.Tapijtje,
//         file: D7_2024_HEADLINES,
//         loops: false
//     },
//     {
//         name: 'Headlines Lite',
//         id: 'd7_2024_headlines_lite',
//         program: 'De_zevende_dag_2024',
//         type: JingleType.Tapijtje,
//         file: D7_2024_HEADLINES_LITE,
//         loops: false
//     },
//     {
//         name: 'Headlines Lite 2',
//         id: 'd7_2024_headlines_lite_2',
//         program: 'De_zevende_dag_2024',
//         type: JingleType.Tapijtje,
//         file: D7_2024_HEADLINES_LITE_2,
//         loops: false
//     },
//     {
//         name: 'Headlines Lite 3',
//         id: 'd7_2024_headlines_lite_3',
//         program: 'De_zevende_dag_2024',
//         type: JingleType.Tapijtje,
//         file: D7_2024_HEADLINES_LITE_3,
//         loops: false
//     },
//     {
//         name: 'Straksfie',
//         id: 'd7_2024_straksfie',
//         program: 'De_zevende_dag_2024',
//         type: JingleType.Tapijtje,
//         file: D7_2024_STRAKSFIE,
//         loops: false
//     },
//     {
//         name: 'Topic Separator',
//         id: 'd7_2024_topic_separator',
//         program: 'De_zevende_dag_2024',
//         type: JingleType.Effect,
//         file: D7_2024_TOPIC_SEPARATOR,
//         loops: false
//     }
// ]

// const weather2017jingles: Jingle[] = [
//     {
//         name: 'i_cloudy',
//         id: 'i_cloudy',
//         program: 'Weer_2017',
//         type: JingleType.Ident,
//         file: WH_2017_INTRO_CLOUDY,
//         loops: false
//     },
//     {
//         name: 'i_fog',
//         id: 'i_fog',
//         program: 'Weer_2017',
//         type: JingleType.Ident,
//         file: WH_2017_INTRO_FOG,
//         loops: false
//     },
//     {
//         name: 'i_thunder',
//         id: 'i_thunder',
//         program: 'Weer_2017',
//         type: JingleType.Ident,
//         file: WH_2017_INTRO_THUNDER,
//         loops: false
//     },
//     {
//         name: 'i_rain',
//         id: 'i_rain',
//         program: 'Weer_2017',
//         type: JingleType.Ident,
//         file: WH_2017_INTRO_RAIN,
//         loops: false
//     },
//     {
//         name: 'i_snow',
//         id: 'i_snow',
//         program: 'Weer_2017',
//         type: JingleType.Ident,
//         file: WH_2017_INTRO_SNOW,
//         loops: false
//     },
//     {
//         name: 'i_sun',
//         id: 'i_sun',
//         program: 'Weer_2017',
//         type: JingleType.Ident,
//         file: WH_2017_INTRO_SUN,
//         loops: false
//     },
//     {
//         name: 'i_sunwinter',
//         id: 'i_sunwinter',
//         program: 'Weer_2017',
//         type: JingleType.Ident,
//         file: WH_2017_INTRO_SUNWINTER,
//         loops: false
//     },
//     {
//         name: 'tapijt',
//         id: 'tapijt',
//         program: 'Weer_2017',
//         type: JingleType.Tapijtje,
//         file: WH_2017_TAPIJT,
//         loops: true
//     },
//     {
//         name: 'Outro',
//         id: 'Outro',
//         program: 'Weer_2017',
//         type: JingleType.Ident,
//         file: WH_2017_OUTRO,
//         loops: false
//     },
//     {
//         name: 'Startsound 1',
//         id: 'Startsound 1',
//         program: 'Weer_2017',
//         type: JingleType.Ident,
//         file: WH_2017_START_SOUND_1,
//         loops: false
//     },
//     {
//         name: 'Startsound 2',
//         id: 'Startsound 2',
//         program: 'Weer_2017',
//         type: JingleType.Ident,
//         file: WH_2017_START_SOUND_2,
//         loops: false
//     },
//     {
//         name: 'Woosh 1',
//         id: 'Woosh 1',
//         program: 'Weer_2017',
//         type: JingleType.Effect,
//         file: WH_2017_WOOSH_1,
//         loops: false
//     },
//     {
//         name: 'Woosh 2',
//         id: 'Woosh 2',
//         program: 'Weer_2017',
//         type: JingleType.Effect,
//         file: WH_2017_WOOSH_2,
//         loops: false
//     },
//     {
//         name: 'Woosh 3',
//         id: 'Woosh 3',
//         program: 'Weer_2017',
//         type: JingleType.Effect,
//         file: WH_2017_WOOSH_3,
//         loops: false
//     }
// ]

// const jnl16jingles: Jingle[] = [
//     {
//         name: 'Opener',
//         id: 'jn_2016_opener',
//         program: 'Journaal_2016',
//         type: JingleType.Tapijtje,
//         file: JN_2016_OPENER,
//         loops: false
//     },
//     {
//         name: 'Wipe 1',
//         id: 'jn_2016_wipe1',
//         program: 'Journaal_2016',
//         type: JingleType.Effect,
//         file: JN_2016_HLWIPE_1,
//         loops: false
//     },
//     {
//         name: 'Wipe 2',
//         id: 'jn_2016_wipe2',
//         program: 'Journaal_2016',
//         type: JingleType.Effect,
//         file: JN_2016_HLWIPE_2,
//         loops: false
//     },
//     {
//         name: 'Wipe 3',
//         id: 'jn_2016_wipe3',
//         program: 'Journaal_2016',
//         type: JingleType.Effect,
//         file: JN_2016_HLWIPE_3,
//         loops: false
//     },
//     {
//         name: 'Wipe 4',
//         id: 'jn_2016_wipe4',
//         program: 'Journaal_2016',
//         type: JingleType.Effect,
//         file: JN_2016_HLWIPE_4,
//         loops: false
//     },
//     {
//         name: 'Intro Long',
//         id: 'jn_2016_intro_long',
//         program: 'Journaal_2016',
//         type: JingleType.Ident,
//         file: JN_2016_INTRO_LONG,
//         loops: false
//     },
//     {
//         name: 'Intro Short',
//         id: 'jn_2016_intro_short',
//         program: 'Journaal_2016',
//         type: JingleType.Ident,
//         file: JN_2016_INTRO_SHORT,
//         loops: false
//     },
//     {
//         name: 'Bumper',
//         id: 'jn_2016_bumper',
//         program: 'Journaal_2016',
//         type: JingleType.Effect,
//         file: JN_2016_BUMPER,
//         loops: false
//     },
//     {
//         name: 'Straks 1',
//         id: 'jn_2016_straks1',
//         program: 'Journaal_2016',
//         type: JingleType.Tapijtje,
//         file: JN_2016_STRAKS1,
//         loops: false
//     },
//     {
//         name: 'Straks 2',
//         id: 'jn_2016_straks2',
//         program: 'Journaal_2016',
//         type: JingleType.Tapijtje,
//         file: JN_2016_STRAKS2,
//         loops: false
//     },
//     {
//         name: 'Shorts',
//         id: 'jn_2016_shorts',
//         program: 'Journaal_2016',
//         type: JingleType.Tapijtje,
//         file: JN_2016_SHORTS,
//         loops: false
//     },
//     {
//         name: 'Weer',
//         id: 'jn_2016_weer',
//         program: 'Journaal_2016',
//         type: JingleType.Tapijtje,
//         file: JN_2016_WEER,
//         loops: false
//     },
//     {
//         name: 'Eind',
//         id: 'jn_2016_eind',
//         program: 'Journaal_2016',
//         type: JingleType.Tapijtje,
//         file: JN_2016_EIND,
//         loops: false
//     },
//     {
//         name: 'Outro',
//         id: 'jn_2016_outro',
//         program: 'Journaal_2016',
//         type: JingleType.Ident,
//         file: JN_2016_OUTRO,
//         loops: false
//     },
//     {
//         name: 'ID logo',
//         id: 'jn_2016_id_logo',
//         program: 'Journaal_2016',
//         type: JingleType.Effect,
//         file: JN_2016_ID_LOGO,
//         loops: false
//     },
//     {
//         name: 'ID Title',
//         id: 'jn_2016_id_title',
//         program: 'Journaal_2016',
//         type: JingleType.Effect,
//         file: JN_2016_ID_TITLE,
//         loops: false
//     },
//     {
//         name: 'ID Video',
//         id: 'jn_2016_id_video',
//         program: 'Journaal_2016',
//         type: JingleType.Tapijtje,
//         file: JN_2016_ID_VIDEO,
//         loops: false
//     }
// ]

// const jnl13jingles: Jingle[] = [
//     {
//         name: 'J_APOTHEOSE',
//         id: 'jn_2013_hl_apotheose',
//         program: 'Journaal_2013',
//         type: JingleType.Ident,
//         file: JN_2013_APOTHEOSE,
//         loops: false
//     },
//     {
//         name: 'J_BEGIN_AFTEL_APOTHEOSE',
//         id: 'jn_2013_begin_aftel_apotheose',
//         program: 'Journaal_2013',
//         type: JingleType.Ident,
//         file: JN_2013_BEGIN_AFTEL_APOTHEOSE,
//         loops: false
//     },
//     {
//         name: 'J_COPYRIGHT',
//         id: 'jn_2013_copyright',
//         program: 'Journaal_2013',
//         type: JingleType.Ident,
//         file: JN_2013_COPYRIGHT,
//         loops: false
//     },
//     {
//         name: 'J_EIND_HL_TAPIJT',
//         id: 'jn_2013_eind_hl_tapijt',
//         program: 'Journaal_2013',
//         type: JingleType.Tapijtje,
//         file: JN_2013_EIND_HL_TAPIJT,
//         loops: false
//     },
//     {
//         name: 'J_HL_JINGLE',
//         id: 'jn_2013_hl_jingle',
//         program: 'Journaal_2013',
//         type: JingleType.Effect,
//         file: JN_2013_HL_JINGLE,
//         loops: false
//     },
//     {
//         name: 'J_IDENT_EINDE',
//         id: 'jn_2013_ident_einde',
//         program: 'Journaal_2013',
//         type: JingleType.Effect,
//         file: JN_2013_IDENT_EINDE,
//         loops: false
//     },
//     {
//         name: 'J_IDENT_LOGO',
//         id: 'jn_2013_ident_logo',
//         program: 'Journaal_2013',
//         type: JingleType.Effect,
//         file: JN_2013_IDENT_LOGO,
//         loops: false
//     },
//     {
//         name: 'J_IDENT_TITEL',
//         id: 'jn_2013_ident_titel',
//         program: 'Journaal_2013',
//         type: JingleType.Effect,
//         file: JN_2013_IDENT_TITEL,
//         loops: false
//     },
//     {
//         name: 'J_IDENT_VIDEO_EIND',
//         id: 'jn_2013_ident_video_eind',
//         program: 'Journaal_2013',
//         type: JingleType.Effect,
//         file: JN_2013_IDENT_VIDEO_EIND,
//         loops: false
//     },
//     {
//         name: 'J_IDENT_VIDEO',
//         id: 'jn_2013_ident_video',
//         program: 'Journaal_2013',
//         type: JingleType.Tapijtje,
//         file: JN_2013_IDENT_VIDEO,
//         loops: false
//     },
//     {
//         name: 'J_IDENT',
//         id: 'jn_2013_ident',
//         program: 'Journaal_2013',
//         type: JingleType.Effect,
//         file: JN_2013_IDENT,
//         loops: false
//     },
//     {
//         name: 'J_KORT_EINDE',
//         id: 'jn_2013_kort_einde',
//         program: 'Journaal_2013',
//         type: JingleType.Ident,
//         file: JN_2013_KORT_EINDE,
//         loops: false
//     },
//     {
//         name: 'J_KORT_TAPIJT',
//         id: 'jn_2013_kort_tapijt',
//         program: 'Journaal_2013',
//         type: JingleType.Tapijtje,
//         file: JN_2013_KORT_TAPIJT,
//         loops: false
//     },
//     {
//         name: 'J_OVER_NAAR_SPORT',
//         id: 'jn_2013_over_naar_sport',
//         program: 'Journaal_2013',
//         type: JingleType.Ident,
//         file: JN_2013_OVER_NAAR_SPORT,
//         loops: false
//     },
//     {
//         name: 'J_WEER_TAPIJT',
//         id: 'jn_2013_weer_tapijt',
//         program: 'Journaal_2013',
//         type: JingleType.Tapijtje,
//         file: JN_2013_WEER_TAPIJT,
//         loops: false
//     },
//     {
//         name: 'J19_BEGIN',
//         id: 'jn_2013_j19_begin',
//         program: 'Journaal_2013',
//         type: JingleType.Ident,
//         file: JN_2013_J19_BEGIN,
//         loops: false
//     },
//     {
//         name: 'J19_HL_234_APOTHEOSE_OK',
//         id: 'jn_2013_j19_hl_234_apotheose_ok',
//         program: 'Journaal_2013',
//         type: JingleType.Ident,
//         file: JN_2013_J19_HL_234_APOTHEOSE_OK,
//         loops: false
//     },
//     {
//         name: 'J19_HL_234_APOTHEOSE_OKOK',
//         id: 'jn_2013_j19_hl_234_apotheose_okok',
//         program: 'Journaal_2013',
//         type: JingleType.Ident,
//         file: JN_2013_J19_HL_234_APOTHEOSE_OKOK,
//         loops: false
//     },
//     {
//         name: 'J19_HL_234',
//         id: 'jn_2013_j19_hl_234',
//         program: 'Journaal_2013',
//         type: JingleType.Tapijtje,
//         file: JN_2013_J19_HL_234,
//         loops: false
//     },
//     {
//         name: 'J19_HL_APOTHEOSE',
//         id: 'jn_2013_j19_hl_apotheose',
//         program: 'Journaal_2013',
//         type: JingleType.Ident,
//         file: JN_2013_J19_HL_APOTHEOSE,
//         loops: false
//     },
//     {
//         name: 'J19_HL1',
//         id: 'jn_2013_j19_hl1',
//         program: 'Journaal_2013',
//         type: JingleType.Tapijtje,
//         file: JN_2013_J19_HL1,
//         loops: false
//     },
//     {
//         name: 'J19_HL234_APOTHEOSE',
//         id: 'jn_2013_j19_hl_234_apotheose',
//         program: 'Journaal_2013',
//         type: JingleType.Ident,
//         file: JN_2013_J19_HL234_APOTHEOSE,
//         loops: false
//     },
//     {
//         name: 'J19_UITSMIJTER',
//         id: 'jn_2013_j19_uitsmijter',
//         program: 'Journaal_2013',
//         type: JingleType.Ident,
//         file: JN_2013_J19_UITSMIJTER,
//         loops: false
//     }

// ]

export const jinglesByProgram: { [program: string]: BlinkenVideo[] } = {
    'Terzake_2024': terzakejingles,
    'De_afspraak_2024': dafjingles,
    'De_zevende_dag_2024': d7djingles,
    'Journaal_2013': jnl13jingles,
    'Journaal_2016': jnl16jingles,
    'Weer_2017': weather2017jingles
}
