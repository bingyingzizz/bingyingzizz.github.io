# Grothendieck 范畴有足够多内射　`prop.grothendieck-enough-injectives`　·　说明
根 `../`

athcal{A}$ 是 **AB5**（滤过余极限正合），这一层层余极限保持单射与正合 ✓。
- **稳定**：增量只依赖「$U$ 的子对象全体」这一**集合**（生成元 + AB5 保证它小），故足够大的序数之后 $M_{\alpha}\to M_{\alpha+1}$ 已是同构；稳定下来的 $I := M_{\infty}$ 满足判据，故内射 ✓。对 $M\hookrightarrow I$ 重复该过程即得内射消解。∎
**标准出处**：Freyd, *Abelian Categories*；另有一条更短的路线走 Gabriel–Popescu 嵌入（把 $\mathcal{A}$ 看成 $R\text{-}\mathbf{Mod}$ 的正合反射子范畴，再把 $R\text{-}\mathbf{Mod}$ 的内射对象反射过来）。
