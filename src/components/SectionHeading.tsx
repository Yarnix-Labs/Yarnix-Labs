interface Props {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: Props) => (
  <div className="text-center mb-12 md:mb-16">
    <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
    {subtitle && <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

export default SectionHeading;
