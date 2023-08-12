import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";

export const tokenPriceFetchXAUT = async (apikey:string) => {
    if(!Moralis.Core.isStarted){
         await Moralis.start({
    apiKey: apikey,
  });
    }
 

  const address = "0x68749665FF8D2d112Fa859AA293F07A622782F38";

  const chain = EvmChain.ETHEREUM;

  const response = await Moralis.EvmApi.token.getTokenPrice({
    address,
    chain,
  });

  return (response.toJSON()).usdPrice;
};


export const tokenPriceFetchXrp = async (apikey:string) => {
    if(!Moralis.Core.isStarted){
         await Moralis.start({
    apiKey: apikey,
  });
    }
 

  const address = "0x39fBBABf11738317a448031930706cd3e612e1B9";

  const chain = EvmChain.ETHEREUM;

  const response = await Moralis.EvmApi.token.getTokenPrice({
    address,
    chain,
  });

  return (response.toJSON()).usdPrice;
};
