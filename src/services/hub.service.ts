import {HubAPI} from "@/constants/api.consts";
import apiService from "@/services/api-service";
import {ApiResponse} from "@/types/api-response.type";
import {HubModel} from "@/types/hub.types";

export async function getHubList(page: number, pageSize: number, findText?:string) {

    let filter = {};
    console.log(findText)
    if (findText) {
        filter = {
            HubName: findText
        }
    }
    const url = HubAPI.GET_LIST;
    const response = await apiService.get<ApiResponse<HubModel>>(
        url,
        {
            params: {
                ...filter,
                PageNumber: page,
                PageSize: pageSize
            }
        });
    if (response.status == 200) {
        const list = response.data;
        if (list) {
            return list;
        }
    }
}