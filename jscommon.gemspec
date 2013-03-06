$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "jscommon/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "jscommon"
  s.version     = JsCommon::VERSION
  s.authors     = ["Dieterich Lawson"]
  s.email       = ["dieterich.lawson@gmail.com"]
  s.homepage    = "ellipsishealth.com"
  s.summary     = "Javascript common library"
  s.description = "This Rails plugin contains a collection of useful Javascript utilities."

  s.files = Dir["{app,config,db,lib}/**/*"] + ["MIT-LICENSE", "Rakefile", "README.rdoc"]
  s.test_files = Dir["test/**/*"]

  s.add_dependency "rails", "~> 3.2.12"

  s.add_development_dependency "sqlite3"
end
