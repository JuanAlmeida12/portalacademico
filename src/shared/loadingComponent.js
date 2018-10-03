import React from 'react'
import { connect } from 'react-redux'
import OverlayLoader from 'react-overlay-loading/lib/OverlayLoader'

class CustomLoading extends React.Component {
    render() {
        return (
            <OverlayLoader
                active={ this.props.loading }
                color={'yellow'}
                loader="PacmanLoader"
                opacity="1"
                text='Carregando...'
                >
                <div hidden= {this.props.loading}>
                    {this.props.children}
                </div>
                <div hidden= {!this.props.loading} style={ {with: '100vw', height: '100vh'} }>
                </div>
            </OverlayLoader>
        )
    }
}

const mapStateToProps = state => ({ loading: state.loading })
  
export default connect(mapStateToProps)(CustomLoading)