package fr.azteck.vote.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class RedirectController {

    @GetMapping("/api/docs")
    public String redirectToSwagger() {
        return "redirect:/swagger-ui/index.html";
    }
}