interface CasparAction {
    cmd: 'load' | 'play' | 'clear';
    channel: number;
    layer:  number;
    clip?: string;
}

export const handleCasparCommdand = (act: CasparAction) => {
    switch (act.cmd) {
        case 'load':
            window.casparAPI.load({
                channel: act.channel,
                layer: act.layer,
                clip: act.clip
            });
            break;
        case 'play':
            window.casparAPI.play({
                channel: act.channel,
                layer: act.layer,
                loop: false, // TODO fix me 
                clip: act.clip
            });
            break;
        case 'clear':
            window.casparAPI.clear({
                chan: act.channel,
                layr: act.layer
            });
            break;
        default:
            console.error('Mommy? Unreachable code reached handlecasparcommand')
            break;
    }
}