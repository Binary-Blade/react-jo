import { FC } from 'react';
import classNames from 'classnames';

type GenericTitleProps = {
  title: string | undefined;
  subtitle: string | undefined;
  isMobile?: boolean;
  isDesktop?: boolean;
  titleClass?: string;
  subtitleClass?: string;
  containerClass?: string;
};

export const GenericTitle: FC<GenericTitleProps> = ({
  title,
  subtitle,
  isMobile = false,
  isDesktop = false,
  titleClass = 'text-2xl font-semibold',
  subtitleClass = 'text-gray-500 dark:text-gray-400',
  containerClass = 'flex flex-col gap-1 py-4'
}) => (
  <div
    className={classNames(containerClass, {
      'sm:hidden': isMobile,
      'hidden md:flex': isDesktop,
      flex: !isMobile && !isDesktop // default to flex for all devices if no specific prop is set
    })}
  >
    <h2 className={titleClass}>{title}</h2>
    <p className={subtitleClass}>{subtitle}</p>
  </div>
);
