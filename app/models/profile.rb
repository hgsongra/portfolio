class Profile < ApplicationRecord
	validates :first_name, presence: true
	has_attached_file :avatar, 
		storage: :dropbox, styles: { :small => "150x150>", medium: "300x300>" },
    url: ':class/:id/:style/:basename.:extension',
    path: ':class/:id/:style/:basename.:extension',
		dropbox_credentials: Rails.root.join('config/paperclip-dropbox.yml'), 
		dropbox_visibility: 'public',
		default_url: '/assets/default.png'

  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/
end
