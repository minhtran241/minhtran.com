import { userBasicInfo } from '@/common/constants/userBasic';
import FontAwesomeIcon from '@/common/elements/FontAwesomeIcon';
// import { Calendar, Clock, Headset, Video } from 'lucide-react';
import Link from 'next/link';

const BookACall = () => {
    return (
        <div className="space-y-5 pb-2">
            <div className="flex items-center gap-2 text-[#0033A0] dark:text-white font-semibold lg:text-xl md:text-lg text-base">
                {/* <Headset className="lg:h-6 lg:w-6 h-5 w-5" /> */}
                <FontAwesomeIcon icon="fa-duotone fa-headset" />
                <h1 className="capitalize">Book a Call</h1>
            </div>
            <Link
                href={userBasicInfo.bookACallLink}
                target="_blank"
                data-aos-duration="1000"
                className="flex cursor-pointer flex-col space-y-5 rounded-box border bg-white bg-gradient-to-tr px-6 py-5 dark:border-blue-500  border-[#e2e8f0] from-[#0033A0] to-[#00A3FF] dark:from-blue-600 dark:to-blue-900"
            >
                <div className="flex items-start justify-between gap-5">
                    <div className="space-y-1">
                        <div className="flex items-center gap-2 lg:text-lg text-sm font-medium md:text-base text-white">
                            <span>Schedule a 1 on 1 meeting</span>
                        </div>
                        <p className="text-sm text-gray-300 md:text-base">
                            {userBasicInfo.fullName}&apos;s calendar is open for
                            booking a call
                        </p>
                    </div>
                    <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center text-white">
                        {/* <Calendar className="lg:h-5 lg:w-5 h-4 w-4" /> */}
                        <FontAwesomeIcon icon="fa-duotone fa-calendar-days" />
                    </div>
                </div>
                <div className="flex items-center gap-5 text-sm text-gray-200">
                    <div className="flex items-center gap-2">
                        {/* <Clock className="lg:h-5 lg:w-5 h-4 w-4" /> */}
                        <FontAwesomeIcon icon="fa-duotone fa-clock" />
                        <span>30 Minutes</span>
                    </div>
                    <div className="flex items-center gap-2">
                        {/* <Video className="lg:h-5 lg:w-5 h-4 w-4" /> */}
                        <FontAwesomeIcon icon="fa-duotone fa-video" />
                        <span>Cal Video (Zoom)</span>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default BookACall;
