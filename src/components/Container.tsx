interface Props {
  children: React.ReactNode;
}

export function Container({ children }: Props) {
  return <div className="px-6 xl:px-20 md:px-10">{children}</div>;
}
