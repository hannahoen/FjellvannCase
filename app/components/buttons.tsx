import { iButton, iModule } from "@/utils/sections";

interface IProps {
    buttons: iButton[];
    backgroundColor: string;
}

export const Buttons: React.FC<IProps> = ({ buttons, backgroundColor }) => {
    return (
        <div className={`flex flex-row gap-5`}>
           {buttons.map((button, index) => (
                <div key={Math.random()} 
                    className={`cursor-pointer uppercase font-bold text-xl p-5 text-zinc-900 
                                ${index === 0 ? `bg-case-yellow hover:bg-yellow-400 ${backgroundColor==="yellow" ? "border-black border-2" : ""}` 
                                            : `bg-case-white hover:bg-stone-100 ${backgroundColor==="white" || backgroundColor==="gray" ? "border-black border-2" : ""}`} 
                    `}>
                    {button.title}
                </div>
           ))}
        </div>
    );
};
