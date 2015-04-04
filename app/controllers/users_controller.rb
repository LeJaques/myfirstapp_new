class UsersController < ApplicationController
	before_action :destroy,

def destroy
    @user = User.find(params[:id])
    @user.destroy

    if @user.destroy
        redirect_to root_url, notice: "User deleted."
    end
  end

end
