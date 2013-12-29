class Article < ActiveRecord::Base
  attr_accessible :category_id, :chinese_title, :franch_title,
                  :chinese_content, :franch_content, :status
  belongs_to :category

  before_save :default_status

  def default_status
  	self.status ||= 'pending'
  end

  def self.search_by_title(title)
    self.where("chinese_title like ? ", "%#{title}%")
  end
end

