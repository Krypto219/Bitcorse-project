import {ChainId} from '@pancakeswap/sdk';
import {Configuration} from './bomb-finance/config';
import {BankInfo} from './bomb-finance';

const configurations: {[env: string]: Configuration} = {
  // development: {
  //   chainId: 97,
  //   networkName: 'BSC Testnet',
  //   ftmscanUrl: 'https://testnet.bscscan.com/',
  //   defaultProvider: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
  //   deployments: require('./bomb-finance/deployments/deployments.testing.json'),
  //   externalTokens: {
  //     WBNB: ['0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18],
  //     FUSDT: ['0x55d398326f99059fF775485246999027B3197955', 18], // This is actually BUSD on mainnet not fusdt
  //     BTCB: ['0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', 18],
  //     ZOO: ['0x09e145a1d53c0045f41aeef25d8ff982ae74dd56', 0],
  //     SHIBA: ['0x9ba3e4f84a34df4e08c112e1a0ff148b81655615', 9],
  //     'USDT-BNB-LP': ['0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16', 18],
  //     'BCE': ['0x2A651563C9d3Af67aE0388a5c8F89b867038089e', 18],
  //     'MCORSE-BNB-LP': ['0x1303246855b5B5EbC71F049Fdb607494e97218f8', 18],
  //   },
  //   baseLaunchDate: new Date('2021-11-21 1:00:00Z'),
  //   bondLaunchesAt: new Date('2020-12-03T15:00:00Z'),
  //   boardroomLaunchesAt: new Date('2020-12-11T00:00:00Z'),
  //   refreshInterval: 10000,
  // },
  development: {
    chainId: 56,
    networkName: 'BSC Mainnet',
    ftmscanUrl: 'https://bscscan.com',
    defaultProvider: 'https://bsc-dataseed.binance.org/',
    deployments: require('./bomb-finance/deployments/deployments.mainnet.json'),
    externalTokens: {
      WBNB: ['0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18],
      FUSDT: ['0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', 18], // This is actually BUSD on mainnet not fusdt
      BUSD: ['0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', 18],
      FTM: ['0xad29abb318791d579433d831ed122afeaf29dcfe', 18],
      ETH: ['0x2170ed0880ac9a755fd29b2688956bd959f933f8',18],
      USDC: ['0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d', 18],
      BTCB: ['0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', 18],
      DOGE: ['0xba2ae424d960c26247dd6c32edc70b295c744c43',8],
      SHIB: ['0x2859e4544C4bB03966803b044A93563Bd2D0DD4D',18],
      'USDT-BNB-LP': ['0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16', 18],
      'BCE-BNB-LP': ['0xbC548E625eAe4480BDE306C738f4c305A2629a81', 18],
      'MCORSE-BNB-LP': ['0x50B3b26d6c1d8519Ad809C0513223AFa20414D19', 18],
      // 'BCE-BTCB-APELP': ['0xB6E85031F313563bF12ea414118978C8BD78db5D', 18],
    },
    baseLaunchDate: new Date('2021-11-20 1:00:00Z'),
    bondLaunchesAt: new Date('2020-12-03T15:00:00Z'),
    boardroomLaunchesAt: new Date('2021-11-20T00:00:00Z'),
    refreshInterval: 10000,
  },
  production: {
    chainId: 56,
    networkName: 'BSC Mainnet',
    ftmscanUrl: 'https://bscscan.com',
    defaultProvider: 'https://bsc-dataseed.binance.org/',
    deployments: require('./bomb-finance/deployments/deployments.mainnet.json'),
    externalTokens: {
      WBNB: ['0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18],
      FUSDT: ['0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', 18], // This is actually BUSD on mainnet not fusdt
      BTCB: ['0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', 18],
      BUSD: ['0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', 18],
      FTM: ['0xad29abb318791d579433d831ed122afeaf29dcfe', 18],
      ETH: ['0x2170ed0880ac9a755fd29b2688956bd959f933f8',18],
      USDC: ['0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d', 18],
      DOGE: ['0xba2ae424d960c26247dd6c32edc70b295c744c43',8],
      SHIB: ['0x2859e4544C4bB03966803b044A93563Bd2D0DD4D',18],
      'USDT-BNB-LP': ['0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16', 18],
      'BCE-BNB-LP': ['0xbC548E625eAe4480BDE306C738f4c305A2629a81', 18],
      'MCORSE-BNB-LP': ['0x50B3b26d6c1d8519Ad809C0513223AFa20414D19', 18],
      // 'MCORSE-BNB-APELP': ['0x0dE2a71b2f43CF588A00422d41E1C02D0E08D552', 18],
      // 'BCE-BTCB-APELP': ['0xB6E85031F313563bF12ea414118978C8BD78db5D', 18],
    },
    baseLaunchDate: new Date('2021-11-20 1:00:00Z'),
    bondLaunchesAt: new Date('2020-12-03T15:00:00Z'),
    boardroomLaunchesAt: new Date('2021-11-20T00:00:00Z'),
    refreshInterval: 10000,
  },
};

export const bankDefinitions: {[contractName: string]: BankInfo} = {
  /*
  Explanation:
  name: description of the card
  poolId: the poolId assigned in the contract
  sectionInUI: way to distinguish in which of the 3 pool groups it should be listed
        - 0 = Single asset stake pools
        - 1 = LP asset staking rewarding BCE
        - 2 = LP asset staking rewarding MCORSE
  contract: the contract name which will be loaded from the deployment.environmnet.json
  depositTokenName : the name of the token to be deposited
  earnTokenName: the rewarded token
  finished: will disable the pool on the UI if set to true
  sort: the order of the pool
  */
  // BceBTCApeLPBceRewardPool: {
  //   name: 'Earn BCE by BCE-BTCB Ape LP',
  //   poolId: 2,
  //   sectionInUI: 1,
  //   contract: 'BceBTCApeLPBceRewardPool',
  //   depositTokenName: 'BCE-BTCB-APELP',
  //   earnTokenName: 'BCE',
  //   finished: true,
  //   sort: 2,
  //   closedForStaking: false,
  // },
  // BceBTCLPBceRewardPool: {
  //   name: 'Earn BCE by BCE-BTC LP',
  //   poolId: 0,
  //   sectionInUI: 1,
  //   contract: 'BceBTCLPBceRewardPool',
  //   depositTokenName: 'BCE',
  //   earnTokenName: 'BCE',
  //   finished: true,
  //   sort: 7,
  //   closedForStaking: false,
  // },
  // BceShibaGenesisRewardPool: {
  //   name: 'Earn BCE by SHIB',
  //   poolId: 4,
  //   sectionInUI: 0,
  //   contract: 'BceShibaGenesisRewardPool',
  //   depositTokenName: 'SHIB',
  //   earnTokenName: 'BCE',
  //   finished: false,
  //   sort: 4,
  //   closedForStaking: false,
  // },
  // BceDogeGenesisRewardPool: {
  //   name: 'Earn BCE by DOGE',
  //   poolId: 5,
  //   sectionInUI: 0,
  //   contract: 'BceDogeGenesisRewardPool',
  //   depositTokenName: 'DOGE',
  //   earnTokenName: 'BCE',
  //   finished: false,
  //   sort: 5,
  //   closedForStaking: false,
  // },
  // BceBTCGenesisRewardPool: {
  //   name: 'Earn BCE by BTCB',
  //   poolId: 3,
  //   sectionInUI: 0,
  //   contract: 'BceBTCGenesisRewardPool',
  //   depositTokenName: 'BTCB',
  //   earnTokenName: 'BCE',
  //   finished: false,
  //   sort: 3,
  //   closedForStaking: false,
  // },
  BceUSDCGenesisRewardPool: {
    name: 'Earn BCE by USDC',
    poolId: 2,
    sectionInUI: 0,
    contract: 'BceUSDCGenesisRewardPool',
    depositTokenName: 'USDC',
    earnTokenName: 'BCE',
    finished: false,
    sort: 2,
    closedForStaking: false,
  },

  BceWBNBGenesisRewardPool: {
    name: 'Earn BCE by WBNB',
    poolId: 0,
    sectionInUI: 0,
    contract: 'BceWBNBGenesisRewardPool',
    depositTokenName: 'WBNB',
    earnTokenName: 'BCE',
    finished: false,
    sort: 0,
    closedForStaking: false,
  },
  BceBUSDGenesisRewardPool: {
    name: 'Earn BCE by BUSD',
    poolId: 1,
    sectionInUI: 0,
    contract: 'BceBUSDGenesisRewardPool',
    depositTokenName: 'BUSD',
    earnTokenName: 'BCE',
    finished: false,
    sort: 1,
    closedForStaking: false,
  },

  BceBnbLPBceRewardPool: {
    name: 'Earn BCE by BCE-BNB LP',
    poolId: 0,
    sectionInUI: 1,
    contract: 'BceBnbLPBceRewardPool',
    depositTokenName: 'BCE-BNB-LP',
    earnTokenName: 'BCE',
    finished: false,
    sort: 8,
    closedForStaking: false,
  },
  // BceShibaRewardPool: {
  //   name: 'Earn BCE by SHIBA',
  //   poolId: 2,
  //   sectionInUI: 0,
  //   contract: 'BceShibaGenesisRewardPool',
  //   depositTokenName: 'SHIBA',
  //   earnTokenName: 'BCE',
  //   finished: false,
  //   sort: 3,
  //   closedForStaking: false,
  // },
  // BceZooRewardPool: {
  //   name: 'Earn BCE by ZOO',
  //   poolId: 3,
  //   sectionInUI: 0,
  //   contract: 'BceZooGenesisRewardPool',
  //   depositTokenName: 'ZOO',
  //   earnTokenName: 'BCE',
  //   finished: false,
  //   sort: 4,
  //   closedForStaking: false,
  // },

  // BceFtmLPBceRewardPoolOld: {
  //   name: 'Earn BCE by BCE-BNB LP',
  //   poolId: 0,
  //   sectionInUI: 1,
  //   contract: 'BceFtmLpBceRewardPoolOld',
  //   depositTokenName: 'BCE-BNB-LP',
  //   earnTokenName: 'BCE',
  //   finished: true,
  //   sort: 9,
  //   closedForStaking: false,
  // },
  // BceFtmLPMcorseRewardPool: {
  //   name: 'Earn MCORSE by BCE-BNB LP',
  //   poolId: 0,
  //   sectionInUI: 2,
  //   contract: 'BceFtmLPMcorseRewardPool',
  //   depositTokenName: 'BCE-BNB-LP',
  //   earnTokenName: 'MCORSE',
  //   finished: false,
  //   sort: 6,
  //   closedForStaking: false,
  // },

  // McorseBnbLPApeMcorseRewardPool: {
  //   name: 'Earn MCORSE by MCORSE-BNB LP',
  //   poolId: 2,
  //   sectionInUI: 2,
  //   contract: 'McorseBnbLPApeMcorseRewardPool',
  //   depositTokenName: 'MCORSE-BNB-LP',
  //   earnTokenName: 'MCORSE',
  //   finished: false,
  //   sort: 7,
  //   closedForStaking: false,
  // },
  // BceBtcbLPApeMcorseRewardPool: {
  //   name: 'Earn MCORSE by BCE-BTCB LP',
  //   poolId: 3,
  //   sectionInUI: 2,
  //   contract: 'BceBtcbLPApeMcorseRewardPool',
  //   depositTokenName: 'BCE',
  //   earnTokenName: 'MCORSE',
  //   finished: false,
  //   sort: 7,
  //   closedForStaking: false,
  // },
  // McorseBnbApeLPMcorseRewardPool: {
  //   name: 'Earn MCORSE by MCORSE-BNB Ape LP',
  //   poolId: 2,
  //   sectionInUI: 2,
  //   contract: 'McorseBnbApeLPMcorseRewardPool',
  //   depositTokenName: 'MCORSE-BNB-APELP',
  //   earnTokenName: 'MCORSE',
  //   finished: true,
  //   sort: 5,
  //   closedForStaking: false,
  // },
  // BceBtcbApeLPMcorseRewardPool: {
  //   name: 'Earn MCORSE by BCE-BTCB Ape LP',
  //   poolId: 3,
  //   sectionInUI: 2,
  //   contract: 'BceBtcbApeLPMcorseRewardPool',
  //   depositTokenName: 'BCE-BTCB-APELP',
  //   earnTokenName: 'MCORSE',
  //   finished: true,
  //   sort: 4,
  //   closedForStaking: false,
  // },
  McorseBnbLPMcorseRewardPool: {
    name: 'Earn MCORSE by MCORSE-BNB LP',
    poolId: 1,
    sectionInUI: 2,
    contract: 'McorseBnbLPMcorseRewardPool',
    depositTokenName: 'MCORSE-BNB-LP',
    earnTokenName: 'MCORSE',
    finished: false,
    sort: 2,
    closedForStaking: false,
  },
  BCEBnbLPMcorseRewardPool: {
    name: 'Earn MCORSE by BCE-BNB LP',
    poolId: 0,
    sectionInUI: 2,
    contract: 'BCEBnbLPMcorseRewardPool',
    depositTokenName: 'BCE-BNB-LP',
    earnTokenName: 'MCORSE',
    finished: false,
    sort: 1,
    closedForStaking: false,
  },
  // BceBtcbLPMcorseRewardPool: {
  //   name: 'Earn MCORSE by BCE-BTCB LP',
  //   poolId: 1,
  //   sectionInUI: 2,
  //   contract: 'BceBtcbLPMcorseRewardPool',
  //   depositTokenName: 'BCE',
  //   earnTokenName: 'MCORSE',
  //   finished: false,
  //   sort: 1,
  //   closedForStaking: false,
  // },
};

export default configurations[process.env.NODE_ENV || 'development'];
