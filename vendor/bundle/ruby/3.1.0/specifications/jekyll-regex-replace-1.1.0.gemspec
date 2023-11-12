# -*- encoding: utf-8 -*-
# stub: jekyll-regex-replace 1.1.0 ruby lib

Gem::Specification.new do |s|
  s.name = "jekyll-regex-replace".freeze
  s.version = "1.1.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Josh Davenport".freeze]
  s.date = "2018-11-12"
  s.email = ["josh@joshdavenport.co.uk".freeze]
  s.homepage = "https://github.com/joshdavenport/jekyll-regex-replace".freeze
  s.licenses = ["MIT".freeze]
  s.required_ruby_version = Gem::Requirement.new(">= 2.1.0".freeze)
  s.rubygems_version = "3.3.26".freeze
  s.summary = "Simple module to allow using regular expression replacing via liquid filters".freeze

  s.installed_by_version = "3.3.26" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_development_dependency(%q<jekyll>.freeze, [">= 3.1"])
  else
    s.add_dependency(%q<jekyll>.freeze, [">= 3.1"])
  end
end
