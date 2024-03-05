import Label from "../../../components/Label"
import PrimaryButton from "../../../components/PrimaryButton"
import TextInput from "../../../components/TextInput"

export default function DepositForm() {
    return (
        <>
            <div className="w-96 mx-auto">
                <form action="" method="get">
                    <div className="mt-4">
                        <Label
                            htmlFor="amount"
                            value='Enter Amount'
                        />
                        <TextInput
                            type="text"
                            className="mt-1 p-1 block w-full"
                        />
                    </div>
                    <div className='flex flex-col items-center justify-center mt-4'>
                        <div className="mt-4">
                            <PrimaryButton
                                type="submit"
                            >
                                Deposit
                            </PrimaryButton>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}