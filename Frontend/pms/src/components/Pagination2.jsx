import PrimaryButton from "./PrimaryButton";

export default function Pagination2(){
    return (
        <>
            <div className="flex mt-4">
                <PrimaryButton className="flex items-center justify-center">
                    Previous
                </PrimaryButton>
                <PrimaryButton className="flex items-center justify-center">
                    Next
                </PrimaryButton>
            </div>
        </>
    );
}