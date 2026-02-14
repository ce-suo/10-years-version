import { EntityEvents } from "kubejs/entity";
EntityEvents.spawned(event => {
  const entity = event.entity;
  if (entity.type === 'minecraft:wither') {
    entity.maxHealth = 350.0
    entity.health = 350.0;
  }
});

