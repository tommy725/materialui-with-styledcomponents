import { SigningCosmosClient } from '@cosmjs/launchpad';
// import axios from 'axios';
// import crypto from 'crypto';

// Create a new instance of the SigningCosmosClient using Keplr wallet
const getClient = async (senderAddress) => {
  const keplr = window.keplr;
  await keplr.enable(process.env.ATOM_CHAIN_ID);
  const offlineSigner = keplr.getOfflineSigner(process.env.ATOM_CHAIN_ID);
  return new SigningCosmosClient(process.env.ATOM_URL, senderAddress, offlineSigner);
};

// Send ATOM from sender to receiver
export const sendAtom = async (senderAddress, amount) => {
  try {
    const client = await getClient();

    // Build the transaction message
    const msgSend = {
      type: 'cosmos-sdk/MsgSend',
      value: {
        from_address: senderAddress,
        to_address: process.env.RECIEVER_ADDRESS,
        amount: [{ denom: 'uatom', amount: String(amount) }],
      },
    };

    // Get the account information for the sender
    const { accountNumber, sequence } = await client.getSequence();

    // Build the transaction object
    const fee = {
      amount: [{ denom: 'uatom', amount: '5000' }],
      gas: '200000',
    };
    const memo = 'Sending ATOM from Keplr wallet';
    const txBody = {
      messages: [msgSend],
      memo: memo,
      fee: fee,
      chainId: process.env.ATOM_CHAIN_ID,
      accountNumber: accountNumber,
      sequence: sequence,
    };

    // Sign the transaction using Keplr wallet
    const signedTx = await client.sign(txBody);

    // Verify the signature of the transaction
    const stdSignDoc = signedTx.value;
    const txData = {
      accountNumber: stdSignDoc.accountNumber.toNumber(),
      chainId: stdSignDoc.chainId,
      fee: stdSignDoc.fee.toObject(),
      memo: stdSignDoc.memo,
      msgs: stdSignDoc.msgs.map((msg) => msg.toObject()),
      sequence: stdSignDoc.sequence.toNumber(),
    };
    // const txDataHash = crypto.createHash('sha256').update(JSON.stringify(txData)).digest('hex');
    // const signature = signedTx.signature.signature;
    // const publicKey = await client.getPubKey();
    // const isValid = crypto.verify(txDataHash, signature, publicKey, 'sha256');

    // if (!isValid) {
    //   throw new Error('Transaction signature is invalid');
    // }

    // Broadcast the transaction to the network
    const broadcastResponse = await client.broadcastTx(signedTx);

    // // Call backend API with token amount, sender address and receiver address using axios
    // const apiResponse = await axios.post('/api/send-token', {
    //   amount: amount,
    //   senderAddress: senderAddress,
    //   receiverAddress: receiverAddress,
    // });

    console.log('Transaction sent successfully:', broadcastResponse);
    // console.log('Backend API response:', apiResponse.data);
  } catch (error) {
    console.error('Error sending transaction:', error);
  }
};
