package com.montassar.spring.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainControoler {
		@RequestMapping("/")
		public  String helloWorld() {
			return  "hello world";
		}
		@RequestMapping(value = "/search", method = RequestMethod.GET)
		public String  Search (@RequestParam(value="q")String  qq) {
			return "you searched for " + qq;
			
		}
}
