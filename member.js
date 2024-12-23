function skillsMember(){
    this.skill = [];
    this.addSkill = function(skill){
        this.skill.push(skill);
    }
    this.removeSkill = function(skill){
        this.skill = this.skill.filter(function(item){
            return item !== skill;
        });
    }
    this.getSkill = function(){
        return this.skill;
    }
}