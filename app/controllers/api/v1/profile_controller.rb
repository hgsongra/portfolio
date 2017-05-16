class Api::V1::ProfileController < Api::V1::BaseController
  
  before_action :set_profile, only: [:show, :update]


  def show
  	respond_with @profile, json: @profile
  end

  def update
  	@profile.update_attributes(profile_params)
    respond_with @profile, json: @profile
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_profile
      @profile = Profile.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def profile_params
      params.require(:profile).permit(:first_name, :last_name, :dob, :email, :dob, :mobile, :skype, :address)
    end

end
