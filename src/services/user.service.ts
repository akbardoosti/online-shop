import {UserAPI} from "@/constants/api.consts";
import apiService from "@/services/api-service";
import {ApiResponse} from "@/types/api-response.type";
import {UserModel, UserRole, UserTypeResponse} from "@/types/user.types";
import {FormEvent} from "react";


export class UserService {
    constructor() {
    }
    async getUserRoles(page: number, pageSize: number, UserId?: string) {

        const response = await apiService.get<ApiResponse<UserRole>>(
            UserAPI.GET_USER_ROLES,
            {
                params: {
                    UserId: UserId,
                    PageNumber: page,
                    PageSize: pageSize
                }
            }
        )
        if (response.status == 200) {
            return response.data;
        }
    }

    async getUserList(page: number, pageSize: number, HubId?: string) {
        let filter = {};
        if (HubId) {
            filter = {
                HubId: HubId
            }
        }
        const url = UserAPI.GET_LIST;
        const response = await apiService.get<ApiResponse<UserModel>>(
            url,
            {
                params: {
                    ...filter,
                    PageNumber: page,
                    PageSize: pageSize
                }
            });
        if (response.status == 200) {
            return response.data;
        }
    }

    async createUser(user: Partial<UserModel>) {
        const response = await apiService.post<UserTypeResponse>(
            UserAPI.CREATE_USER,
            user
        );
        if (response.status == 200) {
            const username = response.data.username;
            const password = response.data.password;

            const text = `کاربر با موفقیت ثبت شد
            \n نام کاربری: ${username} \n کلمه عبور: ${password}`;
            alert(text);
        }
    }

    async deleteUser(userId: string) {
        const response = await apiService.delete(
            UserAPI.DELETE_USER,
            {
                data: {
                    userId
                }
            },
        );
        if (response.status == 204) {
            return true
        } else {
            return false;
        }
    }
}