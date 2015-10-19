class Pin < ActiveRecord::Base

#	belongs_to :user
#	has_attached_file :image, :styles => { :medium => "300x300>", :thumb => "100x100>" }, :default_url => "http://40.media.tumblr.com/tumblr_lojfcezDPQ1qasthro1_1280.jpg"
	#	validates_attachment_content_type :image, :content_type => ["image/jpg", "image/jpeg", "image/png"]
#end

belongs_to :user


	has_attachment  :image, :styles => { :medium => "300x300>", :thumb => "100x100>" }, accept: [:jpg, :png, :gif]
	 #has_attachment :image, :styles => { :medium => "300x300>", :thumb => "100x100>" }, :default_url => "http://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/256/Status-image-missing-icon.png"
	 #validates_attachments :image, presence: true, content_type: { content_type: ["image/jpg", "image/jpeg", "image/png"] }
	validates :image, presence: true
	validates :description, presence: true




end