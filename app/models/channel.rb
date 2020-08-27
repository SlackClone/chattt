class Channel < ApplicationRecord
  validates :name, presence: true
  belongs_to :user
  has_many :messages
  belongs_to :workspace
end
