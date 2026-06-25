package com.url.url_shortener_sb.dtos;

import lombok.Data;

import java.util.Set;
@Data
public class LoginRequest {
    private String username;

    private String password;
}
