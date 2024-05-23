import classNames from 'classnames';

interface GenericTitleProps {
  title: string | undefined;
  subtitle?: string | undefined;
  isMobile?: boolean;
  isDesktop?: boolean;
  titleClass?: string;
  subtitleClass?: string;
  containerClass?: string;
}

/**
 * `GenericTitle` component displays a title and an optional subtitle with responsive visibility.
 * It uses Tailwind CSS for styling and classNames for conditional class names.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {string} props.title - The main title text.
 * @param {string} [props.subtitle] - The optional subtitle text.
 * @param {boolean} [props.isMobile=false] - If true, the component is visible only on mobile devices.
 * @param {boolean} [props.isDesktop=false] - If true, the component is visible only on desktop devices.
 * @param {string} [props.titleClass='text-2xl font-semibold'] - Additional classes for the title.
 * @param {string} [props.subtitleClass='text-gray-500 dark:text-gray-400'] - Additional classes for the subtitle.
 * @param {string} [props.containerClass='flex flex-col gap-1 py-4'] - Additional classes for the container.
 * @returns {JSX.Element} The rendered GenericTitle component.
 *
 * @example
 * return <GenericTitle title="Dashboard" subtitle="Welcome to the dashboard" />;
 *
 * @remarks
 * The component uses the `classNames` library to conditionally apply classes based on props.
 */
export const GenericTitle = ({
  title,
  subtitle,
  isMobile = false,
  isDesktop = false,
  titleClass = 'text-2xl font-semibold',
  subtitleClass = 'text-gray-500 dark:text-gray-400',
  containerClass = 'flex flex-col gap-1 py-4'
}: GenericTitleProps): JSX.Element => (
  <div
    className={classNames(containerClass, {
      'sm:hidden': isMobile,
      'hidden md:flex': isDesktop,
      flex: !isMobile && !isDesktop // default to flex for all devices if no specific prop is set
    })}
  >
    {/* Title */}
    <h2 className={titleClass}>{title}</h2>
    {/* Subtitle */}
    <p className={subtitleClass}>{subtitle}</p>
  </div>
);
