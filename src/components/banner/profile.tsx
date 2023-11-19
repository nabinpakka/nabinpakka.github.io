import HiIcon from '@app/components/icons/hi-icon';

export default function BannerProfile() {
    return (
        <div className="col-lg-6 ps-xl-5 mb-lg-0 mb-5">
            <div className="home-image text-center">
                <div className="hi-icon-bottom motion-safe:animate-spin">
                    <HiIcon />
                </div>
                <img src="assets/img/me.png" alt="title" />
            </div>
        </div>
    );
}
