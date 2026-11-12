# 同伦不变性：延拓存在则度为 0
`imp.degreenonext-homotopy` · 推出 · strong 边 · 根 `../`

`thm.homotopy-invariance` 同伦不变性 → `thm.degree-nonextendable` 度非零的映射不能延拓到球

令 $H : S^{n-1}\times[0,1]\to S^{n-1}$，$H(x,t)=F((1-t)x)$。因 $0\le 1-t\le 1$ 且 $|x|=1$，有 $|(1-t)x|\le 1$，故 $(1-t)x\in\overline{B^{n}}$ 落在 $F$ 的定义域内；$H$ 是连续映射的复合、取值恒在 $S^{n-1}$，所以它是 $f$ 与常值映射 $x\mapsto F(0)$ 之间的同伦。由 `thm.homotopy-invariance`，同伦的映射在 $H_{n-1}$ 上诱导同一同态，而常值映射诱导零同态，故 $\deg f=0$。∎
