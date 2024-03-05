import { useState } from "react";
import Modal from "../../../components/Modal";
import Label from "../../../components/Label";
import DropdownInput from "../../../components/DropdownInput";
import TextInput from "../../../components/TextInput";
import TextEditor from "../../../components/TextEditor";
import FileInput from "../../../components/FileInput";
import PrimaryButton from "../../../components/PrimaryButton";

export default function MaintenaceRequestForm ({makingRequest, closeModal}) {
    const properties = [
        {
            name: "Unit010",
        },
    ];
    return (
        <>
            <Modal show={makingRequest} onClose={closeModal}>
                <div className="flex items-center justify-center">
                    <div className="w-full mt-6 px-6 py-4 bg-white shadow-md overflow-hidden md:rounded-lg">
                        <h2 className="text-center font-medium">Submit Maintenance Request</h2>
                        <form>
                            <div className="form-group mt-1">
                                <Label htmlFor="property" value="Property:"/>
                                <DropdownInput
                                className="mt-1 p-1 block w-full"
                                value="Property"
                                items={properties}
                                />
                            </div>
                            <div className="form-group mt-1">
                                <Label htmlFor="issue" value="Issue:"/>
                                <TextInput 
                                type="text"
                                id="issue"
                                name="name"
                                className="p-1 block w-full"
                                required
                                />
                            </div>
                            <div className="form-group mt-1">
                                <Label htmlFor="description" value="Description:" />
                                <TextEditor 
                                rows="4"
                                id="description"
                                className="p-1 block w-full"
                                />
                            </div>
                            <div className="form-group mt-1">
                                <Label htmlFor="upload-file" value="Upload Image:" />
                                <FileInput />
                            </div>
                            <PrimaryButton type="submit" className="mt-2">Submit</PrimaryButton>
                        </form>
                    </div>
                </div>
            </Modal>
        </>
    );
}