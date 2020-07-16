import React from 'react';

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;

        if (location.state === undefined ) {
            history.push('/');
        }
    }

    render() {
        // render -> componentDidMount 순으로 동작해서 여기서도 redirect 기능 추가해야 함
        const { location } = this.props;
        console.log(location);
        if(location.state) {
            return <span>{ location.state.title } </span>;
        } else {
            return null;
        }
    }
}

export default Detail;