import React, { Component } from 'react'
import Styles from './css/ErrorPage.module.css';

class ErrorPage extends Component {
    render() {
        return (
            <div>
                <div className={Styles['td_error']}>
  <div className={Styles['td_error_']}>
    Page not found
    
    <div className={Styles['td_error_404']}>
      404

      <div className={Styles['td_error_404_']}>404</div>

      <div className={Styles['td_error_404_']}>404</div>
    </div>
  </div>
</div>
            </div>
        )
    }
}

export default ErrorPage
