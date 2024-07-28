import { useState } from 'react';
import { ethers, formatEther } from 'ethers';
import { useDispatch } from 'react-redux';
import { changeUser } from '../redux/userSlice';

type WalletConnection = {
    errorMessage: string | null;
    connectWalletHandler: () => Promise<void>;
};


export function useWalletConnection(): WalletConnection {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const dispatch = useDispatch()

    const connectWalletHandler = async (): Promise<void> => {
        if (window.ethereum) {
            try {
                const provider = new ethers.BrowserProvider(window.ethereum);

                const signer = await provider.getSigner();
                const address = await signer.getAddress();
                const balanceBigint = await provider.getBalance(address);
                const balance = formatEther(balanceBigint);

                dispatch(changeUser({ address, balance }))

            } catch (error) {
                setErrorMessage('Something went wrong!')
            }

        } else {
            setErrorMessage('Please download MetaMask!');
        }
    };


    return { errorMessage, connectWalletHandler }
}
