# 完备情形的 F–T　`thm.fubini-complete`　·　说明
根 `../`

为什么需要这一条：**$\mu \times \nu$ 通常不完备**（见下一条），所以 Riesz 意义上的「可积函数」往往落在完备化 $\lambda$ 里，而不是 $\mathcal{M}\otimes\mathcal{N}$ 里。

代价是所有的断言都退化成「**对几乎处处的 x / y**」—— 因为 $\mathcal{L}$ 里多出来的那些集合只在零集上有区别。

证明的核心：先证 $f \ge 0$。若 $f = \chi _E$，$E = F \cup G$ 其中 $F \in \mathcal{M}\otimes\mathcal{N}$、$G \subseteq H$ 且 $\mu \times \nu (H) = 0$，设不交并，则 $f = \chi _F + \chi _G$。$\chi _F$ ✓（归 Fubini–Tonelli），$\chi _G$ ✓（因为每条截口的测度都是 0）。**应该是核心思想，其余都类似**。
