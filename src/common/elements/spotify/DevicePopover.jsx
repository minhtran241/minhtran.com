import { Popover, Transition } from '@headlessui/react';
import { Fragment } from 'react';

import AnimatedBars from './AnimatedBars';
import { PAIR_DEVICES } from '../../../../data/uses';
import FontAwesomeIcon from '../FontAwesomeIcon';

const DevicePopover = ({ devices, isShow }) => {
    const listDevices = devices?.map((device) => ({
        ...device,
        icon: PAIR_DEVICES[device?.type]?.icon || (
            <FontAwesomeIcon icon="fa-duotone fa-speaker" />
        ),
    }));

    return (
        <Transition
            as={Fragment}
            show={isShow}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
        >
            <Popover.Panel className="absolute bottom-10 right-0 z-20 w-max">
                <div className="flex flex-col gap-5 overflow-hidden rounded-lg px-6 py-5 shadow-lg ring-1 ring-black ring-opacity-5 bg-base-200">
                    {listDevices?.map((device, index) => (
                        <div
                            key={index}
                            className="flex w-full items-center justify-between gap-3"
                        >
                            {device?.icon}
                            <div className="flex flex-grow flex-col pl-0.5 pr-2">
                                <span className="font-sora font-medium">
                                    {device?.name}
                                </span>
                                <span className="text-xs font-light text-gray-500">
                                    {device?.model}
                                </span>
                            </div>
                            {device?.is_active ? (
                                <AnimatedBars variant="bg-green-500" />
                            ) : (
                                <FontAwesomeIcon icon="fa-duotone fa-circle-dot" />
                            )}
                        </div>
                    ))}
                </div>
            </Popover.Panel>
        </Transition>
    );
};

export default DevicePopover;
