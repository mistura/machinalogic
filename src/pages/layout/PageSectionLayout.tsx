import { ReactNode } from "react";
import PageSection from "./PageSection";

export const PageSectionLayout = (props: {
  items: Array<{
    leftImage: string;
    bodyText: ReactNode;
    subtitle: string;
    title: string;
    position?: string;
    id?: string;
  }>;
}) => {
  return (
    <div className="flex flex-col items-center justify-center page-section-layout ">
      {props.items.map((item) => (
        <PageSection
          id={item.id}
          key={item.title}
          leftImage={item.leftImage}
          bodyText={item.bodyText}
          subtitle={item.subtitle}
          title={item.title}
          position={item.position}
        />
      ))}
    </div>
  );
};
