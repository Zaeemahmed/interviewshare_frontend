import React from 'react';
import PlayRecording from './components/PlayRecording';
import PauseRecording from './components/PauseRecording';
import ProgressBar from './components/progressbar';
import { Flex, Box } from '../Base/Base';
import { Howl } from 'howler';

class AudioPlayer extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount = () => {
        this.initialize();
    };

    componentDidUpdate = prevProps => {
        if (prevProps.src != this.props.src) {
            this.howler.unload();
            this.initialize();
        }
    };

    initialize = () => {
        this.howler = new Howl({
            src: this.props.src,
            onload: this.configState,
            onplay: () => {
                requestAnimationFrame(this.progressFrame.bind(this));
            },
            onend: () => {
                this.onEnd();
                this.setState({ isPlaying: false });
            },
        });
    };

    progressFrame = () => {
        let self = this;
        const seek = this.howler.seek() || 0;
        this.setState({ currentTime: seek });
        if (this.howler.playing()) {
            requestAnimationFrame(self.progressFrame.bind(self));
        }
    };

    configState = () => {
        this.setState({
            isLoading: false,
            isPlaying: false,
            currentTime: this.howler.seek(),
            duration: this.howler.duration(),
        });
    };

    onEnd = () => {
        if (this.howler) {
            this.howler.stop();
        }
    };

    onPause = () => {
        this.howler.pause();
        this.howler.seek(this.howler.seek());
        this.setState({ currentTime: this.howler.seek(), isPlaying: false });
    };

    onPlay = () => {
        this.howler.play();
        this.setState({ isPlaying: true });
    };

    render = () => {
        return (
            <Box>
                <Flex
                    alignItems="center"
                    justifyContent="center"
                    flexDirection="column"
                    mt="25px"
                >
                    <ProgressBar
                        currentTime={this.state.currentTime}
                        duration={this.state.duration}
                        onTimeUpdate={time => {
                            this.setState({ currentTime: time });
                            this.howler.seek(time);
                        }}
                    />
                    {this.state.isPlaying ? (
                        <PauseRecording handleClick={this.onPause} />
                    ) : (
                        <PlayRecording handleClick={this.onPlay} />
                    )}
                    <br />
                </Flex>
            </Box>
        );
    };
}

export default AudioPlayer;
