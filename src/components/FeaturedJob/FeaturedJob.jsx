import PropTypes from 'prop-types';

const FeaturedJob = ({ job }) => {
    const { logo, job_title } = job;
    return (
        <div>
            <h1>{job_title}</h1>
            <img src={logo} alt="" />
        </div>
    );
};
FeaturedJob.propTypes = {
    job: PropTypes.obj,
}
export default FeaturedJob;