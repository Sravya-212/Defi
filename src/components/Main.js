import React, {Component} from 'react';
import tether from '../tether.png';
import Airdrop from './Airdrop';

class Main extends Component {
render() {
    console.log(this.props.stakingBalance)
    console.log(this.props.rwdBalance)
    console.log(this.props.tetherBalance)
        return (
            <div id='content' className='mt-3'><b>
                <table className='table text-muted text-center'>
                    <thead>
                    <tr style={{color: 'white'}}>
                        <th scope='col'>STAKING BALANCE</th>
                        <th scope='col'>REWARD BALANCE</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr style={{color: 'white'}}>
                            <td>{window.web3.utils.fromWei(this.props.stakingBalance, 'Ether')} USDT</td>
                            <td>{window.web3.utils.fromWei(this.props.rwdBalance,'Ether')} RWD</td>
                        </tr>
                    </tbody>    
                </table></b>
                <div className='card mb-2'style={{opacity: '.9'}}>
                    <form className='mb-3'>
                        <div style={{borderSpacing:'0 1em'}}>
                            <label className='float-left' style={{marginLeft:'15px'}}><b>Stake Tokens</b></label>
                            <span className='float-right' style={{marginRight:'8px'}}>
                                Balance: {window.web3.utils.fromWei(this.props.tetherBalance,'Ether')}
                            </span>
                            <div className='input-group mb-4'>
                                <input
                                    type='text'
                                    placeholder='0'
                                    required />
                                <div className='input-group-open'>
                                    <div className='input-group-text'>
                                        <img src={tether} alt='tether' height= '32'/>
                                        &nbsp;&nbsp;&nbsp;USDT
                                    </div>
                                </div>
                            </div>
                            <button type='submit' className='btn btn-primary btn-lg btn-block'>DEPOSIT</button>
                        </div>
                    </form>
                    <button type='submit' className='btn btn-primary btn-lg btn-block'>WITHDRAW</button>
                    <div className='card-body text-center' style={{color: '#007bff' }}>
                        <b>AIRDROP</b><Airdrop stakingBalance={this.props.stakingBalance}/> 
                </div>
            </div>
        </div>
        )
    }
}

export default Main;