import { Component } from '@angular/core';
import { SKILLS } from '../../data/skills.data';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  readonly categories = [
    { key: 'frontend' as const, label: 'Langages', skills: SKILLS.filter((s) => s.category === 'frontend') },
    { key: 'backend' as const, label: 'Systèmes & Infra', skills: SKILLS.filter((s) => s.category === 'backend') },
    { key: 'tools' as const, label: 'Outils', skills: SKILLS.filter((s) => s.category === 'tools') },
  ];
}
