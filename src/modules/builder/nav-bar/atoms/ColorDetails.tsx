import { ColorBox } from './ColorBox';
import { ColorBoxWrapper } from './ColorBoxWrapper';

export const ColorDetails = ({ label, bgColor }: { label: string; bgColor: string }) => {
  return (
    <div className="flex items-center w-100 gap-3">
      <ColorBoxWrapper>
        <ColorBox bgColor={bgColor} />
      </ColorBoxWrapper>
      <span className="text-xs text-[#2E4052]">{label}</span>
    </div>
  );
};