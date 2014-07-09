#!/usr/bin/env ruby

require "rubygems"
require "haml"

def render_file(filename, params={})
	contents = File.read(filename)
	Haml::Engine.new(contents, escape_html:true, attr_wrapper:'"').render Object.new, params
end

def render_partial(name, params={})
	render_file File.join("partials", "_#{name}.haml"), params
end

def render_content(name)
	render_file File.join("pages", "#{name}.haml")
end

def widget(shape, url, img)
	render_partial("widget", {shape:shape, url:url, img:img})
end

def render_file_list(name_list)
	name_list.each do |name|
		f=File.open(File.join("html","#{name}.html"), "w")
		f.write(render_file("layout.haml", page:name))
		f.close
	end
end

def active(current, required)
	current==required ? "active" : ""
end

render_file_list(ARGV)
