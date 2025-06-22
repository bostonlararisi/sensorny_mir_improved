// src/data/siteData.js

// Импортируем каждую методику из ее отдельного файла
import { aba } from './courses/aba.js';
import { pecs } from './courses/pecs.js';
import { sensory_integration } from './courses/sensory_integration.js';
import { teacch } from './courses/teacch.js';
import { social_stories } from './courses/social_stories.js';
import { esdm } from './courses/esdm.js';
import { fct } from './courses/fct.js';
import { cbt } from './courses/cbt.js';
import { video } from './courses/video.js';
import { prt } from './courses/prt.js';
import { parent_mediated } from './courses/parent_mediated.js';
import { dir_floortime } from './courses/dir_floortime.js';
import { music_therapy } from './courses/music_therapy.js';
import { hanen_mtw } from './courses/hanen_mtw.js';
import { jasper } from './courses/jasper.js';
import { social_skills_groups } from './courses/social_skills_groups.js';
import { telehealth } from './courses/telehealth.js';
import { mindfulness } from './courses/mindfulness.js';

// Собираем все импортированные методики в один массив
export const coursesData = [
  aba,
  pecs,
  sensory_integration,
  teacch,
  social_stories,
  esdm,
  fct,
  cbt,
  video,
  prt,
  parent_mediated,
  dir_floortime,
  music_therapy,
  hanen_mtw,
  jasper,
  social_skills_groups,
  telehealth,
  mindfulness
];

// pecsData пока оставляем здесь для простоты
export const pecsData = [
  // ... (здесь остается ваш массив pecsData без изменений)
]