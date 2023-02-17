import { isBlank } from '../../shared/helpers/stringHelper';
import { mapNameToImagePath } from '../../shared/constants';

export async function loadAndCheckIfImageExists(src: string): Promise<boolean> {
    return new Promise(resolve => {
        if (isBlank(src)) {
            return resolve(false);
        }

        const img = new Image();
        img.src = src;

        img.onload = () => {
            resolve(true);
        };
        img.onerror = () => {
            resolve(false);
        };
    });
}

export const getStageImagePath = (stage: string): string => mapNameToImagePath[stage];
