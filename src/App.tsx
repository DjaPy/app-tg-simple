import "./App.css";
import { TonConnectButton } from "@tonconnect/ui-react";
import { useMainContract } from "./hooks/useMainContract";
import { useTonConnect } from "./hooks/useTonConnect";

function App() {
    const {
        contract_address,
        counter_value,
        contract_balance,
        sendIncrement,
        sendDeposit,
        sendWithdrawRequest,
    } = useMainContract();

    const { connected } = useTonConnect()
    return (
        <div>
            <div>
                <TonConnectButton />
            </div>
            <div>
                <div className='Card'>
                    <b>Our contract Address</b>
                    <div className='Hint'>{contract_address?.slice(0, 30) + "..."}</div>
                    <b>Our contract Balance</b>
                    { contract_balance && <div className='Hint'>(fromNano{contract_balance})</div> }
                </div>

                <div className='Card'>
                    <b>Counter Value</b>
                    <div>{counter_value ?? "Loading..."}</div>
                </div>
                {connected && (
                    <a onClick={() => {
                        sendIncrement();
                    }}>
                        Increment by 3
                    </a>
                )}
                <br/>
                {connected && (
                    <a onClick={() => {
                        sendDeposit();
                    }}>
                        Request deposit of 0.25 Ton
                    </a>
                )}
                <br/>
                {connected && (
                    <a onClick={() => {
                        sendWithdrawRequest();
                    }}>
                        Request 0.25 Ton withdrawal
                    </a>
                )}
            </div>
        </div>
    );
}

export default App;