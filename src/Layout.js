// in src/MyLayout.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircularProgress from 'material-ui/CircularProgress';
import {
    AdminRoutes,
    Sidebar,
    Notification,
    setSidebarVisibility as setSidebarVisibilityAction
} from 'admin-on-rest';
import AppBar from './AppBar';

//injectTapEventPlugin();

const styles = {
    wrapper: {
        // Avoid IE bug with Flexbox, see #467
        display: 'flex',
        flexDirection: 'column',
    },
    main: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    body: {
        backgroundColor: '#edecec',
        display: 'flex',
        flex: 1,
        overflowY: 'hidden',
        overflowX: 'scroll',
    },
    content: {
        flex: 1,
        padding: '2em',
    },
    loader: {
        position: 'absolute',
        top: 0,
        right: 0,
        margin: 16,
        zIndex: 1200,
    },
    button: {
        backgroundColor: 'transparent',
        color: 'white'
    },
};

class Layout extends Component {
    componentWillMount() {
        this.props.setSidebarVisibility(true);
    }

    render() {
        const {
            authClient,
            customRoutes,
            dashboard,
            isLoading,
            menu,
            resources,
            title,
            width,
        } = this.props;
        return (
            <MuiThemeProvider>
                <div style={styles.wrapper}>
                    <div style={styles.main}>
                        <AppBar title={title} />
                        <div className="body" style={styles.body}>
                            <div style={styles.content}>
                                <AdminRoutes
                                    customRoutes={customRoutes}
                                    resources={resources}
                                    authClient={authClient}
                                    dashboard={dashboard}
                                />
                            </div>
                            <Sidebar>
                                {menu}
                            </Sidebar>
                        </div>
                        <Notification />
                        {isLoading && <CircularProgress
                            color="#fff"
                            size={width === 1 ? 20 : 30}
                            thickness={2}
                            style={styles.loader}
                        />}
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

Layout.propTypes = {
    authClient: PropTypes.func,
    customRoutes: PropTypes.array,
    dashboard: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    isLoading: PropTypes.bool.isRequired,
    menu: PropTypes.element,
    resources: PropTypes.array,
    setSidebarVisibility: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    width: PropTypes.number,
};

function mapStateToProps(state) {
    return {
        isLoading: state.admin.loading > 0,
    };
}

export default connect(mapStateToProps, {
    setSidebarVisibility: setSidebarVisibilityAction,
})(Layout);
