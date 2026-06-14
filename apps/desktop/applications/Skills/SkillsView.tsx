import { WindowProps } from "@/components/WindowManagement/WindowCompositor";
import Image from 'next/image';
import styles from './SkillsView.module.css';

interface SkillPointProps {
  text: string;
}

function SkillPoint({ text }: SkillPointProps) {
  return (
    <div className={styles['skill-point']}>
      <span className={styles['checkmark']}>✅</span>
      <span className={styles['point-text']}>{text}</span>
    </div>
  );
}

interface SkillCategoryProps {
  title: string;
  subtitle?: string;
  iconSrc: string;
  children: React.ReactNode;
}

function SkillCategoryCard({ title, subtitle, iconSrc, children }: SkillCategoryProps) {
  return (
    <div className={styles['category-card']}>
      <div className={styles['card-header']}>
        <div className={styles['icon-wrapper']}>
          <Image
            quality={100}
            draggable={false}
            width={28}
            height={28}
            src={iconSrc}
            alt={title}
          />
        </div>
        <div className={styles['header-text']}>
          <h2>{title}</h2>
          {subtitle && <span className={styles['subtitle']}>{subtitle}</span>}
        </div>
      </div>
      <div className={styles['card-body']}>
        {children}
      </div>
    </div>
  );
}

export default function SkillsView(props: WindowProps) {
  return (
    <div className="content-outer">
      <div className="content">
        <div className='content-inner'>
          <div className={styles['skills-container']}>
            <div className={styles['skills-header']}>
              <h1>Skills & Technical Expertise</h1>
              <p>Foundations in Data Science, Machine Learning, and Programming</p>
            </div>

            <div className={styles['skills-grid']}>
              {/* Programming Languages */}
              <SkillCategoryCard title="Programming Languages" iconSrc="/icons/skills/vsc.svg">
                <div className={styles['languages-list']}>
                  <div className={styles['lang-item']}>
                    <div className={styles['lang-meta']}>
                      <Image src="/icons/skills/r.png" alt="R logo" width={24} height={24} />
                      <span className={styles['lang-name']}>R Programming</span>
                    </div>
                    <div className={styles['points-grid']}>
                      <SkillPoint text="Core Syntax, Vectors, Matrices & Data Frames" />
                      <SkillPoint text="Custom Functions & Control Flow" />
                      <SkillPoint text="Functional Programming (apply, lapply, sapply)" />
                    </div>
                  </div>

                  <div className={styles['lang-item']}>
                    <div className={styles['lang-meta']}>
                      <Image src="/icons/skills/python.svg" alt="Python logo" width={24} height={24} />
                      <span className={styles['lang-name']}>Python</span>
                    </div>
                    <div className={styles['points-grid']}>
                      <SkillPoint text="Data Science & ML Foundations" />
                      <SkillPoint text="Object-Oriented Programming & Scripts" />
                    </div>
                  </div>

                  <div className={styles['lang-item']}>
                    <div className={styles['lang-meta']}>
                      <Image src="/icons/skills/cpp.svg" alt="C++ logo" width={24} height={24} />
                      <span className={styles['lang-name']}>C++</span>
                    </div>
                    <div className={styles['points-grid']}>
                      <SkillPoint text="Object-Oriented Design & OOP Principles" />
                      <SkillPoint text="Basic Algorithms & Data Structures" />
                    </div>
                  </div>
                </div>
              </SkillCategoryCard>

              {/* R Ecosystem (Tidyverse) */}
              <SkillCategoryCard title="R Libraries & Ecosystem" subtitle="tidyverse" iconSrc="/icons/skills/tidyverse.png">
                <div className={styles['modules-list']}>
                  <div className={styles['module-item']}>
                    <div className={styles['module-header']}>
                      <span className={styles['module-name']}>readr</span>
                    </div>
                    <div className={styles['points-grid']}>
                      <SkillPoint text="Reading data files (.csv, .tsv, etc.)" />
                    </div>
                  </div>

                  <div className={styles['module-item']}>
                    <div className={styles['module-header']}>
                      <span className={styles['module-name']}>tidyr</span>
                    </div>
                    <div className={styles['points-grid']}>
                      <SkillPoint text="Tidy data principles" />
                      <SkillPoint text="Reshaping datasets" />
                    </div>
                  </div>

                  <div className={styles['module-item']}>
                    <div className={styles['module-header']}>
                      <span className={styles['module-name']}>stringr</span>
                    </div>
                    <div className={styles['points-grid']}>
                      <SkillPoint text="Basic string manipulation concepts" />
                    </div>
                  </div>

                  <div className={styles['module-item']}>
                    <div className={styles['module-header']}>
                      <span className={styles['module-name']}>forcats</span>
                    </div>
                    <div className={styles['points-grid']}>
                      <SkillPoint text="Working with categorical data" />
                    </div>
                  </div>

                  <div className={styles['module-item']}>
                    <div className={styles['module-header']}>
                      <span className={styles['module-name']}>ggplot2 & dplyr</span>
                    </div>
                    <div className={styles['points-grid']}>
                      <SkillPoint text="Declarative data visualization (geoms & aesthetics)" />
                      <SkillPoint text="Accessing, filtering & modifying data frames" />
                    </div>
                  </div>
                </div>
              </SkillCategoryCard>

              {/* Python Ecosystem */}
              <SkillCategoryCard title="Python Libraries" subtitle="data science & machine learning" iconSrc="/icons/skills/python.svg">
                <div className={styles['modules-list']}>
                  <div className={styles['module-item']}>
                    <div className={styles['module-header']}>
                      <span className={styles['module-name']}>NumPy</span>
                    </div>
                    <div className={styles['points-grid']}>
                      <SkillPoint text="Multidimensional arrays & vectorized operations" />
                    </div>
                  </div>

                  <div className={styles['module-item']}>
                    <div className={styles['module-header']}>
                      <span className={styles['module-name']}>Pandas</span>
                    </div>
                    <div className={styles['points-grid']}>
                      <SkillPoint text="DataFrame & Series structures" />
                      <SkillPoint text="Data cleaning, aggregation & filtering" />
                    </div>
                  </div>

                  <div className={styles['module-item']}>
                    <div className={styles['module-header']}>
                      <span className={styles['module-name']}>Matplotlib</span>
                    </div>
                    <div className={styles['points-grid']}>
                      <SkillPoint text="Plotting datasets & visual diagnostics" />
                    </div>
                  </div>

                  <div className={styles['module-item']}>
                    <div className={styles['module-header']}>
                      <span className={styles['module-name']}>Scikit-Learn</span>
                    </div>
                    <div className={styles['points-grid']}>
                      <SkillPoint text="Train-test splitting & feature preprocessing" />
                      <SkillPoint text="Foundational Machine Learning algorithms" />
                    </div>
                  </div>
                </div>
              </SkillCategoryCard>

              {/* Mathematics & Core Concepts */}
              <SkillCategoryCard title="Foundations & Mathematics" iconSrc="/icons/skills/math.png">
                <div className={styles['modules-list']}>
                  <div className={styles['module-item']}>
                    <div className={styles['module-header']}>
                      <span className={styles['module-name']}>Linear Algebra (MIT 18.06)</span>
                    </div>
                    <div className={styles['points-grid']}>
                      <SkillPoint text="Systems of linear equations & matrices" />
                      <SkillPoint text="Gaussian elimination, row operations & inverse matrices" />
                      <SkillPoint text="Vector spaces & subspaces" />
                    </div>
                  </div>

                  <div className={styles['module-item']}>
                    <div className={styles['module-header']}>
                      <span className={styles['module-name']}>AI & Text Processing</span>
                    </div>
                    <div className={styles['points-grid']}>
                      <SkillPoint text="ChatGPT Prompt Engineering for Developers" />
                      <SkillPoint text="Character Encodings (ASCII & Unicode)" />
                    </div>
                  </div>
                </div>
              </SkillCategoryCard>

              {/* Development Tools & Workflows */}
              <SkillCategoryCard title="Development Tools & Workflows" iconSrc="/icons/skills/git.svg">
                <div className={styles['modules-list']}>
                  <div className={styles['module-item']}>
                    <div className={styles['module-header']}>
                      <span className={styles['module-name']}>VS Code</span>
                    </div>
                    <div className={styles['points-grid']}>
                      <SkillPoint text="IDE customization & extension configuration" />
                      <SkillPoint text="Local development environment management" />
                    </div>
                  </div>

                  <div className={styles['module-item']}>
                    <div className={styles['module-header']}>
                      <span className={styles['module-name']}>Git & GitHub</span>
                    </div>
                    <div className={styles['points-grid']}>
                      <SkillPoint text="Version control (commit, push, branch, merge)" />
                      <SkillPoint text="Preparing for open-source contributions" />
                    </div>
                  </div>
                </div>
              </SkillCategoryCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
