const FeaturesBanner = () => {
  return (
    <section className="w-full bg-gradient-purple py-6 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-base lg:text-lg text-primary-foreground font-medium flex flex-wrap items-center justify-center gap-4">
          <span>Paid Internship Opportunities</span>
          <span className="hidden sm:inline">•</span>
          <span>Modern Lab Facilities</span>
          <span className="hidden sm:inline">•</span>
          <span>Industry-Ready Curriculum</span>
        </p>
      </div>
    </section>
  );
};

export default FeaturesBanner;
