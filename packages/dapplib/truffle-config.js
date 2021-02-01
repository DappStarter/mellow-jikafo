require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope clock brand ten index release pizza history grid kangaroo army gesture'; 
let testAccounts = [
"0x6c749d61b6f9e49d66320c7ed33c4ef7f531f78b9c244a3f356b2349a9b87daf",
"0x5f6d61bcda0c195294090221b5829d8edb926853697ddb50de6ea4818aa71086",
"0x4d59656484b3c800ad65ac159ddcc8d68d21515a827108a2ba26216ffdaec84b",
"0x06a21d4f5016fcb57ef92f920f2348115cfcda3bf2c9ae1fd4a2893bb34d5f1e",
"0xf68861c5cfc6ee472d1462a8379f325153fd8642c8f8514b348e442dfc281514",
"0x6830e159c864721a3a74215079c8f287460e3d22701f70ca927c457bbd33295d",
"0xb7ef0cfb8f74faf738844bb2394a935364210b71262780d0ea743559abf22cb7",
"0xea2e5e358f45ce3bd0ca36bfc31abb4cdb4a169ab8d0e80018a914fb96eb3f30",
"0xc5b9fff884854f6e7d61df680c7f139ab2682ca9822f25c40a81dc2e98dc2b1d",
"0xa75ebd14b828abdee9a30910f61afb20719636de11e185b05beb6a275acf7e78"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
