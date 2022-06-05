import React from 'react'
import {Label,FileInput,Select} from 'flowbite-react';

export const Upload = () => {
    return (
        <div className="p-5 space-y-5">
            <div id="select">
                <Label
                    className="mb-2 block"
                    htmlFor="countries"
                >
                   Выберите модуль.
                </Label>
                <Select
                    id="countries"
                    required={true}
                >
                    <option>
                        Гари
                    </option>
                    <option>
                        Дымы
                    </option>
                    <option>
                        Метеорология
                    </option>
                </Select>
            </div>

            <div id="fileUpload">
                <FileInput
                    id="file"
                    helperText="Добавьте снимок."
                />
            </div>
        </div>
    )
}