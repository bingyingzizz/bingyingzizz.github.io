# 共鸣定理　`thm.ubp`　·　说明
根 `../`

证法：令 $F_k = \{x : \sup_i \|u_i x\| \le k\} = \bigcap_i \{x : \|u_i x\| \le k\}$，每个 $\{x : \|u_i x\| \le k\}$ 闭（$u_i$ 连续），故 $F_k$ 闭；

逐点有界 $\implies E = \bigcup_k F_k$。

由 Baire（闭覆盖有内点），某个 $F_k$ 含球 $B(x_0, r)$。

于是对 $\|x\| \le r$：$\sup_i \|u_i x\| \le \sup_i \|u_i(x + x_0)\| + \sup_i \|u_i x_0\| \le 2k$，取 $x = r y/\|y\|$ 得 $\|u_i y\| \le 2k\|y\|/r$，故 $\sup_i\|u_i\| \le 2k/r$。

⭐ **名字**：讲义与很多中文书叫它「共鸣定理」（resonance theorem），也叫「一致有界原理」；本图两个都收进别名。三大定理里它**只要求 $E$ 完备**（$F$ 只要赋范），是最「便宜」的一条。

⚠️ $E$ 完备不能去掉：$E = c_{00}$（有限支撑序列）时取 $u_n(x) = n x_n$，逐点有界而 $\|u_n\| = n \to \infty$。

📌 **两条常用推论**：见 `cor.ubp-pointwise-limit`（逐点极限的范数界）与 `thm.bilinear-jointly-continuous`（分别连续双线性推出联合连续）；两条都只用本条加定义。
