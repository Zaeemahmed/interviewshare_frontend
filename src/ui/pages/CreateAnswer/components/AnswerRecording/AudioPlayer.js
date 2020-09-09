import React from 'react';
import ProgressBar from './components/ProgressBar';
import { Flex } from '../../../../components/Base/Base';
import { Howl } from 'howler';

class AudioPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount = () => {
        this.initialize();
    };

    componentDidUpdate = prevProps => {
        if (prevProps.src !== this.props.src) {
            this.initialize();
        } else if (prevProps.playing !== this.props.playing) {
            this.checkUpdate();
        }
    };

    initialize = () => {
        if (this.howler) {
            this.howler.off();
            this.howler.stop();
            this.howler.unload();
            this.howler = null;
        }
        this.howler = new Howl({
            src: [this.props.src],
            onload: () => {
                this.setState({
                    currentTime: this.howler.seek(),
                    duration: this.howler.duration(),
                });
            },
            onplay: () => {
                requestAnimationFrame(this.progressFrame.bind(this));
            },
            onend: () => {
                this.onEnd();
            },
        }).load();
        this.checkUpdate();
    };

    progressFrame = () => {
        let self = this;
        const seek = this.howler.seek() || 0;
        this.setState({ currentTime: seek });
        if (this.howler.playing()) {
            requestAnimationFrame(self.progressFrame.bind(self));
        }
    };

    checkUpdate = () => {
        const { playing } = this.props;
        if (playing) {
            this.onPlay();
        } else {
            this.onPause();
        }
    };

    onEnd = () => {
        const { setPlaying } = this.props;
        if (this.howler) {
            this.howler.stop();
            setPlaying(false);
        }
    };

    onPause = () => {
        if (this.howler) {
            this.howler.pause();
        }
    };

    onPlay = () => {
        if (this.howler) {
            this.howler.play();
        }
    };

    render = () => {
        return (
            <>
                {this.howler && (
                    <Flex
                        alignItems="center"
                        justifyContent="center"
                        flexDirection="column"
                        mt="25px"
                        width="100%"
                    >
                        <ProgressBar
                            currentTime={this.state.currentTime}
                            duration={this.state.duration}
                            onTimeUpdate={time => {
                                this.setState({ currentTime: time });
                                this.howler.seek(time);
                            }}
                            sound={this.howler}
                        />
                    </Flex>
                )}
            </>
        );
    };
}

export default AudioPlayer;
