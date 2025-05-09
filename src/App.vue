<template>
    <Error v-if="isError !== ''">{{ isError }}</Error>
    <main v-else class="window glass active" style="box-sizing: border-box; height: 100%; --window-background-color: #15a600;">
        <Fragment class="conto" v-if="!hasLoaded">
            <div class="title-bar" style="-webkit-app-region: drag">
                <div class="title-bar-text">The fucking app loads</div>
            </div>
            <div class="window-body windowcontent has-space">
                <LoadingView @load="hasLoaded = true" />
            </div>
            <div class="status-bar status" style="align-self: flex-end;">
                <p class="status-bar-field">System ready</p>
                <p class="status-bar-field">TBAow</p>
                <p class="status-bar-field">{{ time }}</p>
            </div>
        </Fragment>

        <Fragment v-else>
            <!-- <div class="cont" v-else> -->
            <div class="title-bar" style="-webkit-app-region: drag;">
                <div class="title-bar-text">Blinkenlightz</div>
                <div class="title-bar-controls">
                    <button aria-label="Minimize"></button>
                    <button aria-label="Restore"></button>
                    <button aria-label="Close"></button>
                </div>
            </div>

            <div class="window-body windowcontent has-space">
                <p>Whenever i find the key to success, someone changes the lock</p>
                <img style="position: absolute; top: 30px; right: 5px; height: 75px;" :src="spin" />

                <section class="tabs">
                    <menu role="tablist" aria-label="Sample Tabs">
                        <button @click="activeTab = 'lamp'" role="tab" :aria-selected="activeTab === 'lamp'" aria-controls="tab-A">Lamps</button>
                        <button @click="activeTab = 'caspar'" role="tab" :aria-selected="activeTab === 'caspar'" aria-controls="tab-A">Caspar</button>
                        <button @click="activeTab = 'debug'" role="tab" :aria-selected="activeTab === 'debug'" aria-controls="tab-B">Debug</button>
                    </menu>

                    <article v-if="activeTab === 'lamp'" role="tabpanel" id="tab-A">
                        <div class="actions_view">
                            <p>hi</p>
                            <fieldset v-for="(group, groupName) in jingleActions" :key="groupName">
                                <legend>{{ groupName }}</legend>
                                <button @click="sendjingle(action.id)" v-for="action in group" :key="action.id">{{ action.name }}</button>
                            </fieldset>
                        </div>
                    </article>

                    <article v-if="activeTab === 'debug'" role="tabpanel" id="tab-B">
                        <!-- <div class="button_container"> -->
                        <section class="field-row" style="justify-content: flex-end">
                            <button @click="cClear(1, 1)">Quit</button>
                            <button @click="testplay">Initialize Jingles</button>
                            <button  class="default">Load all</button>
                            <StartBtn>Start</StartBtn>
                        </section>
                        <!-- </div> -->
                    </article>

                    <article role="tabpanel" hidden id="tab-C">

                    </article>
                </section>
            </div>

            <div class="status-bar status" style="align-self: flex-end;">
                <p class="status-bar-field">System ready</p>
                <p class="status-bar-field">
                    <RealtimeLatency :supa_client="supabase" />
                </p>
                <p class="status-bar-field">Last message: N/A</p>
                <p class="status-bar-field">{{ time }}</p>
            </div>
            <!-- </div> -->
        </Fragment>
    </main>
</template>

<script setup lang="ts">
// import { actions } from './audioutils/actions';
import { Howl } from 'howler';
import { onMounted, reactive, ref, onErrorCaptured } from 'vue';

// import { JingleType, jinglesByProgram } from './audioutils/jingles';
import LoadingView from './Views/LoadingView.vue';
import Error from './Views/Error.vue';
import StartBtn from './components/StartBtn.vue'
// import clippymap from './clippy/agents/Clippy/map.png';
import { createClient } from '@supabase/supabase-js';
import RealtimeLatency from './components/RealtimeLatency.vue';
import { jingleActions } from './actions/audio';
import spin from './images/breaking bad jesse we need to cook.gif';
import Fragment from './components/Fragment.vue';
// import {  initCaspar } from './utils/casper'

const hasLoaded = ref(false);
const activeTab = ref<'caspar' | 'lamp' | 'debug'>('debug');

// const caspar = await initCaspar( )
// console.error(caspar)

const caspar = window.casparAPI
const env = import.meta.env
const supabase = createClient(env.VITE_APP_SUPABASE_URL, env.VITE_APP_SUPABASE_KEY)

const bsChannel = supabase.channel('backstage', {
    config: {
        broadcast: { ack: true }
    }
}).subscribe();

const dbg_fields = reactive({
    playJingleId: '',
    playTapijtjeId: '',
    playEffectId: ''
})

let socket = new WebSocket("ws://localhost:8080");
socket.onopen = () => {
    socket.send('Fuck you')
}


bsChannel.on('broadcast', {
    event: 'acknowledge'
}, () => {
    console.log('Event acknowledged');
})


const testplay = () => {
    window.casparAPI.play(1, 1, true, 'go1080p25')
}

const clear = () => {
    window.casparAPI.clear(1, 1)
}

// Debug view  
const selectedItem = ref(null);

// Status bar
const updateClock = () => {
    const date = new Date();
    const formatted = Intl.DateTimeFormat(undefined, { hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(date);
    time.value = formatted;
};
const time = ref('HUUH???');

onMounted(() => {
    setInterval(updateClock, 100);
});


const isError = ref('');
onErrorCaptured((err: any) => {
    console.error('error captured, ', err);
    isError.value = err.message;
    return false;
});
</script>

<style lang="scss" scoped>
.window {
    display: flex;
    flex-direction: column;

    &.glass:before {
        opacity: 0.9;
    }
}

.cont {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.windowcontent {
    /* flex-grow: 1; */
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 6px;
    overflow-y: auto;
}

h1 {
    margin-left: 20px;
    margin-top: 0;
    margin-bottom: 20px;
    color: #fff;
    text-shadow: -10px 10px 0px #00e6e6, -20px 20px 0px #01cccc, -30px 30px 0px #00bdbd;
}

.actions_view {
    fieldset {
        display: flex;
        gap: 6px;
        flex-wrap: wrap;
    }
}

.jingles_old {
    button {
        width: fit-content;
    }
    
    .jingle_thihing_container {
        display: flex;
        gap: 6px;
        flex-wrap: wrap;
    }
}

.debugging_view {
    .debugbuttonctr {
        display: flex;
        gap: 6px;
    }

    .field-row-stacked-but-from-mxm {
        display: flex;
        flex-direction: column;
        gap: 6px;
    }

    .button_container {
        display: flex;
        gap: 6px;
        justify-content: end;
    }
}

.status {
    width: -webkit-fill-available;
//     width: 100%;
//     & p{

//         padding-left: 8px;
//         padding-right: 8px;
//     }
}
</style>
