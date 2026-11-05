# 完备情形的 F–T　`thm.fubini-complete`　·　说明
根 `../`

为什么需要这一条：**$\mu \times \nu$ 通常不完备**（见下一条），所以 Riesz 意义上的「可积函数」往往落在完备化 $\lambda$ 里，而不是 $\mathcal{M}\otimes\mathcal{N}$ 里。

代价是所有的断言都退化成「**对几乎处处的 x / y**」—— 因为 $\mathcal{L}$ 里多出来的那些集合只在零集上有区别。

证明的核心：先证 $f \ge 0$。

若 $f = \chi _E$，$E = F \cup G$ 其中 $F \in \mathcal{M}\otimes\mathcal{N}$、$G \subseteq H$ 且 $\mu \times \nu (H) = 0$，设不交并，则 $f = \chi _F + \chi _G$。

$\chi _F$ ✓（归 Fubini–Tonelli），$\chi_G$ ✓（由集合版 Tonelli，$H_x$ 对 **a.e.** $x$ 零测；再由 $\mu$ 完备，$G_x \subseteq H_x$ 在这些 $x$ 处可测且零测 —— 只是 a.e.，**不是每条**：$G = \{0\}\times[0,1]$ 在 $x = 0$ 处的截口测度是 $1$）。

**应该是核心思想，其余都类似**。
