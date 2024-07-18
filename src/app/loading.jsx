import FontAwesomeIcon from '@/common/elements/FontAwesomeIcon';

const Loading = () => {
    return (
        <div className="grid w-full place-items-center overflow-x-scroll lg:overflow-visible fa-3x h-dvh">
            <FontAwesomeIcon icon="fa-duotone fa-cog fa-spin text-primary" />
        </div>
    );
};

export default Loading;
