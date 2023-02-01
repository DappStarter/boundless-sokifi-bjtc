require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give knife fortune silver shock rifle smile purpose hunt forget flower square'; 
let testAccounts = [
"0xb4a032d21c7d4a30fe1c886a2b8c133eb68c10b483983e80aa0df0fb63dd02d1",
"0xb2632f7d6e58b5b9724029d745435e4215bf7ce80a937e432213fdbb04c74b17",
"0x3696028435de053f64f40860ad7dd1fd510c31939d788c25572eb5aa9a8c61f2",
"0x4822e1de122b99073cd80afa9090145c2aebb084ffa4ef7efe7c03ac10484140",
"0xfe8492f910e7f2a9d373bcb3a6bf10dbc5d2d7009ccffbcbfdb06b9683d93531",
"0xffd952015e610a5042a84443dd93a1f98184218d7941d99a821bc138521b38c2",
"0x530c176bcf41004a56d817af171b1b8102b5ce2311a7d7213a6707d296e82e29",
"0xde5461eb4a14bf095edb7b326648903aef9108ff469af1ab77240bac625f1386",
"0x8892a4b5246c94a1bd241eac151233cde579b9f552c697a76be2c6bb868dd69d",
"0xb99911fcd7a906d743d9ddd9947e426d8cf40164ab524cacdf49078055b29cc4"
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
            version: '^0.8.0'
        }
    }
};

