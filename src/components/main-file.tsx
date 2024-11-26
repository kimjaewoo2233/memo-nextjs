"use client"
import ImageSlider from "./image-slider";
import  { useState,ChangeEventHandler, ClipboardEvent } from 'react';
import Image from "next/image";
interface Props {
    id: string;
}
const MainFile = ({ id }: Props) => {
    const [preview, setPreview] = useState<Array<{ dataUrl: string, file: File | null}>>([]);

    const onUpload: ChangeEventHandler<HTMLInputElement> = (e) => {
        e.preventDefault();
        if(e.target.files) {
            Array.from(e.target.files).forEach((file, index) => {
                const reader = new FileReader();

                reader.onloadend = () => {
                    setPreview((prevPreview) => {
                        const prev = [...prevPreview];
                        prev.unshift({
                            dataUrl: reader.result as string,
                            file
                        });
                        return prev;
                    })
                }

                reader.readAsDataURL(file);
            })
        }
    }

    const onPaste = (e: ClipboardEvent<HTMLTextAreaElement>) => {
        const clipboarditems = Array.from(e.clipboardData.items);

        clipboarditems.forEach((item) => {
            if(item.type.indexOf('image') !== -1){ //is a way to cehck if the MIME type of the item contains the word "image"
                const file: File | null = item.getAsFile();

                if(file) {
                    const reader = new FileReader();

                    reader.onload = () => {
                        setPreview((prevPreview) => [...prevPreview, {
                            dataUrl: reader.result as string,
                            file
                        }]);
                    };

                    reader.readAsDataURL(file);
                }
            }
        })

    }
    return (
        <section className="p-10">
            {/* <ImageSlider images={["/test1.png","/test2.png"]}/> */}
            <div>
                <textarea onPaste={onPaste} placeholder="Paste your image here" className="ㅐㅕㅅ">
                    {preview.map((item, index) => (
                        <img key={index} src={item.dataUrl} alt={`Preview ${index}`} />
                    ))}
                </textarea>
                    <div className="grid gird">
                        {preview.map((item, index) => (
                            <div className="w-[200px] h-[200px] relative">
                                <Image key={index} src={item.dataUrl} alt={`Preview ${index}`} fill/>
                            </div>
                        ))}
                    </div>
                <input type="file" multiple onChange={onUpload}/>
            </div>
        </section>
    )
}

export default MainFile;
