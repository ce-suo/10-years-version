EntityEvents.hurt(e=>{
   
if(e.source.actual&&e.entity.isLiving() &&e.source.actual.isPlayer()&&e.source.actual.mainHandItem==='cataclysm:the_incinerator'){
 
        
        if(Math.random() < 0.5){
        e.entity.potionEffects.add('cataclysm:blazing_brand',260,0);
        }
        if(Math.random() < 0.4){
        e.entity.potionEffects.add('cataclysm:blazing_brand',220,1);
            }
        if(Math.random() < 0.3){
        e.entity.potionEffects.add('cataclysm:blazing_brand',180,2);
                }
        if(Math.random() < 0.2){
        e.entity.potionEffects.add('cataclysm:blazing_brand',140,3);
                    }
        if(Math.random() < 0.1){
        e.entity.potionEffects.add('cataclysm:blazing_brand',100,4);
                        }
        if(Math.random() < 0.5){
        e.source.actual.potionEffects.add("minecraft:instant_health",1,0)
    }
}
if(e.source.actual&&e.entity.isLiving() &&e.source.actual.isPlayer()&&e.source.actual.mainHandItem==='cataclysm:infernal_forge'){
    e.source.actual.potionEffects.add('minecraft:saturation',1,0)
}
if(e.source.actual&&e.entity.isLiving() &&e.source.actual.isPlayer()&&e.source.actual.mainHandItem==='cataclysm:void_forge'){
    e.source.actual.potionEffects.add('minecraft:saturation',1,0)
}
})
