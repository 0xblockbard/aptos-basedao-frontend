import { InputTransactionData } from "@aptos-labs/wallet-adapter-react";
import { MODULE_ADDRESS } from "../../constants";

export type initDaoArguments = {
    dao_identifier: string,
    name: string;
    description: string;
    image_url: string;
};

export const initGuildDao = (args: initDaoArguments): InputTransactionData => {
  
    const { dao_identifier, name, description, image_url } = args;

  return {
    data: {
        function: `${MODULE_ADDRESS}::${dao_identifier}::init_dao`,
        typeArguments: [],
        functionArguments: [
            name,
            description,
            image_url
        ],
    },
  };
};
