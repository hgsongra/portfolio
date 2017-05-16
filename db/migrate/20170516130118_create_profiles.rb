class CreateProfiles < ActiveRecord::Migration[5.0]
  def change
    create_table :profiles do |t|
      t.string :first_name
      t.string :last_name
      t.date :dob
      t.string :email
      t.date :dob
      t.string :mobile
      t.string :skype
      t.text :address

      t.timestamps
    end
  end
end
