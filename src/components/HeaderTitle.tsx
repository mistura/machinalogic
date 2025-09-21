import { Tag } from "antd";

export default function HeaderTitle(props: {
  tagText: string;
  tagStyle?: string;
  Header: string;
  HeaderStyle: string;
}) {
  return (
    <div className="space-y-[12px]">
      <Tag
        className={`py-[7px] px-4 bg-[#F5F5F5] font-semibold shadow-md uppercase rounded-2xl border-none outline-none ${props.tagStyle}`}
      >
        {props.tagText}
      </Tag>
      <h2
        className={`font-semibold md:text-[34px] text-[24px] uppercase ${props.HeaderStyle}`}
      >
        {props.Header}
      </h2>
    </div>
  );
}
