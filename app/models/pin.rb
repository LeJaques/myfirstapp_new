class Pin < ActiveRecord::Base
	belongs_to :user

	 has_attached_file :image, :styles => { :medium => "300x300>", :thumb => "100x100>" }, :default_url => "http://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/256/Status-image-missing-icon.png"
	 validates_attachment :image, presence: true, content_type: { content_type: ["image/jpg", "image/jpeg", "image/png"] }
end
