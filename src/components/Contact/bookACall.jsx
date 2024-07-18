import { userBasicInfo } from '@/common/constants/userBasic';
import FontAwesomeIcon from '@/common/elements/FontAwesomeIcon';
import Link from 'next/link';

const BookACall = () => {
    return (
        <div className="space-y-5 pb-2">
            <div className="flex flex-row items-center gap-2 text-primary font-semibold lg:text-xl md:text-lg text-base">
                <FontAwesomeIcon icon="fa-duotone fa-headset" />
                <h1 className="capitalize">Book a Call</h1>
            </div>
            <Link
                href={userBasicInfo.bookACallLink}
                target="_blank"
                data-aos-duration="1000"
                className="flex cursor-pointer flex-col space-y-5 rounded-box border bg-gradient-to-tr from-primary to-secondary text-primary-content px-6 py-5"
            >
                <div className="flex items-start justify-between gap-5">
                    <div className="space-y-1">
                        <div className="flex items-center gap-2 lg:text-lg text-sm font-medium md:text-base">
                            <span>Schedule a 1 on 1 meeting</span>
                        </div>
                        <p className="text-sm">
                            {userBasicInfo.fullName}&apos;s calendar is open for
                            booking a call
                        </p>
                    </div>
                    <div className="lg:w-8 lg:h-8 w-7 h-7 inline-flex lg:text-base text-sm border-2 border-primary-content rounded-full items-center justify-center">
                        <FontAwesomeIcon icon="fa-duotone fa-calendar-days" />
                    </div>
                </div>
                <div className="flex items-center gap-5 text-sm">
                    <div className="flex flex-row items-center gap-2">
                        <FontAwesomeIcon icon="fa-duotone fa-clock" />
                        <span>30 Minutes</span>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <FontAwesomeIcon icon="fa-duotone fa-video" />
                        <span>Cal Video (Zoom)</span>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default BookACall;
