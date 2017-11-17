package com.javasampleapproach.restful.controller;

public class Dashboard {

	private int id ;
	private String title;
	private String content;
	private String authorName ;
	private String datePosted;
	private String imgPath;
	
	public Dashboard() {
		
	}

	public Dashboard(int id, String title, String content, String authorName, String datePosted, String imgPath) {
		this.id = id;
		this.title = title;
		this.content = content;
		this.authorName = authorName;
		this.datePosted = datePosted;
		this.imgPath = imgPath;
	}
	
	public Dashboard(String title, String content, String authorName, String datePosted, String imgPath) {
		this.title = title;
		this.content = content;
		this.authorName = authorName;
		this.datePosted = datePosted;
		this.imgPath = imgPath;
	}
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getAuthorName() {
		return authorName;
	}
	public void setAuthorName(String authorName) {
		this.authorName = authorName;
	}
	public String getDatePosted() {
		return datePosted;
	}
	public void setDatePosted(String datePosted) {
		this.datePosted = datePosted;
	}
	public String getImgPath() {
		return imgPath;
	}
	public void setImgPath(String imgPath) {
		this.imgPath = imgPath;
	}
	
}
