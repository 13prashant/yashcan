import Confetti from "react-confetti";
import useWindowSize from "../../../hooks/useWindowSize";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";

const WeAreExpanding = () => {
    const [open, setOpen] = useState(true);
    const { windowSize } = useWindowSize();

    return (
        <>
            <Confetti
                className="w-full h-full"
                recycle={false}
                width={windowSize.width}
                height={windowSize.height}
            />
            <Dialog.Root open={open} onOpenChange={setOpen}>
                <Dialog.Content className="weAreExpanding">
                    <div className="weAreExpanding__content">
                        <svg
                            width={100}
                            height={100}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 512"
                        >
                            <path d="M0 488L0 171.3c0-26.2 15.9-49.7 40.2-59.4L308.1 4.8c7.6-3.1 16.1-3.1 23.8 0L599.8 111.9c24.3 9.7 40.2 33.3 40.2 59.4L640 488c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24l0-264c0-17.7-14.3-32-32-32l-384 0c-17.7 0-32 14.3-32 32l0 264c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24zm488 24l-336 0c-13.3 0-24-10.7-24-24l0-56 384 0 0 56c0 13.3-10.7 24-24 24zM128 400l0-64 384 0 0 64-384 0zm0-96l0-80 384 0 0 80-384 0z" />
                        </svg>
                        <Dialog.Title className="title">
                            We&apos;re Expanding!
                        </Dialog.Title>
                        <Dialog.Description className="description">
                            YashCan Incorporated proudly announces the opening
                            of our new warehouse at <br />
                            <strong>
                                2415 Kishwaukee Street, Rockford, Illinois
                                61104.
                            </strong>{" "}
                            <br />
                            We specialize in premium plastic grades – HDPE,
                            LDPE, PP, and PET, serving the recycling and
                            manufacturing industries.
                            <br /> <br />
                            Quality materials | Reliable supply | Endless
                            possibilities.
                        </Dialog.Description>
                        <div
                            className="weAreExpanding__close"
                            onClick={() => setOpen(false)}
                        >
                            X
                        </div>
                    </div>
                </Dialog.Content>
            </Dialog.Root>
        </>
    );
};

export default WeAreExpanding;
