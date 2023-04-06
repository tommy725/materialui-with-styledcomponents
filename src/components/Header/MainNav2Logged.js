import Logo from "../Shared/Logo";
import ButtonPrimary from "../Shared/Button/ButtonPrimary";
import { Popover } from "@headlessui/react";
import { useCosmosWallet } from "@use-web3wallet/cosmos";
import { IoWalletOutline } from "react-icons/io5";
import Settings from "../Settings";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeChainInfos } from "../../redux/bridge";

const MainNav2Logged = () => {
  const {
    connectTo,
    disconnect,
    isLoading,
    isWalletConnected,
    currentWallet,
    provider,
    chainInfos,
  } = useCosmosWallet();

  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("chainInfos", JSON.stringify(chainInfos));
    dispatch(changeChainInfos(chainInfos))
  }, [chainInfos])

  return (
    <div className={`font-['GRIFTER']  nc-MainNav2Logged relative z-10 ${"onTop "}`}>
      <div className="px-10 py-4 relative flex flex-col sm:flex-row justify-between items-center space-x-4 xl:space-x-8 space-y-4 sm:space-y-0">
        <div className="flex justify-start flex-col sm:flex-row items-center space-x-3 sm:space-x-8 lg:space-x-10 ">
          <Logo className="w-32" />
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative w-full sm:w-96">
            <input type="search" id="default-search" className="block w-full p-2 pl-4 text-base text-gray-900 border border-gray-300 rounded-[11px] focus:ring-blue-500 focus:border-blue-500 bg-transparent dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="NFTS, Collection, Users" required />
            <div className="absolute inset-y-0 right-4 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex">
          <Popover className="relative">
            {({ open }) => (
              <div>
                <Popover.Button
                  // ref={pagesRef}
                  className={`${open ? "" : "text-opacity-90"} group py-3 px-6 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-full inline-flex items-center text-base font-medium hover:text-opacity-100 relative !outline-none`}
                >
                  Pages
                </Popover.Button>
              </div>
            )}
          </Popover>

          <Popover className="relative">
            {({ open }) => (
              <div>
                <Popover.Button
                  // ref={chainRef}
                  className={`${open ? "" : "text-opacity-90"} group py-3 px-6 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-full inline-flex items-center text-base font-medium hover:text-opacity-100 relative !outline-none`}
                >
                  Chains
                </Popover.Button>
              </div>
            )}
          </Popover>
          <Settings />
        </div>
        {!isLoading ?
          isWalletConnected ? (
            <ButtonPrimary
              sizeClass="px-4 py-2 sm:px-5"
              onClick={() => disconnect()}
            >
              <IoWalletOutline size={22} />
              <span className="pl-2">
                disconnect
              </span>
            </ButtonPrimary>
          ) : (
            <ButtonPrimary
              sizeClass="px-4 py-2 sm:px-5"
              onClick={() => connectTo("Keplr")}
            >
              <IoWalletOutline size={22} />
              <span className="pl-2">
                Wallet Connect
              </span>
            </ButtonPrimary>
          )
          :
          <ButtonPrimary
            sizeClass="px-4 py-2 sm:px-5"
          >
            <IoWalletOutline size={22} />
            <span className="pl-2">
              loading...
            </span>
          </ButtonPrimary>
        }
      </div>
    </div>
  );
};

export default MainNav2Logged;
