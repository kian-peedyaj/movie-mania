import { useToast } from "@/components/ui/use-toast";
import { CircleX, Info } from "lucide-react";

export const useCustomToast = () => {
  const { toast } = useToast();

  const showToast = (props: any) => {
    const modifiedProps = props;
    const prependIcon = (text: string) => {
      return (
        <span className="flex flex-row">
          <div style={{ marginRight: "12px" }}>
            {props.variant === "destructive" ? <CircleX /> : <Info />}
          </div>
          <text>{text}</text>
        </span>
      );
    };
    if (props.title) {
      modifiedProps.title = prependIcon(props.title);
    } else {
      modifiedProps.description = prependIcon(props.description);
    }
    toast(modifiedProps);
  };

  return { showToast };
};
